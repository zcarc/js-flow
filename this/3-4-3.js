var callback = function () {
    console.dir(this); // 예상: obj 객체
}

var obj = {
    a: 1,
    b: function (cb) {
        cb.call(this)
    }
};

obj.b(callback);