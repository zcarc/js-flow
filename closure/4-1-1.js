// 클로저
// 아래 setName() 함수에서는 인자로 문자열을 넘겨주고
// setName() 함수에서 그 전달받은 파라미터로 name을 지정한다.
// setName() 함수는 함수를 리턴하고 있으므로 리턴된 익명함수를 호출하면
// 그 익명함수는 name 변수에 접근하고 있고 unnamed scope에서 name이라는 변수가 없으므로
// setName() 함수에서 name을 탐색하고 있으니까 그 값을 찾게되어 리턴하게 된다.

function setName(name) {
    return function() {
        return name;
    }
}

var sayMyName = setName('고무곰');

console.log(sayMyName());