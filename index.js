const express = require("express");
const app = express();
const port = 2000;


app.get("/", (req, res) => {
res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
res.send("Bacheca del mio blog");
})




app.listen(2000, () => {
	console.log(`Server attivo nella porta ${port}`);
});
