var Animal = /** @class */ (function () {
    //name: string;
    //cor: string;
    function Animal(nome, cor) {
        this.nome = nome;
        this.cor = cor;
        //console.log("texto");
        //this.name = name;
        //this.cor = cor;
    }
    return Animal;
}());
var myAnimal = new Animal('Coelho Leão Anão', "Marrom");
var mostrarAnimais = "Animal: " + myAnimal.nome + "\nCor: " + myAnimal.cor;
console.log(mostrarAnimais);
