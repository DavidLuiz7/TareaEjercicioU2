function miMapa(fn) {

    var resultado = [];
    for (indice = 0; indice < this.length; indice++) {

        resultado[indice] = fn(this[indice]);
    }
    return resultado;

}

Array.prototype.miMapa = miMapa;
var resultado = lista.miMapa(function (elemento) {

    return elemento * 2;
})
console.log(resultado);

let vocales = new Map();
vocales.set(1,'a');
vocales.set(2,'e');
vocales.set(3,{ size: 'XXL', dorsal: '02' });
vocales.set(4,'o');
vocales.set(5,'u');

console.log(vocales.size); //5

for (let vocal of vocales) {
    console.log(vocal);
}
console.log(vocales.has('baz'));
console.log(vocales.get(3));