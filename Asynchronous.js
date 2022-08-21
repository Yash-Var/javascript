// Currying 

function sum(a) {
    return function (b) {
        return function (c) {
            console.log(a+b+c);
        }
    }
}

sum(5)(6)(7);