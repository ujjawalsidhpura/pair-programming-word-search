const wordSearch = (letters, word) => {
    //To get all horizontal words in an array 
    const horizontalJoin = letters.map(ls => ls.join(''))

    //to get all vertical words in an array
    let verticalJoin = [];
    let temp = '';
    for (let i = 0; i < letters[0].length; i++) {
        letters.map((arr) => {
            temp += arr[i];
        })
        verticalJoin.push(temp);
        temp = ''
    }

    //Looping over to check either horizontal or vertical array contains the word. 

    for (let i = 0; i < horizontalJoin.length; i++) {
        if (horizontalJoin[i] === word) {
            return true
        }
    }

    for (let i = 0; i < verticalJoin.length; i++) {
        if (verticalJoin[i] === word) {
            return true
        }
    }

    //If none horizontal nor vertical contains the words,then return false
    return false;

}

module.exports = wordSearch