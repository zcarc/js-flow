var callback = function() {
    console.dir(this); // 예상: this는 obj의 객체가 됨
}

var obj = {
    a: 1
};

setTimeout(callback.bind(obj), 100);