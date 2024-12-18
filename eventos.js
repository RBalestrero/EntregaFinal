import {
  searchByID,
  searchByMail,
  searchByContact,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
  deleteTicket
} from "./funciones.js";

import {
  render
} from "./card.js"


const search = (tickets) => {
  const input = document.querySelector(".inputFilter");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input.value) {
        let ticketById = searchByID(tickets,input.value);
        let ticketByContact = searchByContact(tickets,input.value);
        let ticketByMail = searchByMail(tickets,input.value);    
        render([...ticketById, ...ticketByContact, ...ticketByMail]);    
      } else render(tickets);
    }
  });

  input.addEventListener("change", (e) => {
    if (input.value === "") render(tickets);
  });
};

const viewOpenTicketsEvent = (tickets) => {
  const button = document.querySelector("#openTickets");
  button.addEventListener("click", () => {
    render(viewOpenTickets(tickets));
  });
};

const viewCloseTicketsEvent = (tickets) => {
  const button = document.querySelector("#closeTickets");
  button.addEventListener("click", () => {
    render(viewCloseTickets(tickets));
  });
};

const viewAll = (tickets) => {
  const button = document.querySelector("#allTickets");
  button.addEventListener("click", () => {
    render(tickets);
  });
};

const closeTicket = (tickets) => {
  const buttons = document.querySelectorAll('.bi-file-check');
  
  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      try {
        
        if(tickets.find(ticket => ticket.idTicket === button.id).estado === "abierto"){
          tickets = await editTicketState(tickets,button.id);
          Toastify({
            text: "Ticket cerrado con éxito",
            className: "info",
            style: {
              background: " #4CAF50",
            }
          }).showToast();
          render(tickets);
        }
        else
        {
          Toastify({
            text: "El ticket ya está cerrado",
            className: "info",
            style: {
              background: " #FF0000",
            }
          }).showToast();
        }
    
      } catch (error) {
        console.log('Error: ', error);      
      }
    })
      
  });
}

const deleteTicketEvent = (tickets) => {
  const button = document.querySelectorAll(".bi-file-x");
  button.forEach(button => {
    button.addEventListener("click", async (e) => {
      try {
        tickets = await deleteTicket(tickets,e.target.id);
        render(tickets);
        let ticketList = JSON.parse(localStorage.getItem("ticketList"));
        let index = ticketList.findIndex((ticket) => ticket.idTicket === e.target.id);
        ticketList.splice(index,1);
        localStorage.setItem("ticketList", JSON.stringify(ticketList));
        Toastify({
          text: "Ticket eliminado con éxito",
          className: "info",
          style: {
            background: "rgb(126, 126, 126)",
          }
        }).showToast();
      } catch (error) {
        console.log('Error: ', error);
      }
    });
  });
}


export {
  render,
  search,
  viewOpenTicketsEvent,
  viewCloseTicketsEvent,
  viewAll,
  closeTicket,
  deleteTicketEvent
};
