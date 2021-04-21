class Human {

    constructor(name) {
        this.name = name;
    }
}

class Student extends Human {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
//to declare a class Student which inherits from the Human class.