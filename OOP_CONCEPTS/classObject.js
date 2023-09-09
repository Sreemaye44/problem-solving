class Cars{
    constructor(name, maker, price){
        this.name=name;
        this.maker=maker,
        this.price=price
    }

    getDetails(){
        return(`The name of the car is ${this.name}`+ ` PRICE ${this.price}`)
    }
}

let car1=new Cars("Rolls Royce Ghost", 'Rolls Royce', '$315k');
let car2=new Cars("Mercedes AMG One", 'Mercedes', '$2000k');

console.log(car1.name);
console.log(car2.getDetails());
