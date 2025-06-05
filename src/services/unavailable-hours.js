import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function getUnavailableHours() {
  const response = await fetch(`${apiConfig.baseURL}/schedules/`)
  const schedules = await response.json()

  const unavailableHours = schedules.map((schedule) => {
    const fullDateTime = `${schedule.date}T${schedule.time}`
    return dayjs(fullDateTime).format("DD/MM/YYYY HH:mm")
  })

  return unavailableHours
}
