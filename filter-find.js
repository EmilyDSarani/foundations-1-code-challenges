// Use the filter or find array methods to solve these problems


/*const arr = [
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];


[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];
*/

export function getAllDairy(arr) {
    
    const gotMilk = arr.filter(milk => milk.dairy === 'd'); 
    return gotMilk;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    return [];
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    return [];
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    return [];
}