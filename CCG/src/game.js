import { Application, Container, } from "pixi.js";
import { CollisionDetector } from "./collisionDetector/collisionDetector";
import { gameConstants } from "./gameConstants";
import { PlayScene } from "./scenes/gamePlayScene";

export default class Game {
  constructor(){
    this.app = new Application({
      width: gameConstants.WIDTH,
      height: gameConstants.HEIGHT,
    });
    document.body.appendChild(this.app.view);
    this.gameContainer = new Container;
    this.app.stage.addChild(this.gameContainer);
    this.app.ticker.add(this.update, this);
    CollisionDetector.init();
    this.initScene();
  }

  initScene(){
    this.playScene = new PlayScene;
    this.gameContainer.addChild(this.playScene);
  }

  update(dt){
    CollisionDetector.update();
    this.playScene.update(dt);
  }
}