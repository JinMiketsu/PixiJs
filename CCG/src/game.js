import { Application, Assets, Sprite } from "pixi.js";
import { GameScene } from "./scene/scene";

export default class Game {
    constructor() {
        this.app = new Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        
        document.body.appendChild(this.app.view);
        this.gameContainer = new Container;
        this.app.stage.addChild(this.gameContainer);
        this.app.ticker.add(this.update, this);
        this.initGameScene();
    }
    initGameScene() {
        this.gameScene = new GameScene();
        this.gameContainer.addChild(this.gameScene);
    }
    update(deltaTime){
        this.gameScene.update(deltaTime);
        
      }

  
}
