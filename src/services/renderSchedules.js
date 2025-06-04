import { scheduleFetchByDay } from "./schedules-fetch-byday.js"

//Selecionando as seções
const periodMorning = document.querySelector(".morning")
const periodAfternoon = document.querySelector(".afternoon")
const periodNight = document.querySelector(".night")

export async function renderSchedules(date) {
  periodMorning.innerHTML = ""
  periodAfternoon.innerHTML = ""
  periodNight.innerHTML = ""

  const schedules = await scheduleFetchByDay(date)

  for await (const schedule of schedules) {
    //Criando os elementos que serão exibidos na tela
    const hr = document.createElement("hr")
    const item = document.createElement("div") //Schedule-information
    const time = document.createElement("span") //horario
    const wrapper = document.createElement("div") //wrapper dos nomes
    const dogName = document.createElement("span") //nome do dog
    const tutorName = document.createElement("span") //nome do dono
    const description = document.createElement("span") //nome serviço
    const remove = document.createElement("a") //remover agendamento

    //Definindo conteúdo dos items
    time.textContent = schedule.time
    dogName.textContent = schedule.petName
    tutorName.textContent = schedule.tutorName
    description.textContent = schedule.description

    //Definindo classes
    item.classList.add("item")
    time.classList.add("time")
    wrapper.classList.add("wrapper")
    dogName.classList.add("dog-name")
    tutorName.classList.add("tutor-name")
    description.classList.add("service-name")
    remove.classList.add("remove-schedule")
    remove.textContent = "Remover agendamento"
    remove.dataset.id = schedule.id
    hr.classList.add("short-hr")

    //Renderizando eles na tela
    wrapper.append(dogName, tutorName)
    item.append(time, wrapper, description, remove)

    if (schedule.time < "12:00") {
      periodMorning.appendChild(hr)
      periodMorning.appendChild(item)
    } else if (schedule.time < "18:00") {
      periodAfternoon.appendChild(hr)
      periodAfternoon.appendChild(item)
    } else {
      periodNight.appendChild(hr)
      periodNight.appendChild(item)
    }


  }
}
