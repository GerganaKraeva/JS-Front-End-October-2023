function factorialDivision(a, b) {
    function factorialCalculate(n) {
        let factorial=1;
        for (let i=1; i<=n; i++) {
            factorial *=i;
        } 
        return factorial;
    }

    let aFactorial=factorialCalculate(a);
    let bFactorial=factorialCalculate(b);
    let result=aFactorial/bFactorial;
    console.log(result.toFixed(2));
}
factorialDivision(5,2);
factorialDivision(6, 2);