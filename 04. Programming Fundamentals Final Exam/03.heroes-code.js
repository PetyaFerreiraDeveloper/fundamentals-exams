function heroes(input) {
    let num = input.shift();
    input.pop();
    let heroes = input.splice(0, num);
    let heroesObj = {};
    for (let el of heroes) {
        let line = el.split(' ');
        let [name, hp, mp] = line;
        heroesObj[name] = {
            hp: Number(hp),
            mp: Number(mp)
        };
    }
    for (let el of input) {
        let line = el.split(' - ');
        let [command, heroName, token1, token2] = line;
        if (command === 'CastSpell') {
            if (heroesObj[heroName].mp >= Number(token1)) {
                heroesObj[heroName].mp -= Number(token1);
                console.log(`${heroName} has successfully cast ${token2} and now has ${heroesObj[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${token2}!`);
            }
        } else if (command === 'TakeDamage') {
            heroesObj[heroName].hp -= Number(token1);
            if (heroesObj[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${token1} HP by ${token2} and now has ${heroesObj[heroName].hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${token2}!`);
                delete heroesObj[heroName];
            }
        } else if (command === 'Recharge') {
            let charged;
            if ((heroesObj[heroName].mp + Number(token1)) > 200) {
                charged = 200 - heroesObj[heroName].mp;
            };
            heroesObj[heroName].mp += Number(token1);
            if (heroesObj[heroName].mp > 200) {
                heroesObj[heroName].mp = 200;
                console.log(`${heroName} recharged for ${charged} MP!`);
            } else {
                console.log(`${heroName} recharged for ${Number(token1)} MP!`);
            }
        } else if (command === 'Heal') {
            let healed;
            if ((heroesObj[heroName].hp + Number(token1)) > 100) {
                healed = 100 - heroesObj[heroName].hp;
            };
            heroesObj[heroName].hp += Number(token1);
            if (heroesObj[heroName].hp > 100) {
                heroesObj[heroName].hp = 100;
                console.log(`${heroName} healed for ${healed} HP!`);
            } else {
                console.log(`${heroName} healed for ${Number(token1)} HP!`);
            }
        }
    }
    let heroesArr = Object.entries(heroesObj);
    heroesArr.sort((heroA, heroB) => {
        let heroAName = heroA[0];
        let heroBName = heroB[0];
        let heroAProp = heroA[1];
        let heroBProp = heroB[1];
        if (heroAProp.hp !== heroBProp.hp) {
            return heroBProp.hp - heroAProp.hp;
        } else {
            return heroAName.localeCompare(heroBName);
        }
    })
    for (let el of heroesArr) {
        let heroName = el[0];
        let heroProp = el[1];
        console.log(heroName);
        console.log(`  HP: ${heroProp.hp}`);
        console.log(`  MP: ${heroProp.mp}`);
    }  
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]
  
  )