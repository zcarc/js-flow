var callback = function () {
    console.dir(this); // 예상: window 객체
}

var obj = {
    a: 1,
    b: function (cb) {
        cb();
    }
};

obj.b(callback);