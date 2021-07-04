class person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    getName() {
        setTimeout(() => {
            console.log(this)
        }, 1000);
    }

    getAge() {
        setTimeout(function() {
            console.log(this)
        }, 1000)
    }
}

let personOne = new person('john', 25)

personOne.getName()
personOne.getAge()