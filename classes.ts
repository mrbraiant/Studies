class Animal{
    //name: string;
    //cor: string;

    constructor(public nome:string, public cor:string){
        //console.log("texto");
        //this.name = name;
        //this.cor = cor;
    }
}

let myAnimal: Animal = new Animal('Coelho Leão Anão', "Marrom");

var mostrarAnimais = `Animal: ${myAnimal.nome}\nCor: ${myAnimal.cor}`;
console.log(mostrarAnimais);
