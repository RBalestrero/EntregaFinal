import { closeTicket, deleteTicketEvent } from "./eventos.js";

const render = (list) => {
  const container = document.querySelector(".ticketContainer");
  container.innerHTML = "";
  const deletedTickets = JSON.parse(localStorage.getItem("deletedTickets")) || [];
  for (let i = 0; i < list.length; i++) {
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
        <div class="buttonsTicket">
          <button type="button" id="${list[i].idTicket}" class="btn btn-outline-success">Resuelto</button>
          <button type="button" id="${list[i].idTicket}" class="btn btn-outline-danger">Eliminar</button>
        </div>
        `;
    container.append(ticket);
  }
  closeTicket(list);
  deleteTicketEvent(list);
};

export { render };
