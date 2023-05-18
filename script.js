let random_text_button = document.querySelector(".random_text_button")
let clean_button = document.querySelector(".clean_button")
let display = document.querySelector(".display")
let text_array = ["Hello World", "How are You", "if life gives you lemons make lemonade", "Scientia potentia est", "Per aspera ad astra!", "Forever young", "Let it be"]

random_text_button.addEventListener("click", () => {
    display.innerHTML = text_array[Math.floor(Math.random() * (text_array.length))]
    
})