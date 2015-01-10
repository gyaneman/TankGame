var AI = Class.create(Enemy, {
    initialize:function(hp, x, y){
        Enemy.call(this, hp, x, y);
    },
    think:function(player_x, player_y){
        if (!this.isEnable) {
            return;
        }

        var pdx = this.x - player_x;
        var pdy = this.y - player_y;

        if (pdx*pdx < 250 || pdy*pdy < 250) {
            this.dx = 0;
            this.dy = 0;
            return;
        }

        if (pdx*pdx > pdy*pdy) {
            if (pdy < 0) {
                this.dy = this.speed;
            }else{
                this.dy = this.speed * -1;
            }
        }else{
            if (pdx < 0) {
                this.dx = this.speed;
            }else{
                this.dx = this.speed * -1;
            }
        }
    }
});
