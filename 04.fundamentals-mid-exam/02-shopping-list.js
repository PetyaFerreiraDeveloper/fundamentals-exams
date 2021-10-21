function shop(input) {
    let shoppingListInitial = input.shift();

    input.pop();

    let shoppingList = shoppingListInitial.split('!');
    

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');
        let command = currentRow[0];

        switch (command) {
            case 'Urgent':
                let item = currentRow[1];
                if (!shoppingList.includes(item)) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                let itemToRemove = currentRow[1];
                if (shoppingList.includes(itemToRemove)) {
                    let indexOfItem = shoppingList.indexOf(itemToRemove);
                    shoppingList.splice(indexOfItem, 1);
                }
                break;
            case 'Correct':
                let oldItem = currentRow[1];
                let newItem = currentRow[2];
                if (shoppingList.includes(oldItem)) {
                    let indexOldItem = shoppingList.indexOf(oldItem);
                    shoppingList.splice(indexOldItem, 1, newItem);
                }
                break;
            case 'Rearrange':
                let grocery = currentRow[1];
                if (shoppingList.includes(grocery)) {
                    let groceryIndex = shoppingList.indexOf(grocery);
                    shoppingList.splice(groceryIndex, 1);
                    shoppingList.push(grocery)
                }
                break;
        }
    }

    console.log(shoppingList.join(', '));
}

shop(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

