
function setCounter() {
    var count = 0;
    return function () {
        return ++count;
    }
}

var count = setCounter();
console.log(count());
count()
count()
count()
count()
console.log(count());