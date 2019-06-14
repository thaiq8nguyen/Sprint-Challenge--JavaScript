// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMakerClass {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;    
    }

    get volume() {
        return this.length * this.width * this.height;    
    }

    get surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);    
    }

}

const cuboidAttributes = {length: 4, width: 5, height: 5};
const cuboidClass = new CuboidMakerClass(cuboidAttributes);

console.log(`Cuboid volume: ${cuboidClass.volume}`);
console.log(`Cuboid surface area: ${cuboidClass.surfaceArea}`);

/*STRETCH*/

class CubeMaker extends CuboidMakerClass {
    constructor(edge) {
        super(edge);
        this.edge = edge;
         
    }

    get volume() {
        return Math.pow(this.edge, 3);
    }

    get surfaceArea() {
        return 6 * Math.pow(this.edge, 2);
    }


}

const edge = 5;
const cube = new CubeMaker(edge);
console.log(`Cube volume: ${cube.volume}`);
console.log(`Cube surface area: ${cube.surfaceArea}`);
