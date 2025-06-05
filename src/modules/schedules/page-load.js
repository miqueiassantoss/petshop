import { schedulesDay } from "../form/load.js"
const searchDate = document.getElementById("search-date")
import { scheduleFetchByDay } from "../../services/schedules-fetch-byday.js"

import { renderSchedules } from "../../services/renderSchedules.js"

document.addEventListener("DOMContentLoaded", function () {
  schedulesDay()
  renderSchedules(searchDate.value)
})

//Renderiza os agendamentos do dia selecionado
searchDate.addEventListener("change", () => {
  renderSchedules(searchDate.value)
})
