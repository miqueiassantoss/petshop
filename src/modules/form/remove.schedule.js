import { scheduleCancel } from "../../services/cancel-schedule"
import { renderSchedules } from "../../services/renderSchedules"

const searchDate = document.getElementById("search-date")


const removeSchedule = document.querySelectorAll(".schedule-information")

removeSchedule.forEach((schedule) => {
  schedule.addEventListener("click", async (event) => {

    if (event.target.classList.contains("remove-schedule")) {
      console.log("Clicado")
      const item = event.target.closest("a")

      const {id} = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza de que deseja cancelar o agendamento?")

        if(isConfirm) {
          await scheduleCancel({id: Number(id) })
          renderSchedules(searchDate.value)
        }
      }


    } 
    else {
      console.log("não")
    }
  })
})
