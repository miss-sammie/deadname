var essays = [];


function getParagraphs(essayClass) {
  const paragraphs = document.querySelectorAll(`.${essayClass} p`);
  return Array.from(paragraphs).map(p => p.textContent);
  }


  function getAllEssays(numberOfEssays) {
  

  for (let i = 1; i <= numberOfEssays; i++) {
      const essayParagraphs = getParagraphs(`essay-${i}`);
      essays.push(essayParagraphs);
  }

  return essays;
}


// Now call the function with the number of essays you have
const allEssays = getAllEssays(12);

const essay1 = allEssays[0]
allEssays[0].title = "A Time Capsule Or A Grave"
allEssays[0].date = "October 4, 2022"

const essay2 = allEssays[1]
allEssays[1].title = "What Will You Be Like Before, What Were You Like After"
allEssays[1].date = "December 8, 2022"

const essay3 = allEssays[2]
allEssays[2].title = "About My Avatar"
allEssays[2].date = "January 12, 2023"

const essay4 = allEssays[3]
allEssays[3].title = "His And Hers"
allEssays[3].date = "January 17, 2023"

const essay5 = allEssays[4]
allEssays[4].title = "WHAT IS GOING ON HERE"
allEssays[4].date = "February 26, 2023"

const essay6 = allEssays[5]
allEssays[5].title = "Informal"
allEssays[5].date = "March 21, 2023"

const essay7 = allEssays[6]
allEssays[6].title = "Eulogy"
allEssays[6].date = "August 12, 2023"

const essay8 = allEssays[7]
allEssays[7].title = "We Are Mycelium"
allEssays[7].date = "September 24, 2023"

const essay9 = allEssays[8]
allEssays[8].title = "Obituary"
allEssays[8].date = "October 20, 2023"

const essay10 = allEssays[9]
allEssays[9].title = "What Revolution?"
allEssays[9].date = "November 15, 2023"

const essay11 = allEssays[10]
allEssays[10].title = "How Would You Hear Me?"
allEssays[10].date = "January 9, 2024"

const essay12 = allEssays[11]
allEssays[11].title = "NPNC or No Pic No Chat or Non Player Non Character"
allEssays[11].date = "June 11, 2023"


function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * (arr.length-2));
  var selectedElement = arr[randomIndex];
  //console.log("Array Length:", arr.length);
  //console.log("Random Index:", randomIndex);
  //console.log("Selected Element:", selectedElement);
  return selectedElement;
}

var currentArray = 0  
//let iterationCount = 0;
//const maxIterations = 111;

function fitTextToContainer(element) {
    let fontSize = 80; // Start with a large font size
    element.style.fontSize = fontSize + 'px';

    // Reduce the font size until the text fits within the container
    while (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    ) {
        fontSize--;
        element.style.fontSize = fontSize + 'px';
    }
}


const selectedPoems = []

function clearPoemDisplay() {
  document.getElementById('poem-display').textContent = ""
}

let isRunning = true;  // Initialize the flag to false
let iterationCount = 0;
var maxIterations = 111;
var speed = 11111;
    
function consolePoem() {
  if (!isRunning) {
    return; // Do nothing if the flag is false
}

const randomParagraphConsole = getRandomElement(allEssays[currentArray]);
const poemDisplay = document.getElementById('poem-display');
selectedParagraphs.push(randomParagraphConsole)

// Update the content of the poem-display div
poemDisplay.textContent = randomParagraphConsole;
fitTextToContainer(poemDisplay);

currentArray++
iterationCount++;

if(currentArray >= 12) {
  currentArray = 0
}

//console.log(allEssays[currentArray].title)
//console.log(randomParagraphConsole)

selectedPoems.push(randomParagraphConsole)

document.getElementById('poem-display').textContent = randomParagraphConsole

if (iterationCount >= maxIterations) {
  clearInterval(intervalId);
  console.log('Finished iterating through the essays.');
  console.log(selectedPoems)
  document.getElementById('poem-display').textContent = "Cycle Complete."
  setTimeout(clearPoemDisplay,3000)
  setTimeout(renderCollectedParagraphs,4000)
}

}

selectedParagraphs = []

function renderCollectedParagraphs() {
// Create a new container element for the collected paragraphs
const collectedParagraphsContainer = document.createElement('div');
collectedParagraphsContainer.id = 'collected-paragraphs-container';

// Create the left column for numbers
//const leftColumn = document.createElement('div');
//leftColumn.className = 'left-column';

// Create the right column for paragraphs
//const rightColumn = document.createElement('div');
//rightColumn.className = 'right-column';

selectedParagraphs.forEach((paragraph, index) => {
    // Get the essay number corresponding to the currentArray index
    const essayNumber = (index % 12)   ; // Assuming you have 11 essays (1 to 11)

    // Create a container for each row
    const row = document.createElement('div');
    row.className = 'row';

    // Create the number element for the left column
    const numberElement = document.createElement('div');
    numberElement.textContent = allEssays[essayNumber].date;

    numberElement.className = 'number-element';

    // Create the paragraph element for the right column
    const pElement = document.createElement('p');
    pElement.textContent = paragraph;


    // Append the number and paragraph to their respective columns
    row.appendChild(numberElement);
    row.appendChild(pElement);


    // Append the row to the container
    collectedParagraphsContainer.appendChild(row);
});

// Append the container to the body or another specific location
document.body.appendChild(collectedParagraphsContainer);
}


const min = 4000;
const max = 10000;
const randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;

const intervalId = setInterval(consolePoem,speed);


