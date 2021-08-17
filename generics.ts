function funcao<T>(param: T): T{
    return param;
}

//let variavel:number = funcao<number>(param: 2);

class Lista<T>{
    items: Array<T>= [];

    add(item:T){
        console.log(item);
    }
    remove(item:T){

    }
}

let lista = new Lista<number>();

lista.add(32);
