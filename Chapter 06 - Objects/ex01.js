class Vector
{
    constructor(x,y)
    {
        this.x = x,
        this.y = y
    }

    plus(other)
    {
        let i = other.x + this.x;
        let j = other.y + this.y;
        return new Vector(i,j);
    }

    minus(other)
    {
        let i = this.x - other.x;
        let j = this.y - other.y;
        return new Vector(i,j);
    }

    //length = √(x² + y²)
    get length()
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);