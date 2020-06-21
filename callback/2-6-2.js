var arr = [1, 2, 3, 4, 5];
var entries = [];

arr.forEach(function (v, i) {

    entries.push([i, v, this[i]]);

}, [10, 20, 30, 40, 50]);

console.log(entries);


// forEach() 두번째 인자에는 thisArg를 인자로 전달할 수 있다.
// thisArg를 전달하지 않는다면 콜백함수 내부의 this는 window 객체가 된다.