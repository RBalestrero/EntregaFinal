import {
    render
  } from "./card.js";
import { 
    search,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent,
    viewAll
} from './eventos.js';
import { storeTickets } from './funciones.js';

const response = await fetch("/datos.json");
const ticketList = await response.json();
localStorage.getItem("ticketList") ? await storeTickets(JSON.parse(localStorage.getItem("ticketList"))) : await storeTickets(ticketList);
const StoredTickets = JSON.parse(localStorage.getItem("ticketList"));
render(StoredTickets);
search(StoredTickets);
viewOpenTicketsEvent(StoredTickets);
viewCloseTicketsEvent(StoredTickets);
viewAll(StoredTickets);





