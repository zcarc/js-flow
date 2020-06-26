var a = 10;

var obj = {
    a: 20,
    b: function() {
        console.log(this.a); // obj의 b이므로 20이 출력됨

        function c() {
            // 예상 윈도우의 a 즉, 전역 컨텍스트의 a이므로 10이 출력
            // node.js 상에서는 undefined가 출력되고, 크롬 콘솔 상에서는 10이 출력됨
            console.log(this.a);
        }

        c();
    }
}

obj.b();