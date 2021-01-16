

const markM = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
 
}

const johnS = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    }
}

markM.calcBMI();
console.log(markM.bmi)

johnS.calcBMI();
console.log(johnS.bmi)

if (markM.bmi > johnS.bmi) {
    console.log(`${markM.firstName} ${markM.lastName}'s BMI (${markM.bmi}) is higher than ${johnS.firstName} ${johnS.lastName}'s BMI
    `) 
} else if (johnS.bmi > markM.bmi) {
        console.log(`johnS.firstName ${johnS.lastName}'s BMI (${markM.bmi}) is higher than ${markM.firstName} ${markM.lastName}'s BMI
        `)
}
