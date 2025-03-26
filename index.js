const express = require("express");
const app = express();
const port = 2000;

const allPosts = require("./data/posts.js")


app.get("/", (req, res) => {
res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
res.json(allPosts);
})




app.listen(2000, () => {
	console.log(`Server attivo nella porta ${port}`);
});

