function letItBe() {
    let v = 2;
    if (true) {
        let v = 4;
        console.log(v);
    }
    console.log(v);
}
letItBe();
//outputnya adalah 4 2