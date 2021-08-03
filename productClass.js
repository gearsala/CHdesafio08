export default class Product {
	constructor() {
		this.content = [];
	}

	addProduct(title, price, thumbnail) {
		const newProduct = {
			title: title,
			price: price,
			thumbnail: thumbnail,
			id: this.content.length + 1,
		};
		this.content.push(newProduct);
		return newProduct;
	}

	getProducts() {
		return this.content;
	}
}