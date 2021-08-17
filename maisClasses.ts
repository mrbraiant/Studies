interface AnimalInterface{
    name: string;
    color: string;
    /*correr();
    andar();
    comer();*/
}

class Animal implements AnimalInterface{
    private atributo;
    protected atributo1 = "2o Atributo";

    constructor(public name: string, public color: string){
    }
    private correr(){

    }
    andar(){
        this.correr();
    }
    comer(){
        this.atributo = "valor";
        console.log("Comer do animal")
    }
}

class Coelho extends Animal{
    tamanhoOrelha: number;
    
    comer(){
        console.log(this.atributo1);
        super.comer();
        console.log("Comer do Coelho");
    }
}
let coelho:Coelho = new Coelho("Coelho Leão Anão", "Branco");
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
//coelho.correr();
coelho.comer();
