function example() {
    let out = ""

    const backpack = {
        'bottle': { brand: 'Primo', color: 'red' },
        'helmet': { brand: 'Turbo', color: 'blue' },
        'helmet': { brand: 'Turbo', color: 'black' }
    }
    console.log(backpack);

    // const other Symbol('')
    const backpackSymbol = {
        [Symbol('bottle')]: { brand: 'Primo', color: 'red' },
        [Symbol('helmet')]: { brand: 'Turbo', color: 'blue' },
        [Symbol('helmet')]: { brand: 'Turbo', color: 'black' }
    }
    console.log(backpackSymbol);
}

window.addEventListener("load", example);