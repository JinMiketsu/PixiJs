import { Container, Sprite, Text, TextStyle, Texture } from "pixi.js";
import { gameConstants } from "../gameConstants";

export class GameOverScene extends Container {
  constructor() {
    super();
    this.create();
  }

  create() {
    let textStyle = new TextStyle({
      fontSize: 48,
      fill: "0xffffff",
    });
    let text = new Text("GAME OVER", textStyle);
    text.anchor.set(0.5);
    text.x = gameConstants.WIDTH / 2;
    text.y = gameConstants.HEIGHT / 2;
    this.addChild(text);
  }

}
