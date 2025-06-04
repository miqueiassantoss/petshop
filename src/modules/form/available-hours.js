import dayjs from "dayjs"

const availableHours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
]

export function hoursLoad({ date }) {
  const select = document.getElementById("select-time")

  const opening = availableHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":")

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isAfter(dayjs())

    //Define se o horário está disponível
    return {
      hour,
      available: isHourPast,
    }
  })

  opening.forEach(({ hour, available }) => {
    if (available) {
      const option = document.createElement("option")
      option.value = hour
      option.textContent = hour
      select.appendChild(option)
    }
  })
}
