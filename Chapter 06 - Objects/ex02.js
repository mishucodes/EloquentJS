class Group
{
    constructor()
    {
        this.set = [];
    }

    add(x)
    {
        if(!this.has(x))
            this.set.push(x);
    }
    has(x)
    {
        return this.set.includes(x);
    }
    delete(x)
    {
        this.set = this.set.filter(v => v !== x);
    }

    static from(collection)
    {
        let group = new Group;
        for (let value of collection)
            group.add(value);
        return group;
    }
}

let one = new Group;
console.log(one);
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));