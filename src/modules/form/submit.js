const form = document.querySelector("form")
const modal = document.querySelector(".modal-container")

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("enviado")
  container.classList.remove("blur")
  modal.classList.add("hidden")

}



