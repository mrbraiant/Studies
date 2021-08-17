function funcao(param) {
    return param;
}
//let variavel:number = funcao<number>(param: 2);
var Lista = /** @class */ (function () {
    function Lista() {
        this.items = [];
    }
    Lista.prototype.add = function (item) {
        console.log(item);
    };
    Lista.prototype.remove = function (item) {
    };
    return Lista;
}());
var lista = new Lista();
lista.add(32);
