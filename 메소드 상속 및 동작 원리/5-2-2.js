// 5-2-2

function Person(n, a) {
    this.name = n;
    this.age = a;
}

Person.prototype.setOlder = function() {
    this.age += 1;
}

Person.prototype.getAge = function() {
    return this.age;
}

var gomu = new Person('고무곰', 30)
var iu = new Person('아이유', 25)


// 메소드의 this가 __proto__를 가리키고 있음.
gomu.__proto__.setOlder(); // undefined
gomu.__proto__.getAge(); // NaN

// 메소드가 각 객체를 가리키고 있음
gomu.setOlder(); // 30 -> 31
gomu.getAge(); // 31
