function solve(input) {
    const numberOfBaristas = Number(input.shift());
    const baristas = {};

    for (let currentBarista = 0; currentBarista < numberOfBaristas; currentBarista++) {

        const [name, shift, arrDrinks] = input.shift().split(' ');

        baristas[name] = {
            shift: shift,
            arrDrinks: arrDrinks.split(','),
        };
    }

    let command = input.shift();

    while (command !== 'Closed') {

        command = command.split('\\ / ');
        const action = command.shift();


        switch (action) {

            case 'Prepare': {
                const baristasName = command.shift();
                const baristasShift = command.shift();
                const coffeeType = command.shift();
                if (baristas[baristasName].shift === baristasShift && baristas[baristasName].arrDrinks.includes(coffeeType)) {
                    console.log(`${baristasName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristasName} is not available to prepare a ${coffeeType}.`);
                }
                break;
            }
            case 'Change Shift': {
                const baristasName = command.shift();
                const baristasNewShift = command.shift();

                baristas[baristasName].shift = baristasNewShift;
                console.log(`${baristasName} has updated his shift to: ${baristasNewShift}`)
                break;
            }
            case 'Learn': {
                const baristasName = command.shift();
                const coffeeType = command.shift();

                if (baristas[baristasName].arrDrinks.includes(coffeeType)) {
                    console.log(`${baristasName} knows how to make ${coffeeType}.`);
                } else {
                    baristas[baristasName].arrDrinks.push(coffeeType);
                    console.log(`${baristasName} has learned a new coffee type: ${coffeeType}.`);
                }

                break;
            }
        }
        command = input.shift();
    }

    for (const baristaName in baristas ){
        console.log(`Barista: ${baristaName}, Shift: ${baristas[baristaName].shift}, Drinks: ${baristas[baristaName].arrDrinks.join(', ').trim()}`);
    }
}


solve([
    '4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Learn / Carol / Latte',
    'Closed']);