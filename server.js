import express from "express";

const posts = [
    {id:1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
    {id:2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/yoga/400/200"},
    {id:3, descricao: "Gato explorando a caixa",nimagem: "https://placecats.com/box/500/300"},
    {id:4, descricao: "Gato dormindo em um teclado", imagem: "https://placecats.com/keyboard/600/400"},
    {id:5, descricao: "Gato olhando pela janela", imagem: "https://placecats.com/window/700/500"},
    {id:6, descricao: "Gato brincando", imagem: "https://placecats.com/yarn/800/600"}
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor Escutando.");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});