const { createApp } = Vue
/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
createApp({
    data() {
        return {
            messaggio: 'Questo è il messaggio con VUE JS'
        }
    }
}).mount('#app')