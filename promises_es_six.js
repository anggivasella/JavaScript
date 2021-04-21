function foo() {

    return new Promise((resolve, reject) => {
        let result = getSomeResult();
        if (result)
            resolve('Success');
        else
            reject('Something went wrong');
    });
}
//to define a function that returns a Promise object.