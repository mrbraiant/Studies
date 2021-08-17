interface ObjValue{
    category: string;
    product?: string;
}

/*function show({category,product}: {category: string, product: string}){
    console.log(category);
    console.log(product);
}*/

function show({category,product}: ObjValue){
    console.log(category);
    console.log(product);
}
show({category:"Categoria"});

class Product implements ObjValue{
    category: string;

}

let product = new Product();
product.category = "Categoria 1";
console.log(product.category);