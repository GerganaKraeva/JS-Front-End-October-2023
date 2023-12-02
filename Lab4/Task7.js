function addressBook(arr) {
    const addressList = {};

    for (const element of arr) {    
        const[person, address]= element.split(":");
        addressList[person]=address;
    }

    const peopleNames= Object.entries(addressList)
    const sortedPeople=peopleNames.sort();

    for (const entry of sortedPeople) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`)
       }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',

'John:Milwauke Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);