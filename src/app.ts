import * as PIXI from 'pixi.js';
import Scene from './scene';
import Main from './scene-main';
import Splash from './scene-splash';
import Game from './scene-game';

class App {

	currentScene: any;
	scenes: any = {};
	renderer: any;

	constructor() {
		this.renderer = PIXI.autoDetectRenderer(800, 600, {});
		document.body.appendChild(this.renderer.view);

		this.scenes.splash = new Splash(this);
		this.scenes.main = new Main(this);
		this.scenes.game = new Game(this);
	}

	public setScene = (scene: any) => {
		if (this.currentScene) this.currentScene.stop();
		this.currentScene = scene;
		scene.start();
	}

	public start() {
		this.setScene(this.scenes.splash);
	}

}

export default App;