const express = require('express');
const Product = require ('./productClass');

const products = new Product();

const port = 8080;
const app = express();

const server = app.listen(port, () => {
	console.log(`Server running in port:  ${port}`);
});

server.on('error', (err) => {
	console.error(`There was an error: ${err}`);
});

app.get('/api/productos/listar', (req, res) => {
	const getProducts = products.getProducts();
	getProducts.length !== 0
		? res.json({ products: getProducts })
		: res.status(404).json({ error: 'No hay productos cargados' });
});

app.get('/api/productos/listar/:id', (req, res) => {
	const specificId = req.params.id;
	const getProducts = products.getProducts();
	const product = getProducts.find((product) => product.id == specificId);
	product
		? res.json({ product })
		: res.status(404).json({ error: 'Producto no encontrado' });
});

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post('/api/productos/guardar', (req, res) => {
	const body = req.body;
	const newProduct = products.addProduct(
		body.title,
		body.price,
		body.thumbnail
	);
	res.json({
		product: newProduct,
	});
});