/*function show({category,product}: {category: string, product: string}){
    console.log(category);
    console.log(product);
}*/
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show({ category: "Categoria" });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.category = "Categoria 1";
console.log(product.category);
