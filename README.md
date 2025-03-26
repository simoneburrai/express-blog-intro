# Express Blog Intro

Nell'esercizio di oggi, salvato come progetto n.34, andiamo a creare per la prima volta il nostro server. Questo server ci permetterà di inviare un JSON da noi creato e inviarlo come riposta 
a un client, come se fosse una vera e propria API.

## Info

Nel nostro progetto base bisognerà inserire due rotte, in una invieremo come response un testo semplice. Nell'altra invieremo un JSON, rappresentato da un array di oggetti. Ogni oggetto
rappresenta un post, con delle caratteristiche come titolo, contenuto, immagine di riferimento e tags. Molto importante sarà rendere accessibile la cartella public in modo da permettere
all'utente di poter visualizzare le immagini degli oggetti. Questo potrà essere fatto grazie a .use(express.static("nomedellacartella").
Per testare il nostro progetto bisognerà utilizzare Postman, grazie al quale, usufruendo della sua modalità Preview, potremmo andare anche a visualizzare le immagini, oltre che 
al testo e al JSON inviato

Ciao Ragazzi,
esercizio di oggi: express-blog-intro
nome repo express-blog-intro
Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman;
Buon lavoro!

