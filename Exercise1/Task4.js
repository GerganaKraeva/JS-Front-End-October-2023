function printTheSum(a,b) {
    let sum=0;
    let result="";

    for (let i=a; i<=b; i++) {
        sum +=i;
        result +=i+" ";
    }
    console.log(result);
    console.log(`Sum: ${sum}`)
}

printTheSum(5, 10);
printTheSum(0, 26);