const findTheOldest = function(people) {
    return people.reduce(
        (oldest, person) => {
            if(!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
            if(!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
            return (person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ?
                    person :
                    oldest;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
