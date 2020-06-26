// 함수 내부에서의 this
function a() {
    console.log('a(): ', this);
}

// a();

function b() {
    function c() {
        console.log('c(): ', this);
    }

    c();
}

// b();

var d = {
    e: function () {
        function f() {
            console.log('f(): ', this);
        }

        f();
    }
}
d.e();