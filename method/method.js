var obj = {
    a: 1,
    b: function bb() {
        console.log('obj.b... bb()... this: ', this)
    },
    c: function () {
        console.log('obj.c... ()... this.a: ', this.a)
    }
};

obj.b();
obj.c();

console.dir(obj.b);
console.dir(obj.c);

