const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// Variables of Data
let backgroundImage = new Image()
let kidImage = new Image()
let treeImage = new Image()
let rabbitImage = new Image()
let speechBubble = new Image()

// Variables for Kid
let kidX = 250
let kidY = 250
let kidWidth = 110
let kidHeight = 220
let kidSpeech = 'Hello, How are you?'
let kidSpeechWidth = 150
let kidSpeechHeight = 150

//  bounderies
let kidBoundryStart = 250
let kidBoundryEnd = 550
let kidFlag = true

// Variables for Rabbit
let rabbitX = 1000
let rabbitY = 310
let rabbitWidth = 150
let rabbitHeight = 170
let rabbitSpeech = 'Hi, I am Fine.'
let rabbitSpeechWidth = 150
let rabbitSpeechHeight = 150
let rabbitFlag = true

//
//  bounderies
let rabbitBoundryStart = 700
let rabbitBoundryEnd = 1000
let rabbitCount = 20

// bubble show up
let bubbleFlag = false

// Load Images
backgroundImage.src = 'background.jpg'
kidImage.src = 'kid.png'
treeImage.src = 'tree.png'
rabbitImage.src = 'rabbit.png'
speechBubble.src = 'speechBubble.png'

function drawTree() {
  // drawing Tree Image
  ctx.drawImage(treeImage, 0, 120, 300, 500)
  let speechBubbleTreeX = 100
  let speechBubbleTreeY = 100
  // make rectangle
  ctx.fillStyle = 'aliceblue'
  ctx.drawImage(speechBubble, speechBubbleTreeX, speechBubbleTreeY, 220, 90)
  // text
  ctx.fillStyle = 'black'
  ctx.font = '16px Arial'
  ctx.fillText(
    'I give oxygen to living things',
    speechBubbleTreeX + 40,
    speechBubbleTreeY + 30,
    140,
    40
  )
}
function drawKid() {
  ctx.drawImage(kidImage, kidX, kidY, kidWidth, kidHeight)
}
function drawRabbit() {
  ctx.drawImage(rabbitImage, rabbitX, rabbitY, rabbitWidth, rabbitHeight)
}
// draw function
function draw() {
  console.log(ctx)
  // drawing background Image
  ctx.drawImage(backgroundImage, 0, 0, 1400, 700)
  drawTree()

  // Drawing Kid Character
  drawKid()
  // Drawing Rabit Character
  drawRabbit()

  //   // Drawing Bubble Speech

  // Loop , Moving Character
  if (bubbleFlag) {
    ctx.fillStyle = 'black'
    ctx.font = '16px Arial'
    ctx.drawImage(speechBubble, kidBoundryEnd + 30, kidY - 60, 250, 90)
    ctx.fillText(kidSpeech, kidBoundryEnd + 80, kidY - 30, 250, 90)
    ctx.drawImage(speechBubble, rabbitBoundryStart + 50, rabbitY - 50, 250, 90)
    ctx.fillText(rabbitSpeech, rabbitBoundryStart + 120, rabbitY - 15, 250, 90)
  } else {
    if (kidFlag) {
      kidX += 5
      if (kidX > kidBoundryEnd) {
        bubbleFlag = true

        setTimeout(() => {
          bubbleFlag = false
        }, 2000)
        kidFlag = false
      }
    } else {
      kidX -= 5
      if (kidX < kidBoundryStart) {
        kidFlag = true
      }
    }
    //  rabbit move
    if (rabbitFlag) {
      rabbitX -= 5
      if (rabbitX < rabbitBoundryStart) {
        rabbitFlag = false
      }
    } else {
      rabbitX += 5
      if (rabbitX > rabbitBoundryEnd) {
        rabbitFlag = true
      }
    }
  }
}

// animation loop
setInterval(draw, 50)
