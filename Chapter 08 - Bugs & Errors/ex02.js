const box = new class
{
    locked = true;
    #content = [];
    unlock()
    {
        this.locked = false;
    }
    lock()
    {
        this.locked = true;
    }
    get content()
    {
        if (this.locked)
            throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(body)
{
    let wasLocked = box.locked;

    if (!wasLocked)
        return body();

    else
    {
        box.unlock();
        try
        {
            return body();
        }
        finally
        {
            box.lock();
        }
    }
}

withBoxUnlocked(() => {box.content.push("gold piece");});

try
{
    withBoxUnlocked(() => {throw new Error("Pirates on the horizon! Abort!");});
}
catch (e)
{
    console.log("Error raised: " + e);
}

console.log(box.locked);