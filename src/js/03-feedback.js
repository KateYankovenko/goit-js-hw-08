import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onUserDataInp, 500));
form.addEventListener("submit", onFormSubmit);

// every time u reloading this page
onFormReload();

//object of user data
function onInputObj() {
    return ({
        email: form.elements.email.value,
        message: form.elements.message.value,
    })
};

//data obj. to local storage
function onUserDataInp() {
    const filledDataFields = onInputObj();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filledDataFields));//here we will store in localStorage data, but it can store only stringed data
};

//page reloading and checking
function onFormReload() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        const fillUserInputs = JSON.parse(savedData);
        form.elements.email.value = fillUserInputs.email;
        form.elements.message.value = fillUserInputs.message;
    }
}

// clearing form and cosoling while submitting
function onFormSubmit(e) {
    e.preventDefault();
    const elValue = form.elements.email.value;
    const msgValue = form.elements.message.value;
    if (!elValue || !msgValue) {
        alert('You should fill in all the fields!');
    return;
    } 
    // e.currentTarget.reset();
    console.log(onInputObj());
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}



// 1.Відстежуй на формі подію input, і щоразу записуй у 
// локальне сховище об'єкт з полями email і message, у 
// яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок
// "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища,
//     і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а 
// також виводь у консоль об'єкт з полями email, message 
// та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж 
// раз на 500 мілісекунд.Для цього додай до проекту і 
// використовуй бібліотеку lodash.throttle.