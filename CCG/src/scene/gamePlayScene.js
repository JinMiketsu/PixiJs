import { Container, Sprite, Texture } from "pixi.js";
import { gameConstants } from "../gameConstants";
import { ColliderEvent } from "../objects/collider/collider";
import { Door } from "../objects/door/door";
import { EnemyController } from "../objects/enemy/enemyController";
import { Player } from "../objects/player/player";
import { Treasure } from "../objects/treasure/treasure";
import { GameOverScene } from "./gameOverScene";
import { GameVictoryScene } from "./gameVictoryScene";

export class PlayScene extends Container {
  constructor() {
    super();
    this.dt = 0;
    this.gamePlayContainer = new Container();
    this.isWin = false;
    this.addChild(this.gamePlayContainer);
    this.initGamePlay();
    this.initScenes();
  }

  initGamePlay() {
    let texture = Texture.from("../../assets/dungeon.png");
    this.dungeon = new Sprite(texture);
    this.gamePlayContainer.addChild(this.dungeon);

    this.initPlayer();
    this.initEnemy();
    this.initDoor();
    this.initTreasure();
  }

  initScenes() {
    this.initGameVictory();
    this.initGameOver()
  }

  initPlayer() {
    this.player = new Player(this.gamePlayContainer);
    this.player.x = 30;
    this.player.y = 50;
    this.gamePlayContainer.addChild(this.player);
  }

  initEnemy() {
    this.enemies = new EnemyController();
    this.gamePlayContainer.addChild(this.enemies);
    this.enemies.enemies.forEach((enemy) => {
      enemy.children[0].on(ColliderEvent.onCollider, (collider) => {
        collider = enemy.children[0].children[0].name;
        if (collider == "enemy") {
          this.player.healthBar.width -= 2;
          if (this.player.healthBar.width <= 0) {
            this.player.collider.enable = false;
            this.gamePlayContainer.visible = false;
            this.gameOver.visible = true;
          }
        }
      })
      
    })
  }

  initDoor() {
    if(!this.isWin){
      this.door = new Door();
      this.door.create();
      this.door.x = 30;
      this.gamePlayContainer.addChild(this.door);
      this.door.collider.on(ColliderEvent.onCollider, (collider) => {
        if(this.isWin){
          return;
        }
        this.isWin = true;
        collider = this.door.collider.children[0].name;
        if (collider === "door") {
          this.door.collider.enable = false;
          this.gamePlayContainer.visible = false;
          this.gameVictory.visible = true;
        }
      });
      
    }
  }

  initTreasure() {
    this.treasure = new Treasure();
    this.treasure.create();
    this.treasure.x = gameConstants.WIDTH - 50;
    this.treasure.y = gameConstants.HEIGHT / 2;
    this.gamePlayContainer.addChild(this.treasure);

    this.treasure.collider.on(ColliderEvent.onCollider, (collider) => {
      collider = this.treasure.collider.children[0].name;
      if(collider == "treasure"){
        this.treasure.x = this.player.x + 8;
        this.treasure.y = this.player.y + 8;
      }
      
    });
  }

  initGameVictory() {
    this.gameVictory = new GameVictoryScene();
    this.gameVictory.visible = false;
    this.addChild(this.gameVictory);
  }

  initGameOver() {
    this.gameOver = new GameOverScene();
    this.gameOver.visible = false;
    this.addChild(this.gameOver);
  }

  update(dt) {
    this.enemies.update(dt);
    this.dt += dt;

    if (this.player.healthBar.width <= 0) {
      this.player.collider.enable = false;
      this.gamePlayContainer.visible = false;
      this.gameOver.visible = true;
      } 
  }
}