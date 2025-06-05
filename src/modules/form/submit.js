const form = document.querySelector("form")
const modal = document.querySelector(".modal-container")

import { newSchedule } from "../../services/new-schedule.js"

form.onsubmit = async (event) => {
  container.classList.remove("blur")
  modal.classList.add("hidden")


  try {
    //Pegando os dados do formulário
    const tutorName = document.getElementById("input-owner-name").value
    const petName = document.getElementById("input-pet-name").value
    const telephone = document.getElementById("input-tel").value
    const description = document.getElementById("input-description").value
    const date = document.getElementById("input-date").value
    const time = document.getElementById("select-time").value
    const id = new Date().getTime()

    //Enviando os dados para o banco de dados
    await newSchedule({
      id, 
      tutorName, 
      petName,
      telephone,
      description,
      date,
      time,
      id,
    })

    location.reload()
  } catch (error) {
    alert("Não foi possível enviar o formulário, tente novamente.")
  }
}
