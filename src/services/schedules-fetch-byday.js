//Esse código aqui, está fazendo que quando eu mudar a data lá no topo da página, ele busque no Banco de dados oso agendamentos daquele dia e mostre no console.log
//Podemos reaproveitar esse código pra renderizar os agendamentos do dia, ou seja criar os elementos e exibir na tela quando for trocado o dia, mas a gente pode ver, talvez não seja necessário, porque a gente já está renderizando os agendamentos do dia quando a página é carregada, então talvez não seja necessário, vamos ver depois.


import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`) //Faz uma requisição GET para a rota schedules e retorna uma promise
    const data = await response.json() //Converte a resposta em JSON

    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.date, "day")
    )

    //console.log({ dailySchedules }) //Exibe os agendamentos do dia no console.log

    return dailySchedules

  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error) //Exibe um erro no console caso a requisição falhe
    alert("Erro ao buscar agendamentos")
  }
}

