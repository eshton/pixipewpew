import * as PIXI from 'pixi.js';
import App from './app';
import Scene from './scene';
import * as Particles from 'pixi-particles';

class Game extends Scene {
	
	closeBackground: PIXI.extras.TilingSprite;
	farBackground: PIXI.extras.TilingSprite;
	player: PIXI.Sprite;
	shots: PIXI.Sprite[];
	fighters: PIXI.Sprite[];
	gameEnded: boolean = false;
	elapsed: number = Date.now();
	explosion: Particles.Emitter;

	constructor(app: App) {
		super(app);
		this.stage.interactive = true;
		this.createBackground();
		this.createPlayer();
		this.createExplosion();
	}

	public start = () => {
		this.createEnemy();		
		this.play();
	}

	createEnemy() {
		this.fighters = [];
		this.createTiefighter();
	}

	createTiefighter = () => {
		var texture = PIXI.Texture.fromImage('resources/tiefighter.png');
		var tiefighter = new PIXI.Sprite(texture);
		tiefighter.position.x = 800;
		tiefighter.position.y = Math.floor(Math.random() * 600) + 1;
		tiefighter.width = 50;
		tiefighter.height = 58;
		this.stage.addChild(tiefighter);
		this.fighters.push(tiefighter);
		setTimeout(this.createTiefighter, 1000);
	};

	createPlayer() {
		var playerTexture = PIXI.Texture.fromImage('resources/falcon.png');
		var sprite = new PIXI.Sprite(playerTexture);
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
		sprite.position.x = 40;
		sprite.position.y = 300;
		sprite.width = 100;
		sprite.height = 41;

		this.player = sprite;
		this.stage.addChild(sprite);

		this.stage.on("mousemove", (e:any) => {
			if (this.gameEnded) return;
		    this.player.x = e.data.global.x;
		    this.player.y = e.data.global.y;
		});

		this.shots = [];
		this.stage.on("mousedown", (e:any) => {
			if(this.gameEnded) return;
		    var y = e.data.global.y;
		    var x = e.data.global.x;
			var projectileTexture = PIXI.Texture.fromImage('resources/greenlaser.png');
			var projectile = new PIXI.Sprite(projectileTexture);
			projectile.position.x = x;
			projectile.position.y = y;
			projectile.scale.x = 0.1;
			projectile.scale.y = 0.1;	
			this.stage.addChild(projectile);
			this.shots.push(projectile);
		});		
	}

	createBackground() {
		var farTexture = PIXI.Texture.fromImage('resources/stars.png');
		var far = new PIXI.extras.TilingSprite(farTexture, 1024, 600);
		far.position.x = 0;
		far.position.y = 0;
		far.tilePosition.x = 0;
		far.tilePosition.y = 0;
		this.stage.addChild(far);

		var closeTexture = PIXI.Texture.fromImage('resources/asteroids.png');
		var close = new PIXI.extras.TilingSprite(closeTexture, 1170, 300);
		close.position.x = 0;
		close.position.y = 300;
		close.tilePosition.x = 0;
		close.tilePosition.y = 300;
		this.stage.addChild(close);

		this.farBackground = far;
		this.closeBackground = close;
	}

	public play = () => {
		//animate background
		this.farBackground.tilePosition.x -= 0.5;
		this.closeBackground.tilePosition.x -= 3;

	    //animate shots
	    for (var i = 0; i < this.shots.length; i++) {
	    	var shot = this.shots[i];
	    	if (shot.position.x > 900) {
	    		shot.destroy();
	    		this.shots.splice(i,1);
	    		i--;
	    		continue;
	    	}
	    	else shot.position.x += 10;

	    	//check fighter collision
	    	for (var j = 0; j < this.fighters.length; j++) {
	    		var fighter = this.fighters[j];
	    		if (this.collision(shot, fighter)) {
		    		this.explodeAt(fighter.x, fighter.y);
	    			fighter.destroy();
		    		this.fighters.splice(j,1);
		    		shot.destroy();
		    		this.shots.splice(i,1);
		    		break;
	    		}
	    	}
	    }

	    //animate fighters
	    for (var i = 0; i < this.fighters.length; i++) {
	    	var fighter = this.fighters[i];
	    	if (fighter.position.x < -100) {
	    		fighter.destroy();
	    		this.fighters.splice(i,1);
	    		i--;
	    		continue;
	    	} else fighter.position.x -= 5;

	    	//check player collision
	    	if (!this.gameEnded && this.collision(this.player, fighter)) {
				this.explodeAt(this.player.x, this.player.y);
				this.player.destroy();
				this.gameEnded = true;
	    		this.gameOver();
	    		break;
	    	}
	    }

	    //update explosion emitter
		var now = Date.now();
		if (this.explosion) this.explosion.update((now - this.elapsed) * 0.001);
		this.elapsed = now;

		//call animation renderer
		this.animationId = requestAnimationFrame(this.play);	
		this.app.renderer.render(this.stage);		
	}

	//simple rectangular collision
	collision(a: PIXI.Sprite, b: PIXI.Sprite) {
		if (a.position.x < b.position.x + b.width &&
		   a.position.x + a.width > b.position.x &&
		   a.position.y < b.position.y + b.height &&
		   a.height + a.position.y > b.position.y) {
		   return true;
		}
		return false;
	}

	createExplosion() {
		this.explosion = new Particles.Emitter(
			this.stage,
			[PIXI.Texture.fromImage('resources/particle.png')],
			{
				"alpha": {
					"start": 0.8,
					"end": 0.1
				},
				"scale": {
					"start": 1,
					"end": 0.3
				},
				"color": {
					"start": "fd1111",
					"end": "f7a134"
				},
				"speed": {
					"start": 200,
					"end": 200
				},
				"startRotation": {
					"min": 0,
					"max": 0
				},
				"rotationSpeed": {
					"min": 0,
					"max": 0
				},
				"lifetime": {
					"min": 0.5,
					"max": 0.5
				},
				"frequency": 0.1,
				"emitterLifetime": 0.31,
				"maxParticles": 1000,
				"pos": {
					"x": 10,
					"y": 10
				},
				"addAtBack": false,
				"spawnType": "burst",
				"particlesPerWave": 10,
				"particleSpacing": 0,
				"angleStart": 0
			}			
		);
	}

	explodeAt(x: number,y: number) {
		this.explosion.emit = true;
		this.explosion.resetPositionTracking();
		this.explosion.updateOwnerPos(x,y);
	}

	gameOver = () => {
		setTimeout(() => {
			console.log('lollll');
			var gameOver = new PIXI.Text('GAME OVER BABY', {
				fontFamily: 'Arial',
		    	fontSize: 36,
		    	fill: ['#ffffff', '#ffffff'],
		    	fontWeight: 'bold'
		    });
			gameOver.x = 250;
			gameOver.y = 270;

			this.stage.addChild(gameOver);
		}, 3000);
	}

}

export default Game;