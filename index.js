const express = require('express'); // npm install express
const app = express();
const port = 1500;
app.use(express.static('aquitem'));
const bodyParser = require("body-parser"); // Instalar o npm install body-parser, pois os dados puxados pelo post vem codificados, sendo necessário o decoficador.
const urlencodedParser = bodyParser.urlencoded({ extended: false }); //Segundo parâmetro.

const livros = [
    { nome: 'o assassinato na casa do pastor', autor: 'Agatha Christie', datadelancamento: '01 de maio de 2010', genero: 'Ficção/suspense', disponivel: 'Sim', origem: 'Internacional', paginas: '288 páginas' },
    { nome: 'tudo e rio', autor: 'Carla Madeira', datadelancamento: '08 de fevereiro de 2021', genero: 'Ficção Literária', disponivel: 'Não', origem: 'Nacional', paginas: '210 páginas' },
    { nome: 'o vale do medo', autor: 'Arthur Conan Doyle', datadelancamento: '21 de fevereiro de 2019', genero: 'Suspense Investigativo', disponivel: 'Sim', origem: 'Internacional', paginas: '224 páginas' },
    { nome: 'o chamado selvagem', autor: 'Jack London', datadelancamento: '1 de janeiro de 2013', genero: 'Ficção de Aventura', disponivel: 'Sim', origem: 'Internacional', paginas: '120 páginas' }
];

app.post('/livros', urlencodedParser, (req, res) => {
    const nomeLivro = req.body.nomeLivro; // Usa-se o body, pois o conteúdo está no body, esse é o parâmetro.
    const resultadodaBusca = livros.filter(livro => livro.nome.includes(nomeLivro)); //filter é um jeito mais simples para percorrer um array.

    if (resultadodaBusca.length > 0) {
        var todoslivros = '';

        resultadodaBusca.forEach(livro => {
            todoslivros += "Nome: " + livro.nome + "<br>";
            todoslivros += "Autor: " + livro.autor + "<br>";
            todoslivros += "Data de Lançamento: " + livro.datadelancamento + "<br>";
            todoslivros += "Gênero: " + livro.genero + "<br>";
            todoslivros += "Disponível: " + livro.disponivel + "<br>";
            todoslivros += "Origem: " + livro.origem + "<br>";
            todoslivros += "Quantidade de Páginas: " + livro.paginas + "<br>";
        });

        res.send(todoslivros);
    } else {
        res.send("Perdoe-nos, a Palavras de Julietta não tem exemplar desse livro, mas tente outro!!");
    }
});

app.listen(port, () => {
    console.log(`http://localhost:` + 1500 + '/entrada.html');
});