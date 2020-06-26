document.body.innerHTML += '<div id="a">클릭하세요.</div>';
var obj = { a: 1 };

const clickFunction = () => {
    console.dir(this);
}

const clickFunctionES5 = function() {
    console.dir(this);
}

document.getElementById('a').addEventListener('click', clickFunctionES5.bind(obj));

// 콜백함수에서
// 기본적으로 함수의 this와 같다.
// 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.
// 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.

