Player = Class.create(Sprite, {
	initialize:function(){
		Sprite.call(this, 32, 32);
		this.image = game.assets['./img/chara3.png'];
		this.frame = 0;
		this.x = 150;
		this.y = 150;

		this.leftKeyState = 0;
		this.rightKeyState = 0;
		this.upKeyState = 0;
		this.downKeyState = 0;

		this.directionX = 0;
		this.directionY = 1;
		//this.bullet = b;
	},
	onenterframe:function(){
		if(!game.input.left) this.leftKeyState = 0;
		if(!game.input.right) this.rightKeyState = 0;
		if(!game.input.up)this.upKeyState = 0;
		if(!game.input.down)this.downKeyState = 0;

		if(this.leftKeyState != 2){
			if(game.input.left){
				if(this.rightKeyState == 1) this.rightKeyState = 2;
				if(this.upKeyState == 1) this.upKeyState = 2;
				if(this.downKeyState == 1) this.downKeyState = 2;
				this.leftKeyState = 1;
			}else{
				this.leftKeyState = 0;
			}
		}
		if(this.rightKeyState != 2){
			if(game.input.right){
				if(this.leftKeyState == 1) this.leftKeyState = 2;
				if(this.upKeyState == 1) this.upKeyState = 2;
				if(this.downKeyState == 1) this.downKeyState = 2;
				this.rightKeyState = 1;
			}else{
				this.rightKeyState = 0;
			}
		}
		if(this.upKeyState != 2){
			if(game.input.up){
				if(this.leftKeyState == 1) this.leftKeyState = 2;
				if(this.rightKeyState == 1) this.rightKeyState = 2;
				if(this.downKeyState == 1) this.downKeyState = 2;
				this.upKeyState = 1;
			}else{
				this.upKeyState = 0;
			}
		}
		if(this.downKeyState != 2){
			if(game.input.down){
				if(this.leftKeyState == 1) this.leftKeyState = 2;
				if(this.rightKeyState == 1) this.rightKeyState = 2;
				if(this.upKeyState == 1) this.upKeyState = 2;
				this.downKeyState = 1;
			}else{
				this.downKeyState = 0;
			}
		}

		if(this.leftKeyState == 1){
			this.frame = [6];
			this.directionX = -1;
			this.directionY = 0;
			this.x -= 2;
		}
		else if(this.rightKeyState == 1){
			this.frame = [12];
			this.directionX = 1;
			this.directionY = 0;
			this.x += 2;
		}
		else if(this.upKeyState == 1){
			this.frame = [18];
			this.directionX = 0;
			this.directionY = -1;
			this.y -= 2;
		}
		else if(this.downKeyState == 1){
			this.frame = [0];
			this.directionX = 0;
			this.directionY = 1;
			this.y += 2;
		}
	},
	enable:function(){
		game.rootScene.addChild(this);
	}
});
