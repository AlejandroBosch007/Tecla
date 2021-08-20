class ShoppingCar {
    constructor([itemId, itemName, price, quantity, cupon]) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
        this.cupon = cupon || false;
    }
    informer(mensaje) {
        console.log(mensaje);
    }
    addCar() {
        const newItem = [];
        this.informer(`Array vacio -----> ${newItem}`);
        // let newItem = [this.itemId, this.itemName, this.price, this.quantity];
        newItem.push([this.itemId, this.itemName, this.price, this.quantity]);
        this.informer(`Array con el articulo nuevo -----> ${newItem}`);
        this.informer(`Se ha agregado el articulo ${newItem} al carrito`);
    }
    deleteCar() {}
    payment() {}
}
const carrito = new ShoppingCar([01, "IPAD", 13999.99, 1]);
carrito.addCar();
const carrito2 = new ShoppingCar([02, "Audifonos", 599.99, 2]);
carrito2.addCar();
console.log(carrito);