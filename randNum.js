function createRandomNumber(min, max){
     return String(Math.floor(Math.random() * (max - min)) + min);
}

module.exports = createRandomNumber;
