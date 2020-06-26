var callback = function() {
    console.dir(this); // 함수라서 this는 window 객체
}

var obj = {
    a: 1
};

setTimeout(callback, 100);