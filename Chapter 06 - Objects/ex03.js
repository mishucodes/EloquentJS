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

    [Symbol.iterator]()
    {
        let index = 0;
        let group = this;
        return{next()
            {
                if (index < group.set.length)
                    return { value: group.set[index++], done: false };
                else
                    return { done: true };
            }
        };
    }
}


let group = Group.from([1,2,3]);
for (let value of group)
  console.log(value);





//Author's version:

class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    } else {
      let result = {value: this.#members[this.#position],
                    done: false};
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c