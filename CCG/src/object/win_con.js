import { Container, Sprite, Texture} from "pixi.js";

export class Win extends Container {
    constructor(){
        super();
        this.create();
    }


    create(){
        const texture = Texture.from("youwin.png")
        this.win = new Sprite(texture);
        this.addChild(this.win);
    }
}