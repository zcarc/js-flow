var a = {
    b: {
        c: 44,
        d: function () {
            function e() {
                console.log(this);
            }
            e();
        }
    }
}

a.b.d();

