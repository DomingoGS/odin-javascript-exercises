const findTheOldest = function(array) {
    return array.reduce((oldest, nextPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const nextPersonAge = getAge(
            nextPerson.yearOfBirth, 
            nextPerson.yearOfDeath);
        return nextPersonAge > oldestAge ? nextPerson : oldest;
    });
};

function getAge(birth, death) {
    if(!death) death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
