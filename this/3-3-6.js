// 함수 내부에서 this를 저장해서
// 객체 프로퍼티가 아닌 함수 호출 시에도 window 객체가 아닌 객체 자체의 this를 사용할 수 있게 만듦
var a = 10;
var obj = {
    a: 20,
    b: function() {
        var self = this;
        console.log('obj.b()... this.a: ', this.a); // 예상 obj.a

        function c() {
            console.log(this.a)
            console.log(self.a)
        }

        c();
    }
}

obj.b()