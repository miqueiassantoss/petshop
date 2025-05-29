import {apiConfig} from "./api-config.js"

export async function newSchedule({id, tutorName, petName, telephone, description, date, time}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        tutorName,
        petName,
        telephone,
        description,
        date, 
        time,
      })
    })
    alert("Agendamento  realizado")
    

  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar.")
  }
}