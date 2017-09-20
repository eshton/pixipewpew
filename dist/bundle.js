/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var Scene = /** @class */ (function () {
    function Scene(app) {
        var _this = this;
        this.stage = new PIXI.Container();
        this.play = function () {
            _this.animationId = requestAnimationFrame(_this.play);
            _this.app.renderer.render(_this.stage);
        };
        this.stop = function () {
            cancelAnimationFrame(_this.animationId);
            _this.stage.removeChildren();
            _this.stage.destroy(true);
        };
        this.app = app;
    }
    return Scene;
}());
exports.default = Scene;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_ts_1 = __webpack_require__(3);
new app_ts_1.default().start();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var scene_main_1 = __webpack_require__(4);
var scene_splash_1 = __webpack_require__(5);
var scene_game_1 = __webpack_require__(6);
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.scenes = {};
        this.setScene = function (scene) {
            if (_this.currentScene)
                _this.currentScene.stop();
            _this.currentScene = scene;
            scene.start();
        };
        this.renderer = PIXI.autoDetectRenderer(800, 600, {});
        document.body.appendChild(this.renderer.view);
        this.scenes.splash = new scene_splash_1.default(this);
        this.scenes.main = new scene_main_1.default(this);
        this.scenes.game = new scene_game_1.default(this);
    }
    App.prototype.start = function () {
        this.setScene(this.scenes.splash);
    };
    return App;
}());
exports.default = App;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var scene_1 = __webpack_require__(1);
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(app) {
        var _this = _super.call(this, app) || this;
        _this.toGame = function () {
            _this.app.setScene(_this.app.scenes.game);
        };
        var texture = PIXI.Texture.fromImage('resources/logo.png');
        var logo = new PIXI.Sprite(texture);
        logo.position.x = 240;
        logo.position.y = 50;
        logo.scale.x = 0.5;
        logo.scale.y = 0.5;
        _this.stage.addChild(logo);
        var style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
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
        var mouseover = function () {
            this.scale.x = 1.1;
            this.scale.y = 1.1;
        };
        var mouseout = function () {
            this.scale.x = 1;
            this.scale.y = 1;
        };
        var game1 = new PIXI.Text('GAME 1', style);
        game1.x = 320;
        game1.y = 250;
        game1.interactive = true;
        game1.on('mouseover', mouseover);
        game1.on('mouseout', mouseout);
        game1.on('mousedown', _this.toGame);
        _this.stage.addChild(game1);
        var game2 = new PIXI.Text('GAME 2', style);
        game2.x = 320;
        game2.y = 300;
        game2.interactive = true;
        game2.on('mouseover', mouseover);
        game2.on('mouseout', mouseout);
        game2.on('mousedown', _this.toGame);
        _this.stage.addChild(game2);
        var game3 = new PIXI.Text('GAME 3', style);
        game3.x = 320;
        game3.y = 350;
        game3.interactive = true;
        game3.on('mouseover', mouseover);
        game3.on('mouseout', mouseout);
        game3.on('mousedown', _this.toGame);
        _this.stage.addChild(game3);
        var exit = new PIXI.Text('EXIT', style);
        exit.x = 320;
        exit.y = 400;
        exit.interactive = true;
        exit.on('mouseover', mouseover);
        exit.on('mouseout', mouseout);
        exit.on('mousedown', function () {
            window.location.href = 'http://www.disney.com';
        });
        _this.stage.addChild(exit);
        return _this;
    }
    Main.prototype.start = function () {
        this.play();
    };
    return Main;
}(scene_1.default));
exports.default = Main;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var scene_1 = __webpack_require__(1);
var Splash = /** @class */ (function (_super) {
    __extends(Splash, _super);
    function Splash(app) {
        var _this = _super.call(this, app) || this;
        _this.start = function () {
            _this.play();
            //after 2seconds set the logo to blur out and then after 1 second lets go to main scene
            setTimeout(function () {
                _this.fadeout = true;
                setTimeout(function () { _this.app.setScene(_this.app.scenes.main); }, 1000);
            }, 2000);
        };
        _this.play = function () {
            if (_this.fadeout) {
                _this.logo.alpha -= 0.02;
            }
            _this.animationId = requestAnimationFrame(_this.play);
            _this.app.renderer.render(_this.stage);
        };
        var texture = PIXI.Texture.fromImage('resources/logo.png');
        var logo = new PIXI.Sprite(texture);
        logo.position.x = 80;
        logo.position.y = 100;
        _this.logo = logo;
        _this.stage.addChild(logo);
        _this.app.renderer.render(_this.stage);
        return _this;
    }
    return Splash;
}(scene_1.default));
exports.default = Splash;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var scene_1 = __webpack_require__(1);
var Particles = __webpack_require__(7);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(app) {
        var _this = _super.call(this, app) || this;
        _this.gameEnded = false;
        _this.elapsed = Date.now();
        _this.start = function () {
            _this.createEnemy();
            _this.play();
        };
        _this.createTiefighter = function () {
            var texture = PIXI.Texture.fromImage('resources/tiefighter.png');
            var tiefighter = new PIXI.Sprite(texture);
            tiefighter.position.x = 800;
            tiefighter.position.y = Math.floor(Math.random() * 600) + 1;
            tiefighter.width = 50;
            tiefighter.height = 58;
            _this.stage.addChild(tiefighter);
            _this.fighters.push(tiefighter);
            setTimeout(_this.createTiefighter, 1000);
        };
        _this.play = function () {
            //animate background
            _this.farBackground.tilePosition.x -= 0.5;
            _this.closeBackground.tilePosition.x -= 3;
            //animate shots
            for (var i = 0; i < _this.shots.length; i++) {
                var shot = _this.shots[i];
                if (shot.position.x > 900) {
                    shot.destroy();
                    _this.shots.splice(i, 1);
                    i--;
                    continue;
                }
                else
                    shot.position.x += 10;
                //check fighter collision
                for (var j = 0; j < _this.fighters.length; j++) {
                    var fighter = _this.fighters[j];
                    if (_this.collision(shot, fighter)) {
                        _this.explodeAt(fighter.x, fighter.y);
                        fighter.destroy();
                        _this.fighters.splice(j, 1);
                        shot.destroy();
                        _this.shots.splice(i, 1);
                        break;
                    }
                }
            }
            //animate fighters
            for (var i = 0; i < _this.fighters.length; i++) {
                var fighter = _this.fighters[i];
                if (fighter.position.x < -100) {
                    fighter.destroy();
                    _this.fighters.splice(i, 1);
                    i--;
                    continue;
                }
                else
                    fighter.position.x -= 5;
                //check player collision
                if (!_this.gameEnded && _this.collision(_this.player, fighter)) {
                    _this.explodeAt(_this.player.x, _this.player.y);
                    _this.player.destroy();
                    _this.gameEnded = true;
                    _this.gameOver();
                    break;
                }
            }
            //update explosion emitter
            var now = Date.now();
            if (_this.explosion)
                _this.explosion.update((now - _this.elapsed) * 0.001);
            _this.elapsed = now;
            //call animation renderer
            _this.animationId = requestAnimationFrame(_this.play);
            _this.app.renderer.render(_this.stage);
        };
        _this.gameOver = function () {
            setTimeout(function () {
                console.log('lollll');
                var gameOver = new PIXI.Text('GAME OVER BABY', {
                    fontFamily: 'Arial',
                    fontSize: 36,
                    fill: ['#ffffff', '#ffffff'],
                    fontWeight: 'bold'
                });
                gameOver.x = 250;
                gameOver.y = 270;
                _this.stage.addChild(gameOver);
            }, 3000);
        };
        _this.stage.interactive = true;
        _this.createBackground();
        _this.createPlayer();
        _this.createExplosion();
        return _this;
    }
    Game.prototype.createEnemy = function () {
        this.fighters = [];
        this.createTiefighter();
    };
    Game.prototype.createPlayer = function () {
        var _this = this;
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
        this.stage.on("mousemove", function (e) {
            if (_this.gameEnded)
                return;
            _this.player.x = e.data.global.x;
            _this.player.y = e.data.global.y;
        });
        this.shots = [];
        this.stage.on("mousedown", function (e) {
            if (_this.gameEnded)
                return;
            var y = e.data.global.y;
            var x = e.data.global.x;
            var projectileTexture = PIXI.Texture.fromImage('resources/greenlaser.png');
            var projectile = new PIXI.Sprite(projectileTexture);
            projectile.position.x = x;
            projectile.position.y = y;
            projectile.scale.x = 0.1;
            projectile.scale.y = 0.1;
            _this.stage.addChild(projectile);
            _this.shots.push(projectile);
        });
    };
    Game.prototype.createBackground = function () {
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
    };
    //simple rectangular collision
    Game.prototype.collision = function (a, b) {
        if (a.position.x < b.position.x + b.width &&
            a.position.x + a.width > b.position.x &&
            a.position.y < b.position.y + b.height &&
            a.height + a.position.y > b.position.y) {
            return true;
        }
        return false;
    };
    Game.prototype.createExplosion = function () {
        this.explosion = new Particles.Emitter(this.stage, [PIXI.Texture.fromImage('resources/particle.png')], {
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
        });
    };
    Game.prototype.explodeAt = function (x, y) {
        this.explosion.emit = true;
        this.explosion.resetPositionTracking();
        this.explosion.updateOwnerPos(x, y);
    };
    return Game;
}(scene_1.default));
exports.default = Game;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * pixi-particles - v2.1.6
 * Compiled Fri, 15 Sep 2017 02:32:32 UTC
 *
 * pixi-particles is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,i.pixiParticles=t()}}(function(){var define,module,exports;return function t(i,e,s){function a(n,o){if(!e[n]){if(!i[n]){var h="function"==typeof require&&require;if(!o&&h)return require(n,!0);if(r)return r(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var p=e[n]={exports:{}};i[n][0].call(p.exports,function(t){var e=i[n][1][t];return a(e?e:t)},p,p.exports,t,i,e,s)}return e[n].exports}for(var r="function"==typeof require&&require,n=0;n<s.length;n++)a(s[n]);return a}({1:[function(t,i,e){"use strict";var s=t("./ParticleUtils"),a=t("./Particle"),r=PIXI.Texture,n=function(t){a.call(this,t),this.textures=null,this.duration=0,this.framerate=0,this.elapsed=0,this.loop=!1},o=a.prototype,h=n.prototype=Object.create(o);h.init=function(){this.Particle_init(),this.elapsed=0,this.framerate<0&&(this.duration=this.maxLife,this.framerate=this.textures.length/this.duration)},h.applyArt=function(t){this.textures=t.textures,this.framerate=t.framerate,this.duration=t.duration,this.loop=t.loop},h.update=function(t){if(this.Particle_update(t)>=0){this.elapsed+=t,this.elapsed>this.duration&&(this.loop?this.elapsed=this.elapsed%this.duration:this.elapsed=this.duration-1e-6);var i=this.elapsed*this.framerate+1e-7|0;this.texture=this.textures[i]||s.EMPTY_TEXTURE}},h.Particle_destroy=a.prototype.destroy,h.destroy=function(){this.Particle_destroy(),this.textures=null},n.parseArt=function(t){var i,e,s,a,n,o,h=[];for(i=0;i<t.length;++i){for(e=t[i],t[i]=h={},h.textures=o=[],a=e.textures,s=0;s<a.length;++s)if(n=a[s],"string"==typeof n)o.push(r.fromImage(n));else if(n instanceof r)o.push(n);else{var l=n.count||1;for(n="string"==typeof n.texture?r.fromImage(n.texture):n.texture;l>0;--l)o.push(n)}"matchLife"==e.framerate?(h.framerate=-1,h.duration=0,h.loop=!1):(h.loop=!!e.loop,h.framerate=e.framerate>0?e.framerate:60,h.duration=o.length/h.framerate)}return t},i.exports=n},{"./Particle":3,"./ParticleUtils":4}],2:[function(t,i,e){"use strict";var s=t("./ParticleUtils"),a=t("./Particle"),r=PIXI.particles.ParticleContainer||PIXI.ParticleContainer,n=PIXI.ticker.shared,o=function(t,i,e){this._particleConstructor=a,this.particleImages=null,this.startAlpha=1,this.endAlpha=1,this.startSpeed=0,this.endSpeed=0,this.minimumSpeedMultiplier=1,this.acceleration=null,this.maxSpeed=NaN,this.startScale=1,this.endScale=1,this.minimumScaleMultiplier=1,this.startColor=null,this.endColor=null,this.minLifetime=0,this.maxLifetime=0,this.minStartRotation=0,this.maxStartRotation=0,this.noRotation=!1,this.minRotationSpeed=0,this.maxRotationSpeed=0,this.particleBlendMode=0,this.customEase=null,this.extraData=null,this._frequency=1,this.maxParticles=1e3,this.emitterLifetime=-1,this.spawnPos=null,this.spawnType=null,this._spawnFunc=null,this.spawnRect=null,this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0,this.rotation=0,this.ownerPos=null,this._prevEmitterPos=null,this._prevPosIsValid=!1,this._posChanged=!1,this._parentIsPC=!1,this._parent=null,this.addAtBack=!1,this.particleCount=0,this._emit=!1,this._spawnTimer=0,this._emitterLife=-1,this._activeParticlesFirst=null,this._activeParticlesLast=null,this._poolFirst=null,this._origConfig=null,this._origArt=null,this._autoUpdate=!1,this._destroyWhenComplete=!1,this.parent=t,i&&e&&this.init(i,e),this.recycle=this.recycle,this.update=this.update,this.rotate=this.rotate,this.updateSpawnPos=this.updateSpawnPos,this.updateOwnerPos=this.updateOwnerPos},h=o.prototype={},l=new PIXI.Point;Object.defineProperty(h,"frequency",{get:function(){return this._frequency},set:function(t){"number"==typeof t&&t>0?this._frequency=t:this._frequency=1}}),Object.defineProperty(h,"particleConstructor",{get:function(){return this._particleConstructor},set:function(t){if(t!=this._particleConstructor){this._particleConstructor=t,this.cleanup();for(var i=this._poolFirst;i;i=i.next)i.destroy();this._poolFirst=null,this._origConfig&&this._origArt&&this.init(this._origArt,this._origConfig)}}}),Object.defineProperty(h,"parent",{get:function(){return this._parent},set:function(t){if(this._parentIsPC)for(var i=this._poolFirst;i;i=i.next)i.parent&&i.parent.removeChild(i);this.cleanup(),this._parent=t,this._parentIsPC=r&&t&&t instanceof r}}),h.init=function(t,i){if(t&&i){this.cleanup(),this._origConfig=i,this._origArt=t,t=Array.isArray(t)?t.slice():[t];var e=this._particleConstructor;this.particleImages=e.parseArt?e.parseArt(t):t,i.alpha?(this.startAlpha=i.alpha.start,this.endAlpha=i.alpha.end):this.startAlpha=this.endAlpha=1,i.speed?(this.startSpeed=i.speed.start,this.endSpeed=i.speed.end,this.minimumSpeedMultiplier=i.speed.minimumSpeedMultiplier||1):(this.minimumSpeedMultiplier=1,this.startSpeed=this.endSpeed=0);var a=i.acceleration;a&&(a.x||a.y)?(this.endSpeed=this.startSpeed,this.acceleration=new PIXI.Point(a.x,a.y),this.maxSpeed=i.maxSpeed||NaN):this.acceleration=new PIXI.Point,i.scale?(this.startScale=i.scale.start,this.endScale=i.scale.end,this.minimumScaleMultiplier=i.scale.minimumScaleMultiplier||1):this.startScale=this.endScale=this.minimumScaleMultiplier=1,i.color&&(this.startColor=s.hexToRGB(i.color.start),i.color.start!=i.color.end?this.endColor=s.hexToRGB(i.color.end):this.endColor=null),i.startRotation?(this.minStartRotation=i.startRotation.min,this.maxStartRotation=i.startRotation.max):this.minStartRotation=this.maxStartRotation=0,i.noRotation&&(this.minStartRotation||this.maxStartRotation)?this.noRotation=!!i.noRotation:this.noRotation=!1,i.rotationSpeed?(this.minRotationSpeed=i.rotationSpeed.min,this.maxRotationSpeed=i.rotationSpeed.max):this.minRotationSpeed=this.maxRotationSpeed=0,this.minLifetime=i.lifetime.min,this.maxLifetime=i.lifetime.max,this.particleBlendMode=s.getBlendMode(i.blendMode),i.ease?this.customEase="function"==typeof i.ease?i.ease:s.generateEase(i.ease):this.customEase=null,e.parseData?this.extraData=e.parseData(i.extraData):this.extraData=i.extraData||null,this.spawnRect=this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0;var r;switch(i.spawnType){case"rect":this.spawnType="rect",this._spawnFunc=this._spawnRect;var n=i.spawnRect;this.spawnRect=new PIXI.Rectangle(n.x,n.y,n.w,n.h);break;case"circle":this.spawnType="circle",this._spawnFunc=this._spawnCircle,r=i.spawnCircle,this.spawnCircle=new PIXI.Circle(r.x,r.y,r.r);break;case"ring":this.spawnType="ring",this._spawnFunc=this._spawnRing,r=i.spawnCircle,this.spawnCircle=new PIXI.Circle(r.x,r.y,r.r),this.spawnCircle.minRadius=r.minR;break;case"burst":this.spawnType="burst",this._spawnFunc=this._spawnBurst,this.particlesPerWave=i.particlesPerWave,this.particleSpacing=i.particleSpacing,this.angleStart=i.angleStart?i.angleStart:0;break;case"point":this.spawnType="point",this._spawnFunc=this._spawnPoint;break;default:this.spawnType="point",this._spawnFunc=this._spawnPoint}this.frequency=i.frequency,this.emitterLifetime=i.emitterLifetime||-1,this.maxParticles=i.maxParticles>0?i.maxParticles:1e3,this.addAtBack=!!i.addAtBack,this.rotation=0,this.ownerPos=new PIXI.Point,this.spawnPos=new PIXI.Point(i.pos.x,i.pos.y),this._prevEmitterPos=this.spawnPos.clone(),this._prevPosIsValid=!1,this._spawnTimer=0,this.emit=void 0===i.emit||!!i.emit,this.autoUpdate=void 0!==i.autoUpdate&&!!i.autoUpdate}},h.recycle=function(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t==this._activeParticlesLast&&(this._activeParticlesLast=t.prev),t==this._activeParticlesFirst&&(this._activeParticlesFirst=t.next),t.prev=null,t.next=this._poolFirst,this._poolFirst=t,this._parentIsPC?(t.alpha=0,t.visible=!1):t.parent&&t.parent.removeChild(t),--this.particleCount},h.rotate=function(t){if(this.rotation!=t){var i=t-this.rotation;this.rotation=t,s.rotatePoint(i,this.spawnPos),this._posChanged=!0}},h.updateSpawnPos=function(t,i){this._posChanged=!0,this.spawnPos.x=t,this.spawnPos.y=i},h.updateOwnerPos=function(t,i){this._posChanged=!0,this.ownerPos.x=t,this.ownerPos.y=i},h.resetPositionTracking=function(){this._prevPosIsValid=!1},Object.defineProperty(h,"emit",{get:function(){return this._emit},set:function(t){this._emit=!!t,this._emitterLife=this.emitterLifetime}}),Object.defineProperty(h,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){this._autoUpdate&&!t?n.remove(this.update,this):!this._autoUpdate&&t&&n.add(this.update,this),this._autoUpdate=!!t}}),h.playOnceAndDestroy=function(){this.autoUpdate=!0,this.emit=!0,this._destroyWhenComplete=!0},h.update=function(t){if(this._autoUpdate&&(t=t/PIXI.settings.TARGET_FPMS/1e3),this._parent){var i,e,s;for(e=this._activeParticlesFirst;e;e=s)s=e.next,e.update(t);var a,r;this._prevPosIsValid&&(a=this._prevEmitterPos.x,r=this._prevEmitterPos.y);var n=this.ownerPos.x+this.spawnPos.x,o=this.ownerPos.y+this.spawnPos.y;if(this._emit)for(this._spawnTimer-=t;this._spawnTimer<=0;){if(this._emitterLife>0&&(this._emitterLife-=this._frequency,this._emitterLife<=0)){this._spawnTimer=0,this._emitterLife=0,this.emit=!1;break}if(this.particleCount>=this.maxParticles)this._spawnTimer+=this._frequency;else{var h;if(h=this.minLifetime==this.maxLifetime?this.minLifetime:Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime,-this._spawnTimer<h){var l,p;if(this._prevPosIsValid&&this._posChanged){var c=1+this._spawnTimer/t;l=(n-a)*c+a,p=(o-r)*c+r}else l=n,p=o;i=0;for(var d=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);i<d;++i){var u,m;if(this._poolFirst?(u=this._poolFirst,this._poolFirst=this._poolFirst.next,u.next=null):u=new this.particleConstructor(this),this.particleImages.length>1?u.applyArt(this.particleImages[Math.floor(Math.random()*this.particleImages.length)]):u.applyArt(this.particleImages[0]),u.startAlpha=this.startAlpha,u.endAlpha=this.endAlpha,1!=this.minimumSpeedMultiplier?(m=Math.random()*(1-this.minimumSpeedMultiplier)+this.minimumSpeedMultiplier,u.startSpeed=this.startSpeed*m,u.endSpeed=this.endSpeed*m):(u.startSpeed=this.startSpeed,u.endSpeed=this.endSpeed),u.acceleration.x=this.acceleration.x,u.acceleration.y=this.acceleration.y,u.maxSpeed=this.maxSpeed,1!=this.minimumScaleMultiplier?(m=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier,u.startScale=this.startScale*m,u.endScale=this.endScale*m):(u.startScale=this.startScale,u.endScale=this.endScale),u.startColor=this.startColor,u.endColor=this.endColor,this.minRotationSpeed==this.maxRotationSpeed?u.rotationSpeed=this.minRotationSpeed:u.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed,u.noRotation=this.noRotation,u.maxLife=h,u.blendMode=this.particleBlendMode,u.ease=this.customEase,u.extraData=this.extraData,this._spawnFunc(u,l,p,i),u.init(),u.update(-this._spawnTimer),this._parentIsPC&&u.parent){var f=this._parent.children;if(f[0]==u)f.shift();else if(f[f.length-1]==u)f.pop();else{var P=f.indexOf(u);f.splice(P,1)}this.addAtBack?f.unshift(u):f.push(u)}else this.addAtBack?this._parent.addChildAt(u,0):this._parent.addChild(u);this._activeParticlesLast?(this._activeParticlesLast.next=u,u.prev=this._activeParticlesLast,this._activeParticlesLast=u):this._activeParticlesLast=this._activeParticlesFirst=u,++this.particleCount}}this._spawnTimer+=this._frequency}}this._posChanged&&(this._prevEmitterPos.x=n,this._prevEmitterPos.y=o,this._prevPosIsValid=!0,this._posChanged=!1),!this._destroyWhenComplete||this._emit||this._activeParticlesFirst||this.destroy()}},h._spawnPoint=function(t,i,e){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,t.position.x=i,t.position.y=e},h._spawnRect=function(t,i,e){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,l.x=Math.random()*this.spawnRect.width+this.spawnRect.x,l.y=Math.random()*this.spawnRect.height+this.spawnRect.y,0!==this.rotation&&s.rotatePoint(this.rotation,l),t.position.x=i+l.x,t.position.y=e+l.y},h._spawnCircle=function(t,i,e){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,l.x=Math.random()*this.spawnCircle.radius,l.y=0,s.rotatePoint(360*Math.random(),l),l.x+=this.spawnCircle.x,l.y+=this.spawnCircle.y,0!==this.rotation&&s.rotatePoint(this.rotation,l),t.position.x=i+l.x,t.position.y=e+l.y},h._spawnRing=function(t,i,e){var a=this.spawnCircle;this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,a.minRadius==a.radius?l.x=Math.random()*(a.radius-a.minRadius)+a.minRadius:l.x=a.radius,l.y=0;var r=360*Math.random();t.rotation+=r,s.rotatePoint(r,l),l.x+=this.spawnCircle.x,l.y+=this.spawnCircle.y,0!==this.rotation&&s.rotatePoint(this.rotation,l),t.position.x=i+l.x,t.position.y=e+l.y},h._spawnBurst=function(t,i,e,s){0===this.particleSpacing?t.rotation=360*Math.random():t.rotation=this.angleStart+this.particleSpacing*s+this.rotation,t.position.x=i,t.position.y=e},h.cleanup=function(){var t,i;for(t=this._activeParticlesFirst;t;t=i)i=t.next,this.recycle(t),t.parent&&t.parent.removeChild(t);this._activeParticlesFirst=this._activeParticlesLast=null,this.particleCount=0},h.destroy=function(){this.autoUpdate=!1,this.cleanup();for(var t,i=this._poolFirst;i;i=t)t=i.next,i.destroy();this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.endColor=this.customEase=null},i.exports=o},{"./Particle":3,"./ParticleUtils":4}],3:[function(t,i,e){var s=t("./ParticleUtils"),a=PIXI.Sprite,r=function(t){a.call(this),this.emitter=t,this.anchor.x=this.anchor.y=.5,this.velocity=new PIXI.Point,this.maxLife=0,this.age=0,this.ease=null,this.extraData=null,this.startAlpha=0,this.endAlpha=0,this.startSpeed=0,this.endSpeed=0,this.acceleration=new PIXI.Point,this.maxSpeed=NaN,this.startScale=0,this.endScale=0,this.startColor=null,this._sR=0,this._sG=0,this._sB=0,this.endColor=null,this._eR=0,this._eG=0,this._eB=0,this._doAlpha=!1,this._doScale=!1,this._doSpeed=!1,this._doAcceleration=!1,this._doColor=!1,this._doNormalMovement=!1,this._oneOverLife=0,this.next=null,this.prev=null,this.init=this.init,this.Particle_init=this.Particle_init,this.update=this.update,this.Particle_update=this.Particle_update,this.applyArt=this.applyArt,this.kill=this.kill},n=r.prototype=Object.create(a.prototype);n.init=n.Particle_init=function(){this.age=0,this.velocity.x=this.startSpeed,this.velocity.y=0,s.rotatePoint(this.rotation,this.velocity),this.noRotation?this.rotation=0:this.rotation*=s.DEG_TO_RADS,this.rotationSpeed*=s.DEG_TO_RADS,this.alpha=this.startAlpha,this.scale.x=this.scale.y=this.startScale,this.startColor&&(this._sR=this.startColor[0],this._sG=this.startColor[1],this._sB=this.startColor[2],this.endColor&&(this._eR=this.endColor[0],this._eG=this.endColor[1],this._eB=this.endColor[2])),this._doAlpha=this.startAlpha!=this.endAlpha,this._doSpeed=this.startSpeed!=this.endSpeed,this._doScale=this.startScale!=this.endScale,this._doColor=!!this.endColor,this._doAcceleration=0!==this.acceleration.x||0!==this.acceleration.y,this._doNormalMovement=this._doSpeed||0!==this.startSpeed||this._doAcceleration,this._oneOverLife=1/this.maxLife,this.tint=s.combineRGBComponents(this._sR,this._sG,this._sB),this.visible=!0},n.applyArt=function(t){this.texture=t||s.EMPTY_TEXTURE},n.update=n.Particle_update=function(t){if(this.age+=t,this.age>=this.maxLife)return this.kill(),-1;var i=this.age*this._oneOverLife;if(this.ease&&(i=4==this.ease.length?this.ease(i,0,1,1):this.ease(i)),this._doAlpha&&(this.alpha=(this.endAlpha-this.startAlpha)*i+this.startAlpha),this._doScale){var e=(this.endScale-this.startScale)*i+this.startScale;this.scale.x=this.scale.y=e}if(this._doNormalMovement){if(this._doSpeed){var a=(this.endSpeed-this.startSpeed)*i+this.startSpeed;s.normalize(this.velocity),s.scaleBy(this.velocity,a)}else if(this._doAcceleration&&(this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.maxSpeed)){var r=s.length(this.velocity);r>this.maxSpeed&&s.scaleBy(this.velocity,this.maxSpeed/r)}this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t}if(this._doColor){var n=(this._eR-this._sR)*i+this._sR,o=(this._eG-this._sG)*i+this._sG,h=(this._eB-this._sB)*i+this._sB;this.tint=s.combineRGBComponents(n,o,h)}return 0!==this.rotationSpeed?this.rotation+=this.rotationSpeed*t:this.acceleration&&!this.noRotation&&(this.rotation=Math.atan2(this.velocity.y,this.velocity.x)),i},n.kill=function(){this.emitter.recycle(this)},n.Sprite_Destroy=a.prototype.destroy,n.destroy=function(){this.parent&&this.parent.removeChild(this),this.Sprite_Destroy&&this.Sprite_Destroy(),this.emitter=this.velocity=this.startColor=this.endColor=this.ease=this.next=this.prev=null},r.parseArt=function(t){var i;for(i=t.length;i>=0;--i)"string"==typeof t[i]&&(t[i]=PIXI.Texture.fromImage(t[i]));if(s.verbose)for(i=t.length-1;i>0;--i)if(t[i].baseTexture!=t[i-1].baseTexture){window.console&&console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");break}return t},r.parseData=function(t){return t},i.exports=r},{"./ParticleUtils":4}],4:[function(t,i,e){"use strict";var s=PIXI.BLEND_MODES||PIXI.blendModes,a=PIXI.Texture,r={};r.verbose=!1;var n=r.DEG_TO_RADS=Math.PI/180,o=r.EMPTY_TEXTURE=a.EMPTY;o.on=o.destroy=o.once=o.emit=function(){},r.rotatePoint=function(t,i){if(t){t*=n;var e=Math.sin(t),s=Math.cos(t),a=i.x*s-i.y*e,r=i.x*e+i.y*s;i.x=a,i.y=r}},r.combineRGBComponents=function(t,i,e){return t<<16|i<<8|e},r.normalize=function(t){var i=1/r.length(t);t.x*=i,t.y*=i},r.scaleBy=function(t,i){t.x*=i,t.y*=i},r.length=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},r.hexToRGB=function(t,i){i?i.length=0:i=[],"#"==t.charAt(0)?t=t.substr(1):0===t.indexOf("0x")&&(t=t.substr(2));var e;return 8==t.length&&(e=t.substr(0,2),t=t.substr(2)),i.push(parseInt(t.substr(0,2),16)),i.push(parseInt(t.substr(2,2),16)),i.push(parseInt(t.substr(4,2),16)),e&&i.push(parseInt(e,16)),i},r.generateEase=function(t){var i=t.length,e=1/i,s=function(s){var a,r,n=i*s|0;return a=(s-n*e)*i,r=t[n]||t[i-1],r.s+a*(2*(1-a)*(r.cp-r.s)+a*(r.e-r.s))};return s},r.getBlendMode=function(t){if(!t)return s.NORMAL;for(t=t.toUpperCase();t.indexOf(" ")>=0;)t=t.replace(" ","_");return s[t]||s.NORMAL},i.exports=r},{}],5:[function(require,module,exports){"use strict";var ParticleUtils=require("./ParticleUtils"),Particle=require("./Particle"),PathParticle=function(t){Particle.call(this,t),this.path=null,this.initialRotation=0,this.initialPosition=new PIXI.Point,this.movement=0},s=Particle.prototype,p=PathParticle.prototype=Object.create(s),helperPoint=new PIXI.Point;p.init=function(){this.initialRotation=this.rotation,this.Particle_init(),this.path=this.extraData.path,this._doNormalMovement=!this.path,this.movement=0,this.initialPosition.x=this.position.x,this.initialPosition.y=this.position.y};for(var MATH_FUNCS=["pow","sqrt","abs","floor","round","ceil","E","PI","sin","cos","tan","asin","acos","atan","atan2","log"],WHITELISTER="[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]",index=MATH_FUNCS.length-1;index>=0;--index)WHITELISTER+="|"+MATH_FUNCS[index];WHITELISTER=new RegExp(WHITELISTER,"g");var parsePath=function(pathString){for(var rtn,matches=pathString.match(WHITELISTER),i=matches.length-1;i>=0;--i)MATH_FUNCS.indexOf(matches[i])>=0&&(matches[i]="Math."+matches[i]);return pathString=matches.join(""),eval("rtn = function(x){ return "+pathString+"; };"),rtn};p.update=function(t){var i=this.Particle_update(t);if(i>=0&&this.path){var e=(this.endSpeed-this.startSpeed)*i+this.startSpeed;this.movement+=e*t,helperPoint.x=this.movement,helperPoint.y=this.path(this.movement),ParticleUtils.rotatePoint(this.initialRotation,helperPoint),this.position.x=this.initialPosition.x+helperPoint.x,this.position.y=this.initialPosition.y+helperPoint.y}},p.Particle_destroy=Particle.prototype.destroy,p.destroy=function(){this.Particle_destroy(),this.path=this.initialPosition=null},PathParticle.parseArt=function(t){return Particle.parseArt(t)},PathParticle.parseData=function(t){var i={};if(t&&t.path)try{i.path=parsePath(t.path)}catch(t){ParticleUtils.verbose&&console.error("PathParticle: error in parsing path expression"),i.path=null}else ParticleUtils.verbose&&console.error("PathParticle requires a path string in extraData!"),i.path=null;return i},module.exports=PathParticle},{"./Particle":3,"./ParticleUtils":4}],6:[function(t,i,e){},{}],7:[function(t,i,e){e.ParticleUtils=t("./ParticleUtils.js"),e.Particle=t("./Particle.js"),e.Emitter=t("./Emitter.js"),e.PathParticle=t("./PathParticle.js"),e.AnimatedParticle=t("./AnimatedParticle.js"),t("./deprecation.js")},{"./AnimatedParticle.js":1,"./Emitter.js":2,"./Particle.js":3,"./ParticleUtils.js":4,"./PathParticle.js":5,"./deprecation.js":6}],8:[function(t,i,e){"use strict";var s="undefined"!=typeof window?window:GLOBAL;if(s.PIXI.particles||(s.PIXI.particles={}),"undefined"!=typeof i&&i.exports)"undefined"==typeof PIXI&&t("pixi.js"),i.exports=s.PIXI.particles||a;else if("undefined"==typeof PIXI)throw"pixi-particles requires pixi.js to be loaded first";var a=t("./particles");for(var r in a)s.PIXI.particles[r]=a[r]},{"./particles":7,"pixi.js":void 0}]},{},[8])(8)});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map