const INITIAL_CLASSES = {
    PRIEST : {
    cha: 2,
    dex: 3,
    str: 1,
    int: 5,
    wis: 6,
    luk: 1,
},

    WIZARD : {
    cha: 3,
    dex: 2,
    str: 1,
    int: 6,
    wis: 5,
    luk: 3,
},

    WARRIOR : {
    cha: 4,
    dex: 3,
    str: 6,
    int: 2,
    wis: 1,
    luk: 2,
},

    BARD : {
    cha: 6,
    dex: 5,
    str: 1,
    int: 3,
    wis: 3,
    luk: 2,
},

    ROGUE : {
    cha: 4,
    dex: 6,
    str: 2,
    int: 2,
    wis: 1,
    luk: 4,
},
}
const DAMAGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function intDmgMulti(number) {
    return number * this.int; 
}

function fireBolt(array) {
    let results = array.map(intDmgMulti, INITIAL_CLASSES.WIZARD)
    return results;
}

console.log(INITIAL_CLASSES);
console.log(DAMAGE);
console.log(fireBolt(DAMAGE));