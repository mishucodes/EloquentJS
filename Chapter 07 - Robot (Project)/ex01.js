//A Robot Comparison Program:



//Village Data
const roads =
[
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//Converting it into useful data:
function buildGraph(edges)
{
  let graph = Object.create(null);
  function addEdge(from, to)
  {
    if (from in graph)
      graph[from].push(to);
    else
      graph[from] = [to];
  }
  for (let [from, to] of edges.map(r => r.split("-"))){
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);


//Universe Creator & Robot Mover:
class VillageState
{
  constructor(place, parcels)
  {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination)
  {
    if (!roadGraph[this.place].includes(destination))
      return this;
    else
    {
        let parcels = this.parcels.map(p =>
        {
            if (p.place != this.place)
                return p;
            return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}


//Robot Runner:
function runRobot(state, robot, memory)
{
    let turn;
    for (turn = 0;; turn++)
    {
        if (state.parcels.length == 0)
        {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
  }
  return turn;
}

//Random Universe Generator:
VillageState.random = function(parcelCount = 5)
{
    let parcels = [];
    for (let i = 0; i < parcelCount; i++)
    {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do
            place = randomPick(Object.keys(roadGraph));
        while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};






//Different kinds of Robots:


// 01. Random Moving Robot:
function randomPick(array)
{
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state)
{
  return {direction: randomPick(roadGraph[state.place])};
}



// 02. Uniform Route Robot:

//A uniform route for robot:
const mailRoute =
[
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

//The Uniform Robot:
function routeRobot(state, memory)
{
  if (memory.length == 0)
    memory = mailRoute;
  return {direction: memory[0], memory: memory.slice(1)};
}


//Finding the smallest Route:
function findRoute(graph, from, to)
{
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++)
    {
        let {at, route} = work[i];
        for (let place of graph[at])
        {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place))
                work.push({at: place, route: route.concat(place)});
        }
    }
}

// 03. Robot running on a given path:
function goalOrientedRobot({place, parcels}, route)
{
    if (route.length == 0)
    {
        let parcel = parcels[0];
        if (parcel.place != place)
        route = findRoute(roadGraph, place, parcel.place);
        else
        route = findRoute(roadGraph, place, parcel.address);
    }
  return {direction: route[0], memory: route.slice(1)};
}




// 1. Run the random robot
// runRobot(VillageState.random(), randomRobot, []);

// 2. Run the route-following robot
// runRobot(VillageState.random(), routeRobot, []);

// 3. Run the goal-oriented robot
// runRobot(VillageState.random(), goalOrientedRobot, []);






function compareRobots(robotOne, memoryOne, robotTwo, memoryTwo, numberOfTests = 100)
{
    let total1 = 0, total2 = 0;
    for(let i = 0; i < numberOfTests; i++)
    {
        let turns1 = runRobotSilent(VillageState.random(), robotOne, memoryOne);
        let turns2 = runRobotSilent(VillageState.random(), robotTwo, memoryTwo);
        total1 += turns1;
        total2 += turns2;
    }
    console.log(`Robot One average: ${total1 / numberOfTests} turns`);
    console.log(`Robot Two average: ${total2 / numberOfTests} turns`);
}

//Helper Function:
function runRobotSilent(state, robot, memory)
{
    let turn;
    for (turn = 0;; turn++)
    {
        if (state.parcels.length == 0)
        {
            //comment this log for complete silence:
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
  }
  return turn;
}

compareRobots(randomRobot, [], routeRobot, [], 5);





//Author's Version:
function countSteps(state, robot, memory) {
  for (let steps = 0;; steps++) {
    if (state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2)
{
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++)
    {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
}
compareRobots(routeRobot, [], goalOrientedRobot, []);