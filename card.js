import { closeTicket, deleteTicketEvent } from "./eventos.js";

const render = (list) => {
  const container = document.querySelector(".ticketContainer");
  container.innerHTML = "";
  const deletedTickets = JSON.parse(localStorage.getItem("deletedTickets")) || [];
  for (let i = 0; i < list.length; i++) {
    const colorState = list[i].estado === "abierto" ? "green" : "grey";
    const opacity = list[i].estado === "abierto" ? "1" : "0.35";
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.innerHTML = `
        <div class="infoTicket">
          <div class="infoContent">${list[i].idTicket}</div>
          <div class="infoContent">${list[i].nombre}</div>
          <div class="infoContent">${list[i].email}</div>
          <div class="infoContent">${list[i].estado}</div>
          <div class="infoContent" id="description">${list[i].asunto}</div>
        </div>
        <div  class="buttonsTicket">
          <svg xmlns="http://www.w3.org/2000/svg" opacity="${opacity}" width="30" height="30" fill="${colorState}" id="${list[i].idTicket}" class="bi bi-file-check" viewBox="0 0 16 16"> 
            <title>Cerrar ticket</title>
            <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" opacity="1" width="30" height="30" fill="red" id="${list[i].idTicket}" class="bi bi-file-x" viewBox="0 0 16 16">
            <title>Eliminar ticket</title>
            <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708"/>
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
          </svg>
        </div>
        `;
    container.append(ticket);
  }
  closeTicket(list);
  deleteTicketEvent(list);
};

export { render };
