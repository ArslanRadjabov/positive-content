let inputM = document.querySelector(".input-num");
let item1 = document.querySelector(".content__postive");
let item2 = document.querySelector(".content__negative");
let item3 = document.querySelector(".content__neutral");
let changeBtn = document.querySelector(".btn");
let default_Text = document.querySelector(".content__text");

item1.addEventListener("click", () => {
    inputM.value = 1;
    item1.classList.add("bolder");
    item2.classList.remove("bolder");
    item3.classList.remove("bolder");
    default_Text.textContent = "positive"

})
item2.addEventListener("click", () => {
    inputM.value = 2;
    item2.classList.add("bolder")
    item1.classList.remove("bolder");
    item3.classList.remove("bolder");

    default_Text.textContent = "negative"

})
item3.addEventListener("click", () => {
    inputM.value = 3;
    item3.classList.add("bolder")
    item2.classList.remove("bolder");
    item1.classList.remove("bolder");

    default_Text.textContent = "neutral"

})

changeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputM.value);

    if (inputM.value == 1) {
        item1.classList.add("bolder");
        item2.classList.remove("bolder");
        item3.classList.remove("bolder");
        default_Text.textContent = "positive"
        inputM.value = " "
    } else if (inputM.value == 2) {
        item2.classList.add("bolder")
        item1.classList.remove("bolder");
        item3.classList.remove("bolder");
        default_Text.textContent = "negative"
        inputM.value = " "
    } else if (inputM.value == 3) {
        item3.classList.add("bolder")
        item2.classList.remove("bolder");
        item1.classList.remove("bolder");
        default_Text.textContent = "neutral"
        inputM.value = " "
    } else {
        alert("siz hato raqam kiritdingiz...")
        inputM.value = " "
    }

})