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
            messaggio: 'Questo è il messaggio con VUE JS',
            img_url: 'https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_960_720.png'
        }
    }
}).mount('#app')