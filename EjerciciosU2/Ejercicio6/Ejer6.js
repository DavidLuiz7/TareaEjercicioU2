function BuscarelementoLista(buscar) {
    if (listab.indexOf(buscar) > -1) {
        console.log(true);
    } else if (listab.indexOf(buscar) === -1) {
        console.log(false);
    }
}
var listab = [1, 2, 3, 4, 5];
BuscarelementoLista(4);