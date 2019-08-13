const len = 784;
const totalData = 1000;

const GUITAR = 0;
const POTATO = 1;
const TRUCK = 2;

let guitarsData;
let potatosData;
let trucksData;

let potatos = {};
let trucks = {};
let guitars = {};

let nn;

function preload() {
  guitarsData = loadBytes('data/guitars1000.bin');
  potatosData = loadBytes('data/potatos1000.bin');
  trucksData = loadBytes('data/trucks1000.bin');
}


function setup() {
  createCanvas(280, 280);
  background(255);

  // Preparing the data
  prepareData(guitars, guitarsData, GUITAR);
  prepareData(potatos, potatosData, POTATO);
  prepareData(trucks, trucksData, TRUCK);

  // Making the neural network
  nn = new NeuralNetwork(784, 64, 3);

  // Randomizing the data
  let training = [];
  training = training.concat(trucks.training);
  training = training.concat(guitars.training);
  training = training.concat(potatos.training);

  let testing = [];

  testing = testing.concat(guitars.testing);
  testing = testing.concat(trucks.testing);
  testing = testing.concat(potatos.testing);

  let trainButton = select('#Train');
  let epochCounter = 0;
  trainButton.mousePressed(function() {
    trainEpoch(training);
    epochCounter++;
    console.log("Epoch: " + epochCounter);
  });

  let testButton = select('#Test');
  testButton.mousePressed(function() {
    let percent = testAll(testing);
    console.log("Percent: " + nf(percent, 2, 2) + "%");
  });

  let guessButton = select('#Guess');
  guessButton.mousePressed(function() {
    let inputs = [];
    let img = get();
    img.resize(28, 28);
    img.loadPixels();
    for (let i = 0; i < len; i++) {
      let bright = img.pixels[i * 4];
      inputs[i] = (255 - bright) / 255.0;
    }

    let guess = nn.predict(inputs);
    // console.log(guess);
    let m = max(guess);
    let classification = guess.indexOf(m);
    if (classification === GUITAR) {
      console.log("guitar");
    } else if (classification === TRUCK) {
      console.log("truck");
    } else if (classification === POTATO) {
      console.log("potato");}


    //image(img, 0, 0);
  });

  let clearButton = select('#Clear');
  clearButton.mousePressed(function() {
    background(255);
  });
  // for (let i = 1; i < 6; i++) {
  //   trainEpoch(training);
  //   console.log("Epoch: " + i);
  //   let percent = testAll(testing);
  //   console.log("% Correct: " + percent);
  // }
}


function draw() {
  strokeWeight(8);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
