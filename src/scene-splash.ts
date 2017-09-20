import * as PIXI from 'pixi.js';
import App from './app';
import Scene from './scene';

class Splash extends Scene {

	requestId: number;
	logo: PIXI.Sprite;
	fadeout: boolean;

	constructor(app: App) {
		super(app);

		var texture = PIXI.Texture.fromImage('resources/logo.png');
		var logo = new PIXI.Sprite(texture);
		logo.position.x = 80;
		logo.position.y = 100;
		this.logo = logo;
		this.stage.addChild(logo);
		this.app.renderer.render(this.stage);		
	}

	public start = () => {
		this.play();

		//after 2seconds set the logo to blur out and then after 1 second lets go to main scene
		setTimeout(() => { 
			this.fadeout = true;
			setTimeout(() => { this.app.setScene(this.app.scenes.main) },1000);
		}, 2000);
	}

	public play = () => {
		if (this.fadeout) {
			this.logo.alpha -= 0.02;
		}
		this.animationId = requestAnimationFrame(this.play);	
		this.app.renderer.render(this.stage);		
	}	

}

export default Splash;