class ShoppingCart {
    constructor(nombre) {
        this.nombre = nombre;
        this.articles = [];
        this.total = 0;
        this.pagado = false;
    }
    addArticle(article) {
        this.articles.push(article);
    }
    getTotal() {
        var total = 0;
        for (let i = 0; i < this.articles.length; i++) {
            const articlesInCart = this.articles[1];
            var total = total + articlesInCart[1]
        }
        this.total = total;
    }

}
const carrito = new ShoppingCart('Carrito');
let camisa = ["Camisa", 350.00]
carrito.addArticle(camisa)
carrito.addArticle(camisa)
carrito.getTotal();
carrito.addArticle(camisa)
carrito.addArticle(camisa)


json = document.getElementById("json");
json.innerHTML = "Carrito: " + JSON.stringify(carrito, undefined, 2)