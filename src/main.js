
var game;

enchant();

/* 他ファイルからの読み込み */
document.write('<script type="text/javascript" src="./player.js"></script>');
document.write('<script type="text/javascript" src="./map_1.js"></script>');
document.write('<script type="text/javascript" src="./bullet.js"></script>');
document.write('<script type="text/javascript" src="./enemy.js"></script>');


window.onload = function(){
	game = new Game(320, 320);
	game.preload('./img/chara3.png', './img/map1.png', './img/icon0.png', './img/effect0.png');
	game.fps = 30;
	game.keybind(' '.charCodeAt(0), 's');

	game.onload = function(){
		var map = new Map_1();
		var player = new Player();
		var bullet = new Bullet();
		var enemy = new Enemy(100, 190, 100);
		game.addEventListener('sbuttondown', function(){
			bullet.fire(player.x + 8, player.y + 8, 10*player.directionX, 10*player.directionY);
		});
		game.addEventListener('enterframe', function(){
			if (!bullet.isEnable || bullet.isHit) {
				return;
			}
			if (map.hitTest(bullet.x + 8, bullet.y + 8)) {
				bullet.disable();
			}else if(enemy.isEnable && bullet.intersect(enemy)){
				//bullet.hit();
				enemy.damage(bullet.hit());
			}
		});
		map.enable();
		player.enable();
		enemy.enable();
	}
	game.start();
}
