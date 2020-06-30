var createCar = function (f, p) {
    var fuel = f;
    var power = p;
    var total = 0;
    return {
        run: function (km) {
            var wasteFuel = km / this.power;
            if (this.fuel < wasteFuel) {
                console.log('이동 불가');
                return;
            }
            this.fuel -= wasteFuel;
            this.total += km;
        }
    }
}

var car = createCar(10, 2);
