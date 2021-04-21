let car = {
    speed: 40,
    accelerate() {
        this.speed += 10;
    }
};

car.accelerate();

car.accelerate();

console.log(car.speed);
//to make this code run and print 60