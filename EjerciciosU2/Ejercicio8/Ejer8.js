lista1 = ["gato", "perro", "borrego", "elefante", "elefante"] // Array con mi listado
lista2 = ["gato", "perro", "borrego", "gallo"] // Array 2 con mi listado

// Uso un bucle para evaluar los dos arrays pues ambos tendrán la misma longitud
for (i = 0; i < lista1.length; i++) {
    console.log(lista1[i].includes(lista2[i]));
}