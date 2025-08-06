class MultiplicationUnitFailure extends Error {}


function primitiveMultiply(x,y)
{
    //if(bad result)
        throw new MultiplicationUnitFailure("80% Failure");
}


function retry(x,y)
{
    for(;;)
    {
        try
        {
            return primitiveMultiply(x,y);
        }
        catch(error)
        {
            if(error instanceof MultiplicationUnitFailure)
                ;
            else
                throw error;
        }
    }
}