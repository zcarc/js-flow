// 5-2-1

function Person(n, a) {
    this.name = n;
    this.age = a;
}

var gomu = new Person('고무곰', 30)
var iu = new Person('아이유', 25)

gomu.setOlder = function() {
    this.age += 1;
}

gomu.getAge = function() {
    return this.age;
}

iu.setOlder = function() {
    this.age += 1;
}

iu.getAge = function() {
    return this.age;
}