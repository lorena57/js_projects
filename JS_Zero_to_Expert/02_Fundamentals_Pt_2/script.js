const lorena = {
    firstName: 'Lorena',
    lastName: 'DaBest',
    birthYear: '2000',
    job: 'student',
    friends: ['Larry', 'Curly', 'Moe'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function() {
// this points to lorena the object
//     return 2037 - this.birthYear;
//     }
// }


// this.age creates a new property on the object (the lorena object)
    calcAge: function() {
        console.log(lorena)
        this.age = 2037 - this.birthYear
    return this.age;
   
    },

    getSummary: function() { 
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has 
        ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` 
    }


}

console.log(lorena.getSummary())

// Whatever is before the dot is the calling the method
console.log(lorena.calcAge())
console.log(lorena.age)

// Dot notation
// console.log(lorena.calcAge(2000))

// Bracket notation
// console.log(lorena['calcAge'](2000))

