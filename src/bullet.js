/*
 * Bullet Class
 */

var Bullet = Class.create(Sprite, {
    initialize:function(){
        Sprite.call(this, 16, 16);
        this.image = game.assets['./img/icon0.png'];
        //this.frame = 0;
         this.dx = 0;
        this.dy = 0;
        this.x = 0;
        this.y = 0;
        this.isEnable = false;
        this.isHit = false;
        this.frameCounter = 0;
    },
    onenterframe:function(){
        if (!this.isEnable) {
            return;
        }
        if (this.isHit){
            this.frame = this.frameCounter;
            this.frameCounter++;
            if (this.frameCounter >= 5) {
                this.frameCounter = 0;
                this.image = game.assets['./img/icon0.png'];
                this.isEnable = false;
                this.isHit = false;
                game.rootScene.removeChild(this);
            }
            return;
        }
        if (this.x < 0 - this.width
        || this.x > game.width
        || this.y < 0 - this.height
        || this.y > game.height ) {
            this.isEnable = false;
            game.rootScene.removeChild(this);
            return;
        }
        this.x += this.dx;
        this.y += this.dy;
    },
    enable:function(){
        this.isEnable = true;
        game.rootScene.addChild(this);
    },
    disable:function(){
        this.isEnable = false;
        game.rootScene.removeChild(this);
    },
    fire:function(x, y, dx, dy){
        if (this.isEnable){
            return;
        }

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        if (this.dx > 0) {
            this.frame = 54;
        }else if (this.dx < 0){
            this.frame = 50;
        }else if (this.dy > 0){
            this.frame = 52;
        }else if (this.dy < 0){
            this.frame = 48;
        }
        this.enable();
    },
    hit:function(){
        this.isHit = true;
        this.image = game.assets['./img/effect0.png'];
        //this.frame = [0,1,2,3,4,null];
    }
});
