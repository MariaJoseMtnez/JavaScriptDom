
for (let i = 1; i <= 300; i++) {
    let imprime;
    if (i % 100 === 15) {
        imprime="fizzbuzz";
    }
    else if(i % 10 === 3) {
        imprime="fizz";
    }
    else if (i % 10 ===5) {
        imprime="buzz";
    }
    else imprime=i;
    console.log(imprime)

}

// npm run eslintfile -- src/prueba.js 