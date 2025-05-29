import { hoursLoad } from "../form/available-hours.js"

// Seleciona o input de date
const selectedDate = document.getElementById("input-date")

export function schedulesDay() {
  const date = selectedDate.value

  // Renderiza as horas diponíveis para o dia.
  hoursLoad({date})
} 


//Renderia as horas disponíveis quando trocar o dia.
selectedDate.addEventListener("change", () => {
  // Limpa o select de horas
  const select = document.getElementById("select-time")
  select.innerHTML = ""

  // Renderiza as horas disponíveis para o dia selecionado
  schedulesDay() 
})