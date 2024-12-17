const newTicket = () => {
  let ticket = {};
  ticket.nombre = prompt("Ingrese el nombre y apellido");
  ticket.idTicket = prompt("Ingrese el ID");
  ticket.email = prompt("Ingrese el email de contacto");
  ticket.asunto = prompt("Ingese el asunto del caso");
  ticket.estado = "abierto";
  ticket.resultado = "no resuelto";
  ticketList.push(ticket);
};

const storeTickets = async (ticketList) =>{
  localStorage.setItem("ticketList", JSON.stringify(ticketList));
}

const searchByID = (tickets, id) => {
  let arrayTicket = []; 
  arrayTicket = tickets.filter(ticket => ticket.idTicket === id );
  return arrayTicket;
};

const searchByContact = (tickets,name) => {
  let arrayTicket = []; 
  arrayTicket = tickets.filter(ticket => ticket.nombre.toLowerCase().includes(name.toLowerCase));
  return arrayTicket;
}

const searchByMail = (tickets,mail) => {
  let arrayTicket = []; 
  arrayTicket = tickets.filter(ticket => ticket.email.toLowerCase().includes(mail.toLowerCase()));
  return arrayTicket;
}

const viewOpenTickets = (tickets) => {
  let openTickets = tickets.filter((ticket) => ticket.estado === "abierto");
  return openTickets;
};

const viewCloseTickets = (tickets) => {
  let closeTickets = tickets.filter((ticket) => ticket.estado === "cerrado");
  return closeTickets;
};

const editTicketState = (tickets,id) => {
  let index = tickets.findIndex((ticket) => ticket.idTicket === id);
  tickets[index].estado = "cerrado";
  tickets[index].resultado = "Resuelto";
  saveTicketInLocalStorage(tickets[index]);
  return tickets;

};

const print = (ticket) => {
  alert(`Ticket solicitado:
        Nombre: ${ticket.nombre}
        ID: ${ticket.idTicket}
        Email: ${ticket.email}
        Asunto: ${ticket.asunto}
        Estado: ${ticket.estado}
        Resultado: ${ticket.resultado}`);
};

const saveTicketInLocalStorage = (ticket) => {
  let tickets =  JSON.parse(localStorage.getItem("deletedTickets")) || [] ; 
  tickets.push(ticket);
  localStorage.setItem("deletedTickets", JSON.stringify(tickets));
};

const deleteTicket = (tickets,id) => {
  let index = tickets.findIndex((ticket) => ticket.idTicket === id);
  tickets.splice(index,1);
  saveTicketInLocalStorage(tickets[index]);
  return tickets;
};

export {
  newTicket,
  searchByID,
  searchByMail,
  searchByContact,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
  saveTicketInLocalStorage,
  deleteTicket,
  storeTickets
};
