class EmployeeDetails{
    constructor(name, id){
        this.name=name;
        this.id=id;
    }
    add_Address(add){
        this.add=add;
    }

    getDetails(){
        console.log(`Employee Name: ${this.name}, Address: ${this.add}`);
    }
}

let person1= new EmployeeDetails('Anika', 20);
person1.add_Address('Bangladesh');
person1.getDetails();
