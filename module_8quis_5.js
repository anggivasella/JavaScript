const user = {
    name: 'David', age: 28, id: 1234
};
let newUser = Object.assign({},

    {name, age} = user,

    {
        id: 9999});
console.log(newUser);

//to copy the user object to the newUser object by destructuring the name and age properties. Pass the value 9999 for the id property.