var a = 10;
var obj = {
    a: 20,
    b: function() {
        console.log('obj.b()... this.a: ', this.a);

        function c() {
            console.log(this.a);
        }

        c();
    }
}

obj.b()