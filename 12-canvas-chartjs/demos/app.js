'use strict';

// array to store the objects
Goat.allGoats = [];

// keep track of all clicks
Goat.totalClicks = 0;

// track previously displayed goats
Goat.lastDisplayed = [];

// access the section element from the DOM
var sectionEl = document.getElementById('goat-section');

// access the ul element from the DOM
var ulEl = document.getElementById('results');

// array to store the names for our chart labels
var goatNames = [];

// array to store votes per goat
var goatVotes = [];

// set up the constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Goat.allGoats.push(this);
  goatNames.push(this.name);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Kissing goats', 'img/kissing-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');
new Goat('Goat with it\'s tongue out', 'img/tongue.jpg');
new Goat('Underbite goat', 'img/underbite.jpg');
new Goat('Jumping goat', 'img/jumping.jpg');
new Goat('Goatogenic', 'img/goatogenic.png');

// access the img elements from the DOM
var rightEl = document.getElementById('right');
var leftEl = document.getElementById('left');

// randomly display one of the pictures
function randomGoat() {
  // generate random indices
  var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  var randomRight = Math.floor(Math.random() * Goat.allGoats.length);

  // check to make sure each random number is unique AND not one of the previously displayed images
  // if they are the same, we need to generate new random numbers
  // Condition 1: left and right are the same
  // Condition 2: left is in the lastDisplayed array
  // Condition 3: right is in the lastDisplayed array
  while(randomLeft === randomRight || Goat.lastDisplayed.includes(randomLeft) || Goat.lastDisplayed.includes(randomRight)) {
    console.log('Duplicate was caught');
    randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
    randomRight = Math.floor(Math.random() * Goat.allGoats.length);
  }

  // set the src and alt attributes of the two images
  leftEl.src = Goat.allGoats[randomLeft].filepath;
  leftEl.alt = Goat.allGoats[randomLeft].name;

  rightEl.src = Goat.allGoats[randomRight].filepath;
  rightEl.alt = Goat.allGoats[randomRight].name;

  // increment the number of times each image was shown
  Goat.allGoats[randomLeft].timesDisplayed += 1;
  Goat.allGoats[randomRight].timesDisplayed += 1;

  // keep track of these two as the previously displayed goats
  // APPROACH 1:
  // Goat.lastDisplayed = [];
  // Goat.lastDisplayed.push(randomLeft);
  // Goat.lastDisplayed.unshift(randomRight);

  // APPROACH 2:
  Goat.lastDisplayed[0] = randomLeft;
  Goat.lastDisplayed[1] = randomRight;
}

// define our handleClick function
function handleClick(e) {
  // track the total number of clicks
  Goat.totalClicks += 1;

  // console.log(e.target.alt);
  // count the clicks on a specific image
  for(var i in Goat.allGoats) {
    if(e.target.alt === Goat.allGoats[i].name) {
      Goat.allGoats[i].votes += 1;
    }
  }

  if(Goat.totalClicks > 9) {
    sectionEl.removeEventListener('click', handleClick);
    showResults();
    updateVotes();
    renderChart();
  } else {
    randomGoat();
  }
}

function showResults() {
  for(var i in Goat.allGoats) {
    var liEl = document.createElement('li');
    liEl.textContent = Goat.allGoats[i].name + ' has ' + Goat.allGoats[i].votes + ' votes and was displayed ' + Goat.allGoats[i].timesDisplayed + ' times.';
    ulEl.appendChild(liEl);
  }
}

// function to update the number of votes per goat
function updateVotes(){
  for(var i in Goat.allGoats) {
    goatVotes[i] = Goat.allGoats[i].votes;
  }
}

// function to render the chart on the screen
function renderChart(){
  var context = document.getElementById('chart-placeholder').getContext('2d');

  var chartColors = ['#E37222', 'red'];

  var goatChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: 'Votes Per Goat',
        data: goatVotes,
        backgroundColors: chartColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

sectionEl.addEventListener('click', handleClick);

// render two images on page load
randomGoat();