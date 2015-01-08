var Enemy = Class.create(Sprite, {
    initialize:function(hp, x, y){
        Sprite.call(this, 32, 32);
        this.image = game.assets['./img/chara3.png'];
        this.frame = 3;
        this.x = x;
        this.y = y;
        this.isEnable = false;
        this.hp = hp;
    },
    onenterframe:function(){
        if (!this.isEnable) {
            return;
        }
    },
    enable:function(){
        this.isEnable = true;
        game.rootScene.addChild(this);
    },
    disable:function(){
        this.isEnable = false;
        game.rootScene.removeChild(this);
    },
    damage:function(dm){
        this.hp -= dm;
        if (this.hp <= 0) {
            this.disable();
        }
    }
});
