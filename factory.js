const express = require('express')
const app = express()
const port = 3000

let robotFactory = [];

createRobot = () => {
    robotFactory.push({
        id: robotFactory.length,
        posX: 0,
        posY: 0,
        heading: "NORTH",
    })
}

turnRight = (id) => {
    switch(robotFactory[id].heading){
        case "NORTH": robotFactory[id].heading = "EAST"; break;
        case "EAST": robotFactory[id].heading = "SOUTH"; break;
        case "SOUTH": robotFactory[id].heading = "WEST"; break;
        case "WEST": robotFactory[id].heading = "NORTH"; break;
        default: null;
    }
}

turnLeft = (id) => {
    switch(robotFactory[id].heading){
        case "NORTH": robotFactory[id].heading = "WEST"; break;
        case "EAST": robotFactory[id].heading = "NORTH"; break;
        case "SOUTH": robotFactory[id].heading = "EAST"; break;
        case "WEST": robotFactory[id].heading = "SOUTH"; break;
        default: null;
    }
}

moveForward = (id) => {
    switch(robotFactory[id].heading){
        case "NORTH": robotFactory[id].posY++; break;
        case "EAST": robotFactory[id].posX++; break;
        case "SOUTH": robotFactory[id].posY--; break;
        case "WEST": robotFactory[id].posX--; break;
        default: null;
    }
}

app.get('/', (req, res) => {
  res.send(robotFactory);
})

app.put('/create', (req, res) => {
    createRobot();
    res.send(robotFactory);
});

app.post('/right', (req, res) => {
    robotFactory.map(robot => {
        console.log(robot);
        turnRight(robot.id);
    })
    res.send(robotFactory);
});

app.post('/left', (req, res) => {
    robotFactory.map(robot => {
        console.log(robot);
        turnLeft(robot.id);
    })
    res.send(robotFactory);
});

app.post('/move', (req, res) => {
    robotFactory.map(robot => {
        console.log(robot);
        moveForward(robot.id);
    })
    res.send(robotFactory);
});

app.listen(port, () => {
  console.log(`Eddy is listening for commands at http://localhost:${port}`)
});