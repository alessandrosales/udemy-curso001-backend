var express = require('express');
var router = express.Router();
var faker = require('faker');
faker.locale = "pt_BR";

const photos = [
	'aventura.jpg',
	'gato.jpg',
	'metalica.jpg',
	'natureza.jpg',
	'simpsons.jpg',
	'tecnologia.jpg'
];

/* Rota para a página inicial */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js e Nightmare.js Automações em Páginas Web' });
});

/* Rota para a página de posts */
router.get('/posts', function(req, res, next) {

  let posts = [];

  for(let p = 1;p < 10;p++) {
  	let img = photos[Math.floor(Math.random() * 6)];

  	posts.push({
  		title: faker.lorem.sentences(1),
  		content: faker.lorem.paragraph(),
  		author: faker.name.firstName(),
  		image: `/images/${img}`
  	});
  }

  res.render('posts', { title: 'Postagens', posts: posts });
});

/* Rota para o formulário */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Formulário' });
});

/* Rota para a página de resultado */
router.get('/result', function(req, res, next) {

  let name = req.query.name || '';
  let email = req.query.email || '';

  res.render('result', { title: 'Resultado', name, email });
});

module.exports = router;
