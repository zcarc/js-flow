
var arr = [1, 2, 3, 4, 5];

var obj = {

    vals: [1, 2, 3],

    logValues: function (v, i) {
        if (this.vals) {
            console.log(this.vals, v, i);

        } else {
            console.log(this, v, i);
        }
    }

};

// 메소드로 호출
obj.logValues(5, 7);

// 콜백함수로 obj.logValues를 넘기면
// 이 함수 내부의 this는 forEach의 this 규칙에 따르므로,
// 전달된 콜백함수 logValues 내부의 this는 window가 된다.
arr.forEach(obj.logValues);