const Mayor = (a, b, c, d) => {


    if (a >= b && a >= c && d) {
        console.log("El mayor es: " + a);

    } else {
        if (b >= a && b >= c && b >= d) {
            console.log("El mayor es: " + b);
        } else {
            if (c >= a && c >= b && c >= d) {
                console.log("El mayor es: " + c);

            } else {
                console.log("El mayor es: " + d);

            }
        }
    }
    return null;
};
console.log(Mayor(30, 2, 5, 4));