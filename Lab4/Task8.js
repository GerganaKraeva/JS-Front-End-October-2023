function  getCats(arr) {
    let cats =[];
    class Cat{
        constructor (name, age) {
            this.name=name;
            this.age=age;
        }

        meaw () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let index=0; index < arr.length; index++) {
        const catInfo=arr[index].split(" ");
        const[name, age] = catInfo;
        const newCat = new Cat(name,age);
        newCat.meaw();
        cats.push(newCat);
    }
}

getCats(['Mellow 2', 'Tom 5']);