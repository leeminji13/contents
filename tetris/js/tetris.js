const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#dbdbdb";
console.log(ctx)

const borderwidth = 5;
const blockSize = 30;

for(x = 0; x < 12; x++){
    for(y = 0; y < 24; y++){
        ctx.fillRect(
            borderwidth * x + blockSize * x,
            borderwidth * y + blockSize * y,
            blockSize,
            blockSize
        )
    }
}

const widthBlockCount = 10;
const heightBlockCount = 25;

let stackedBlock = new Array(widthBlockCount);
let controlBlock = new Array(widthBlockCount);

initBlockArray(stackedBlock);
initBlockArray(controlBlock);

function initBlockArray(blockArray) {
  for (let x = 0; x < widthBlockCount; x++) {
    blockArray[x] = new Array(heightBlockCount);
  }

  for (let x = 0; x < widthBlockCount; x++) {
    for (let y = 0; y < heightBlockCount; y++) {
      blockArray[x][y] = false;
    }
  }
}

function drawBlocks() {
    for (let x = 0; x < widthBlockCount; x++) {
      for (let y = 0; y < heightBlockCount; y++) {
        if (stackedBlock[x][y]) {
          ctx.fillStyle = "black";
        } else {
          ctx.fillStyle = "gray";
        }
  
        if (controlBlock[x][y]) {
          ctx.fillStyle = "blue";
        }
  
        ctx.fillRect(
          borderWidth * x + blockSize * x,
          borderWidth * y + blockSize * y,
          blockSize,
          blockSize
        );
      }
    }
  }

let testButtonOn = false;
let timeId = null;

function onClickTestButton() {
  if (testButtonOn) {
    clearInterval(timeId);
  } else {
    timeId = setInterval(flowGravity, 300);
  }
  testButtonOn = !testButtonOn;
}

function flowGravity() {
  let collisionCheckTmpArray = copyBlockArray(controlBlock);
  if (isCollided(collisionCheckTmpArray, stackedBlock)) {
    addBlocksToStackedArray(controlBlock, stackedBlock);
    addNewControlBlock(controlBlock);
  } else {
    controlBlock = collisionCheckTmpArray;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBlocks();
}

//ㅁㅁㅁㅁ
function addTypeOneBlock(controlBlocks){
    controlBlocks[4][0] = true;
    controlBlocks[5][0] = true;
    controlBlocks[6][0] = true;
    controlBlocks[7][0] = true;
}

// ㅁㅁㅁ
//   ㅁ
function addTypeTwoBlock(controlBlocks) {
    controlBlocks[4][0] = true;
    controlBlocks[5][0] = true;
    controlBlocks[5][1] = true;
    controlBlocks[6][0] = true;
}

// ㅁㅁ
// ㅁㅁ
function addTypeThreeBlock(controlBlocks) {
    controlBlocks[4][0] = true;
    controlBlocks[4][1] = true;
    controlBlocks[5][0] = true;
    controlBlocks[5][1] = true;
}

// ㅁㅁ
//   ㅁㅁ
function addTypeFourBlock(controlBlocks) {
    controlBlocks[4][0] = true;
    controlBlocks[5][0] = true;
    controlBlocks[5][1] = true;
    controlBlocks[6][1] = true;
}
  
//   ㅁㅁ
// ㅁㅁ
function addTypeFourBlock(controlBlocks) {
    controlBlocks[4][1] = true;
    controlBlocks[5][0] = true;
    controlBlocks[5][1] = true;
    controlBlocks[6][0] = true;
}
  
// ㅁㅁㅁ
//     ㅁ
function addTypeFiveBlock(controlBlocks) {
    controlBlocks[4][0] = true;
    controlBlocks[5][0] = true;
    controlBlocks[6][0] = true;
    controlBlocks[6][1] = true;
}

//   ㅁㅁㅁ
//   ㅁ
function addTypeSixBlock(controlBlocks) {
    controlBlocks[4][0] = true;
    controlBlocks[4][1] = true;
    controlBlocks[5][0] = true;
    controlBlocks[6][0] = true;
}
function addNewControlBlock(controlBlocks) {
    clearBlockArray(controlBlocks);
    let type = Math.floor(Math.random() * 7 + 1);
  
    switch (type) {
      case 1:
        addTypeOneBlock();
        break;
      case 2:
        addTypeTwoBlock();
        break;
      case 3:
        addTypeThreeBlock();
        break;
      case 4:
        addTypeFourBlock();
        break;
      case 5:
        addTypeFiveBlock();
        break;
      case 6:
        addTypeSixBlock();
        break;
      case 7:
        addTypeSevenBlock();
        break;
    }
  }