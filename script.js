//Esse script é responsável por abrir o date picker ao clicar no input de data
const dateInput = document.querySelector(".input-date-wrapper");
const dateInputField = document.querySelector(".input-date");
const today = new Date().toISOString().split("T")[0]


dateInput.addEventListener("click", () => {
  dateInputField.showPicker?.()
})

//
dateInputField.value = today



// Fazendo o script pra abrir e fechar o formulário
const newSchedule = document.querySelector(".new-schedule")
const container = document.getElementById("container")
const modal = document.querySelector(".modal-container")

newSchedule.addEventListener("click", () => {
  container.classList.add("blur")
  modal.classList.remove("hidden")
})


//Fazendo o script pra fechar o formulário
const scheduleButton = document.querySelector(".schedule-button")

scheduleButton.addEventListener("click", (event) => {
  event.preventDefault()
  container.classList.remove("blur")
  modal.classList.add("hidden")
})