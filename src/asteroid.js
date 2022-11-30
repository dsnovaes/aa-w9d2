// Spacerock. It inherits from MovingObject.
const MovingObject = require("./moving_object.js");
const Util = require('./util.js');

class Asteroid {
    COLOR = 'green';
    RADIUS = 25;
    
    constructor(object) {
        this.pos = object.pos;
        new MovingObject({
            pos: this.pos,
            vel:  Util.randomVec(12),
            radius: Asteroid.RADIUS,
            color: Asteroid.COLOR
        });
        Util.thisIsATest()
        // super({
        //     pos: this.pos,
        //     vel:  Util.randomVec(12), 
        //     radius: this.RADIUS, 
        //     color: this.COLOR
        // })
    }
    
}  

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;