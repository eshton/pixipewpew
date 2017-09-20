import * as PIXI from 'pixi.js';
import App from './app';
import Scene from './scene';

class Main extends Scene {

	constructor(app: App) {
		super(app);

		var texture = PIXI.Texture.fromImage('resources/logo.png');
		var logo = new PIXI.Sprite(texture);
		logo.position.x = 240;
		logo.position.y = 50;
		logo.scale.x = 0.5;
		logo.scale.y = 0.5;
		this.stage.addChild(logo);

		var style = new PIXI.TextStyle({
		    fontFamily: 'Arial',
		    fontSize: 36,
		    fontStyle: 'italic',
		    fontWeight: 'bold',
		    fill: ['#ffffff', '#00ff99'], // gradient
		    stroke: '#4a1850',
		    strokeThickness: 5,
		    dropShadow: true,
		    dropShadowColor: '#000000',
		    dropShadowBlur: 4,
		    dropShadowAngle: Math.PI / 6,
		    dropShadowDistance: 6,
		    wordWrap: true,
		    wordWrapWidth: 440
		});

		var mouseover = function() {
			this.scale.x = 1.1;
			this.scale.y = 1.1;
		}
		var mouseout = function() {
			this.scale.x = 1;
			this.scale.y = 1;
		}

		var game1 = new PIXI.Text('GAME 1', style);
		game1.x = 320;
		game1.y = 250;
		game1.interactive = true;
		game1.on('mouseover', mouseover);
		game1.on('mouseout', mouseout);
		game1.on('mousedown', this.toGame);
		this.stage.addChild(game1);

		var game2 = new PIXI.Text('GAME 2', style);
		game2.x = 320;
		game2.y = 300;
		game2.interactive = true;
		game2.on('mouseover', mouseover);
		game2.on('mouseout', mouseout);
		game2.on('mousedown', this.toGame);		
		this.stage.addChild(game2);

		var game3 = new PIXI.Text('GAME 3', style);
		game3.x = 320;
		game3.y = 350;
		game3.interactive = true;
		game3.on('mouseover', mouseover);
		game3.on('mouseout', mouseout);
		game3.on('mousedown', this.toGame);		
		this.stage.addChild(game3);

		var exit = new PIXI.Text('EXIT', style);
		exit.x = 320;
		exit.y = 400;
		exit.interactive = true;
		exit.on('mouseover', mouseover);
		exit.on('mouseout', mouseout);
		exit.on('mousedown', function(){
			window.location.href = 'http://www.disney.com';
		});		
		this.stage.addChild(exit);		
	}

	start() {
		this.play();
	}

	toGame = () => {
		this.app.setScene(this.app.scenes.game);
	}

}

export default Main;