import { Container, Sprite, Texture} from "pixi.js";
import { Player } from "../objects/player";
import { Door } from "../objects/door"
import { Treasure } from "../objects/treasure";
import { Lose_Con } from "../object/lose_con";
import { Movement } from "../object/movement";
import { creep } from "../objects/creep";
import { Collision } from "../collision/collisiondectect";
import { Win } from "../objects/win";
import { HpBar } from "../object/hp_bar";
import { Lose } from "../objects/lose";

export class GameScene extends Container {
    constructor() {
        super();
        this.deltaTime = 0;
        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        this.collision = new Collision();
        this.initIngame();
        this.initWinCon();
        this.initLoseCon();
        
     
    }
    initIngame(){
        let texture = Texture.from("tilemap.png");
        this.dungeon = new Sprite(texture);
        this.gameContainer.addChild(this.dungeon);

        this.initPlayer();
        this.initDoor();
        this.initTreasure();
        this.initCreep();
        this.initHpBar();
        
        
    }
   
    initPlayer(){
        this.player = new Player();
       
        this.player.x = 50;
        this.player.y = 50;
        this.gameContainer.addChild(this.player);
    }
    initDoor(){
        this.door = new Door();
       
        this.door.x = 50;
        
        this.gameContainer.addChild(this.door);
    }
    initTreasure(){
        this.treasure = new Treasure();
        this.treasure.x = 400   
        this.treasure.y = 400

        this.gameContainer.addChild(this.treasure);
       
        }

    initCreep(){
            this.creeps = new Movement();
            this.gameContainer.addChild(this.creeps);
            this.creep = new creep();
           
      }
    initGameOver(){
        this.lose_con = new Lose_Con();
        this.lose_con.visible = false;
        this.addChild(this.lose_con);


    }
    initHpBar(){
        this.HpBar = new HpBar();
        this.HpBar.x = 300;
        this.HpBar.y = 0;
        this.gameContainer.addChild(this.HpBar);

    }
    initWinCon(){
        this.win = new Win();
        this.win.x = 500
        this.win.y = 600
        this.gameContainer.addChild(this.win);
        
    }
    initLoseCon(){
        this.lose = new Lose();
        this.lose.x = 500
        this.lose.y = 600
        this.gameContainer.addChild(this.lose);
        
    }
    
    
    
    update(deltaTime) { 
        this.creeps.creeps.forEach(creep => {
            if(this.collision.collisondetect(this.player,creep)){
                this.health.width -=10;
                    if(this.health.width<=0) {
                        this.lose.x = 90;
                        this.lose.y = 30;
                        this.gameContainer.removeChild(this.creeps);
                    }
             }
        })
       
         if(this.collision.collisondetect(this.player,this.treasure)){
            this.player.velocityX = 2;
            this.player.velocityY = 2;
            this.treasure.x = this.player.x;
            this.treasure.y = this.player.y; 
            
           
         }
         if(this.collision.collisondetect(this.treasure,this.door)){
                this.win.x = 15;
                this.win.y = 30;
                
            this.gameContainer.removeChild(this.creeps);
           
         }
         
        
        
        
        this.creeps.update(deltaTime);
        this.deltaTime += deltaTime;
        
        
       
        
        
        

}}
