const form = document.querySelector("form")
const modal = document.querySelector(".modal-container")

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("enviado")
  container.classList.remove("blur")
  modal.classList.add("hidden")

  //Pegando os dados do formulário
  try {
    //Recuperando o nome do cliente
    const tutorName = document.getElementById("input-owner-name").value

    //Recuperar o nome do pet
    const petName = document.getElementById("input-pet-name").value

    const telephone = document.getElementById("input-tel").value

    const description = document.getElementById("input-description").value

    const date = document.getElementById("input-date").value
    const time = document.getElementById("select-time").value
    const id = new Date().getTime()

    console.log({
      tutorName,
      petName,
      telephone,
      description,
      date,
      time,
      id,
    })

  } catch (error) {
    alert("Não foi possível enviar o formulário, tente novamente.")
  }
}
