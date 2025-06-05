import dayjs from "dayjs"
import Inputmask from "inputmask"

//Esse script é responsável por abrir o date picker no topo da tela
const dateInputField = document.querySelector(".input-date")
dateInputField.addEventListener("click", () => {
  dateInputField.showPicker?.()
})

//Coloca a data de hoje e não permite datas anteriores
dateInputField.value = dayjs(new Date()).format("YYYY-MM-DD")
dateInputField.min = dayjs(new Date()).format("YYYY-MM-DD")

//Esse script é responsável pra abrir o date picker no modal.
const dateInputField2 = document.querySelector("#input-date")
dateInputField2.addEventListener("click", () => {
  dateInputField2.showPicker?.()
})

//Coloca a data de hoje e não permite anteriores
dateInputField2.value = dayjs(new Date()).format("YYYY-MM-DD")
dateInputField2.min = dayjs(new Date()).format("YYYY-MM-DD")

// Fazendo o script pra abrir o formulário de criação de agendamento
const container = document.getElementById("container")
const newSchedule = document.querySelector(".new-schedule")
const modal = document.querySelector(".modal-container")

newSchedule.addEventListener("click", () => {
  container.classList.add("blur")
  modal.classList.remove("hidden")
})

// Formatando o input-tel
const tel = document.getElementById("input-tel")
Inputmask("(99) 9999-9999").mask(tel)
