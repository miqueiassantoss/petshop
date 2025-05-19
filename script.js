//Esse script é responsável por abrir o date picker ao clicar no input de data
const dateInput = document.querySelector(".input-date-wrapper");
const dateInputField = document.querySelector(".input-date");
const today = new Date().toISOString().split("T")[0]


dateInput.addEventListener("click", () => {
  dateInputField.showPicker?.()
})

//
dateInputField.value = today

