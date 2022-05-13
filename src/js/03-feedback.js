import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onUserDataInp, 500));
form.addEventListener("submit", onFormSubmit);

// every time u reloading this page, all forms are cleared
onPageLoading();

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
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filledDataFields));
};

//checking and writing saved user data
function onFormSubmit() {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
        const fillUserInputs = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        form.elements.email.value = fillUserInputs.email;
        form.elements.message.value = fillUserInputs.message;
    }
}

// clearing form and cosoling while submitting
function onPageLoading (e) {
    e.preventDefault();
    localStorage.clear();
    form.reset();
    console.log(onInputObj);
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