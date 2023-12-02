function heroInfo(array) {
    let heroes = [];

    array.forEach(element => {
        let [name, level, items] = element.split(` / `);
        let hero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(hero);
    });

    heroes.sort((a,b)=>a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

heroInfo([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);
    heroInfo([

        'Batman / 2 / Banana, Gun',
        
        'Superman / 18 / Sword',
        
        'Poppy / 28 / Sentinel, Antara'
        
        ]);