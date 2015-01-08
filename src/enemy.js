var Enemy = Class.create(Sprite, {
    initialize:function(x, y){
        Sprite.call(this, 32, 32);
        this.image = game.assets['./img/chara3.png'];
        this.frame = 3;
        this.x = x;
        this.y = y;
        this.isEnable = false;
    },
    onenterframe:function(){

    },
    enable:function(){
        this.isEnable = true;
        game.rootScene.addChild(this);
    },
    disable:function(){
        this.isEnable = false;
        game.rootScene.removeChild(this);
    }
});
