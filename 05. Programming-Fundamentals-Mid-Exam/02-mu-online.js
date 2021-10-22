function online(input) {
    input = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let bool = true;
    let room = 0;

    for (let i = 0; i < input.length; i++) {
        room++;
        let commandRow = input[i].split(' ');
        let command = commandRow[0];
        let value = Number(commandRow[1]);

        switch (command) {
            case 'potion':
                if (health < 100) {
                    health += value;
                    if (health > 100) {
                        let healedFor = 100 - health + value;
                        health = 100;
                        console.log(`You healed for ${healedFor} hp.`);
                    } else {
                        console.log(`You healed for ${value} hp.`);
                        
                    }
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${room}`);
                    bool = false;
                    break;
                }
                break;
        }
        if (!bool) {
            break;
        }
    }

    if (bool) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

online("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")