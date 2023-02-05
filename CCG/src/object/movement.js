import { Container } from "pixi.js";
import { Creep } from "./creep";
export class Movement extends Container{

    constructor(){
        super();
        this.creep = [];
        this.deltaTime = 1;
        this.spam();
    }
    spam(){
        this.creep = new Creep;
        this.addChild(this.creep);
        for(let i = 0; i < 3; i++){
          let creepX = 150 + i*100;
          let creepY = 50+Math.floor( Math.random()*81+10) 
          let creep = this.creep.create(creepX, creepY);
          this.creep.push(this.creep);
          
        }
      }
      move(){
        this.creep.forEach((creep) => {
          creep.y += creep.velocityY;
          
          if(creep.y >= 450 || creep.y <= 30){
            creep.velocityY *= -1;
          }
        })
      }
      update(deltaTime){
       this.move();
       
        
      }
    
    
    
    
}