// CONSEGNA
// ESERCIZIO : Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS : Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue (

    {
        el : '#root',
        data: {
            message : "Hello, this is my first approach with VUE!",
            picture : "img/vue.png"
        }
    }
);