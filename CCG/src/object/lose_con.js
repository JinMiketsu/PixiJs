import { Container, Sprite, Texture} from "pixi.js";

export class Lose_Con extends Container {
    constructor(){
        super();
        this.create();
    }


    create(){
        const texture = Texture.from("lose.png")
        this.lose_con = new Sprite(texture);
        this.addChild(this.lose_con);
    }
}