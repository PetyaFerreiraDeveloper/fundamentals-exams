function invent(input) {
    let collection = input.shift();
    collection = collection.split(', ');
    input.pop();

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' - ');
        let command = currentRow[0];

        switch (command) {
            case 'Collect':
                let item = currentRow[1];
                if (!collection.includes(item)) {
                    collection.push(item);
                }
                break;
            case 'Drop':
                let itemToDrop = currentRow[1];
                if (collection.includes(itemToDrop)) {
                    let index = collection.indexOf(itemToDrop);
                    collection.splice(index, 1)
                }
                break;
            case 'Combine Items':
                let listOfItems = currentRow[1].split(':');
                let oldItem = listOfItems[0];
                let newItem = listOfItems[1];
                if (collection.includes(oldItem)) {
                    let oldItemIndex = collection.indexOf(oldItem);
                    let newItemIndex = oldItemIndex + 1;
                    collection.splice(newItemIndex, 0, newItem);
                }
                break;
            case 'Renew':
                let itemToRenew = currentRow[1];
                if (collection.includes(itemToRenew)) {
                    let itemToRenewIndex = collection.indexOf(itemToRenew);
                    let itemToAdd = collection.splice(itemToRenewIndex, 1);
                    collection.push(itemToAdd[0])
                }
                break;
        }
    }
    console.log(collection.join(', '));
}

invent([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
)