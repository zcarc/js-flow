
// 실제 forEach() 메소드를 비슷하게 구현
Array.prototype.forEach = function (callback, thisArg) {

    var self = thisArg || this;

    for (var i = 0; i < this.length; i++) {
        callback.call(self, this[i], i, this);
    }
};