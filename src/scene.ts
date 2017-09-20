import * as PIXI from 'pixi.js';
import App from './app';

class Scene {
	animationId: number;
	stage: PIXI.Container = new PIXI.Container();
	app: App;

	constructor(app: App) {
		this.app = app;
	}

	public play = () => {
		this.animationId = requestAnimationFrame(this.play);	
		this.app.renderer.render(this.stage);		
	}

	public stop = () => {
		cancelAnimationFrame(this.animationId);
		this.stage.removeChildren();
		this.stage.destroy(true);
	}
}

export default Scene;