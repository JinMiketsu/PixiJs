import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import { gameConstants } from "../gameConstants";

export class GameVictoryScene extends Container {
  constructor(){
    super();
    this.create();
  }

  create(){
    let textStyle = new TextStyle({
      fontSize : 48,
      fill: "0xffffff"
    })
    let text = new Text("VICTORY", textStyle);
    text.anchor.set(0.5)
    text.x = gameConstants.WIDTH / 2;
    text.y = gameConstants.HEIGHT / 2;
    this.addChild(text)
  }

 
}