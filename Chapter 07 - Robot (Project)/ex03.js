class PGroup
{
    set;
    constructor(set)
    {
        this.set = set;
    }

    add(x)
    {
        if (this.has(x))
            return this;
        return new PGroup([...this.set, x]);
    }
    has(x)
    {
        return this.set.includes(x);
    }
    delete(x)
    {
        if (!this.has(x))
            return this;
        return new PGroup(this.set.filter(v => v !== x));
    }

    static from(collection)
    {
        let group = PGroup.empty;
        for (let value of collection)
            group = group.add(value);
        return group;
    }
    static empty = new PGroup([]);
}

PGroup.empty = new PGroup([]);



let a = PGroup.empty.add(10);
let b = a.add(20);
let c = b.delete(10);

console.log(a.has(10)); // true
console.log(b.has(20)); // true
console.log(c.has(10)); // false
console.log(a.has(20)); // false