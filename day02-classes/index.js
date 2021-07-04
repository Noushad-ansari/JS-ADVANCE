class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    getfullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
    getAge() {
        console.log(this.age)
    }

}


let personOne = new person("kareena", 25)
let personTwo = new person("krishna", "male")
    // console.log(personOne.firstName)
    // console.log(personOne.lastName)


console.log(personOne.getfullName())
console.log(personOne.getAge())