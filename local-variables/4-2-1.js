var car = {
    fuel: 10, // 연료 (l)
    power: 2, // 연비 (km / l)
    total: 0,
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