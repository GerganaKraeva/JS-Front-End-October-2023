function solve(input) {
    let horses = input.shift().split('|');

    let currentRow = input.shift();

    while (currentRow !== "Finish") {
        currentRow = currentRow.split(' ');
        let action = currentRow.shift();


        switch (action) {
            case 'Retake': {
                const overTakingHorse = currentRow.shift();
                const overTakenHorse = currentRow.shift();
                const currentIndexOvertaking = horses.indexOf(overTakingHorse);
                const currentIndexOvertaken = horses.indexOf(overTakenHorse);
                if (currentIndexOvertaking < currentIndexOvertaken) {
                    horses[currentIndexOvertaken] = overTakingHorse;
                    horses[currentIndexOvertaking] = overTakenHorse;
                    console.log(`${overTakingHorse} retakes ${overTakenHorse}.`)
                }
                break;
            }
            case 'Trouble': {
                    const horseName = currentRow.shift();
                    const horsePos = horses.indexOf(horseName);

                    if (horsePos > 0 && horsePos <= (horses.length - 1)) {
                        const previousPos = horsePos - 1;
                        const prevHorse = horses[previousPos];
                        horses[previousPos] = horseName;
                        horses[previousPos + 1] = prevHorse;
                        console.log(`Trouble for ${horseName} - drops one position.`);
                    }
                break;
            }
            case 'Rage': {
                const horseName = currentRow.shift();
                let index = horses.indexOf(horseName);
                let newIndex = Math.min(index + 2, horses.length - 1);

                if (index >= 0 && index < (horses.length - 1)) {
                    horses.splice(index, 1);
                    horses.splice(newIndex, 1, horseName);
                }
                console.log(`${horseName} rages 2 positions ahead.`);

                break;
            }
            case 'Miracle': {
                let lastHorse = horses.shift();
                horses.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
            }
        }
        currentRow = input.shift()

    }
    const winner = horses.pop();
    horses.push(winner);
    console.log(horses.join('->'));
    console.log(`The winner is: ${winner}`);
}

solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])




solve(['Bella|Alexia|Sugar',
    'Miracle',
    'Finish']);
