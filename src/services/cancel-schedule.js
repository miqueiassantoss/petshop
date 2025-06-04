import {apiConfig} from "./api-config"

export async function scheduleCancel ({id}) {
  try {
    const numericId = Number(id)
    await fetch(`${apiConfig.baseURL}/schedules/${numericId}`,{
      method: "DELETE",
    })
    alert("Agendamento cancelado.")
  }
  catch(error) {
    console.log(error)
    alert("Não foi possível cancelar o agendamento")
  }
}