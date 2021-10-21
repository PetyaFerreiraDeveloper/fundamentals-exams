function computer(arr) {
    let typeCustomer = arr.pop();
    arr = arr.map(x => Number(x));
    let totalPriceWithoutTaxes = 0;
    let totalPriceWithTaxes = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentPrice = arr[i];
        if (currentPrice < 0) {
            console.log("Invalid price!");
            continue;
        }
        totalPriceWithoutTaxes += currentPrice;
        totalPriceWithTaxes += currentPrice * 1.2;
    }
    function print() {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${(totalPriceWithTaxes - totalPriceWithoutTaxes).toFixed(2)}$`);
        console.log(`-----------`);
    }

    if (totalPriceWithTaxes === 0) {
        console.log("Invalid order!");
    } else if (typeCustomer === 'special') {
        print();
        console.log(`Total price: ${(totalPriceWithTaxes * 0.9).toFixed(2)}$`)
    } else {
        print()
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
    }

}

computer([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]
    
)