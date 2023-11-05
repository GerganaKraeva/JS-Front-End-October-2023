function reverse(num, input){
    let newArr=input.slice(0,num);
    let result=newArr.reverse();
    console.log(result.join(" "));
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);