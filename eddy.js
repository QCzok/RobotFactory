const express = require('express')
const app = express()
const port = 3000

let robot = {
    posX: 0,
    posY: 0,
    heading: "NORTH",
}

turnRight = () => {
    switch(robot.heading){
        case "NORTH": robot.heading = "EAST"; break;
        case "EAST": robot.heading = "SOUTH"; break;
        case "SOUTH": robot.heading = "WEST"; break;
        case "WEST": robot.heading = "NORTH"; break;
        default: null;
    }
}

turnLeft = () => {
    switch(robot.heading){
        case "NORTH": robot.heading = "WEST"; break;
        case "EAST": robot.heading = "NORTH"; break;
        case "SOUTH": robot.heading = "EAST"; break;
        case "WEST": robot.heading = "SOUTH"; break;
        default: null;
    }
}

moveForward = () => {
    switch(robot.heading){
        case "NORTH": robot.posY++; break;
        case "EAST": robot.posX++; break;
        case "SOUTH": robot.posY--; break;
        case "WEST": robot.posX--; break;
        default: null;
    }
}

app.get('/', (req, res) => {
  res.send(robot);
})

app.post('/right', (req, res) => {
    turnRight();
    res.send(robot);
});

app.post('/left', (req, res) => {
    turnLeft();
    res.send(robot);
});

app.post('/move', (req, res) => {
    moveForward();
    res.send(robot);
});

app.listen(port, () => {
  console.log(`Eddy is listening for commands at http://localhost:${port}`)
});