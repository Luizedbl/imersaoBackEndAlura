import express from "express";

const posts = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato fazendo yoga",
      imagem: "https://placecats.com/yoga/400/200"
    },
    {
      descricao: "Gato explorando a caixa",
      imagem: "https://placecats.com/box/500/300"
    },
    {
      descricao: "Gato dormindo em um teclado",
      imagem: "https://placecats.com/keyboard/600/400"
    },
    {
      descricao: "Gato olhando pela janela",
      imagem: "https://placecats.com/window/700/500"
    },
    {
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placecats.com/yarn/800/600"
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor Escutando.");
});

app.get("/api", (req, res) => {
    res.status(200).send("Rota inicial");
});

