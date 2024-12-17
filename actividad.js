import {
    render
  } from "./card.js";
import { 
    search,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent
} from './eventos.js';
import { storeTickets } from './funciones.js';

const response = await fetch("/datos.json");
const ticketList = await response.json();
localStorage.getItem("ticketList") ? await storeTickets(JSON.parse(localStorage.getItem("ticketList"))) : await storeTickets(ticketList);
render(JSON.parse(localStorage.getItem("ticketList")));
search(ticketList);
viewOpenTicketsEvent(ticketList);
viewCloseTicketsEvent(ticketList);





