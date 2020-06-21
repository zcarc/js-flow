document.body.innerHTML = '<div id="a">abc</div>';

function cbFunc(x) {
    console.log('x: ', x);
    console.log('this: ', this);
}

document.getElementById('a')
    .addEventListener('click', cbFunc);

// addEventListener 규칙
// 콜백함수의 첫번째 인자는 이벤트 객체로 약속
// 콜백함수 내부의 this는 이벤트 타겟으로 약속