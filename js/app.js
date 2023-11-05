//@ts-check
//data
// I cyan
// O yellow
// T pink
// J blue
// L orange
// S green
// Z red

// Tetris is primarily composed of a field of play in which pieces of different geometric forms, called "tetrominoes", descend from the top of the field.
// leftmost part of piece will always spawn
// until they touch the bottom of the field or land on a piece that had been placed before it.
// - the player can move the pieces laterally
// - the player can rotate them
// - The player can accelerate pieces
// When a line is completed, it disappears, and the blocks placed above fall one rank.
// Completing lines grants points
// and accumulating a certain number of points or cleared lines moves the player up a level, which increases the number of points granted per completed line.
//
// In most versions, the speed of the falling pieces increases with each level, leaving the player with less time to think about the placement.[3] The player can clear multiple lines at once, which can earn bonus points in some versions.[2] It is possible to complete up to four lines simultaneously with the use of the I-shaped tetromino; this move is called a "Tetris", and is the basis of the game's title.[4]: 16
//
// If the player cannot make the blocks disappear quickly enough, the field will start to fill; when the pieces reach the top of the field and prevent the arrival of additional pieces, the game ends.[3] At the end of each game, the player receives a score based on the number of lines that have been completed.[4]: 16  The game never ends with the player's victory. The player can complete only as many lines as possible, before an inevitable loss.[2]
const field = []
let count
let gameId
let speed = 1000
let piece
let queue = []

//elements
const fieldDiv = document.querySelector('#field')
//utils
/**
 *
 * @param {array} arr
 * @param {number} rows
 * @param {number} columns
 */
const buildGrid = (arr, rows, columns) => {
  for (let i = 0; i < rows; i++) {
    arr.push([])
  }
  arr.forEach((el) => {
    for (let i = 0; i < columns; i++) {
      el.push('')
    }
  })
  console.log(arr)
}

const appendField = (field) => {
  field.forEach((arr) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add(`row`)
    newDiv.classList.add(`row-${field.indexOf(arr)}`)
    fieldDiv?.appendChild(newDiv)
    arr.forEach((el) => {
      const newerDiv = document.createElement('div')
      newerDiv.classList.add(`square`)
      newerDiv.classList.add(`row-${field.indexOf(arr)}`)
      newerDiv.classList.add(`col-${arr.indexOf(el)}`)
      newDiv?.appendChild(newerDiv)
    })
})
}
//listeners

//other functions

const spawnPiece = () => {
  field[0][3] = 'i'
  field[0][4] = 'i'
  field[0][5] = 'i'
  field[0][6] = 'i'
}

const updateRows = (field) => {
    const rowDivs = document.querySelectorAll('.row')
    console.log(rowDivs)
    let updatedSquares = []
    rowDivs.forEach(row => {
        row.childNodes.forEach(square => {
            // square.classList.add(`${field[i][]}`)
        })
    })
    return updatedSquares
}

const render = (updatedSquares) => {
const squareDivs = document.querySelectorAll('.square')
squareDivs.forEach(square => {
    if(updatedSquares)
    square.innerHTML
})
console.dir(squareDivs)
}

const runGame = () => {
  if (!piece) {
    spawnPiece()
  }
  render(updateRows(field))
}

//init
const init = () => {
  buildGrid(field, 21, 10)
  appendField(field)
  spawnPiece()
  render(updateRows(field))

  console.log(field)
//   gameId = setInterval(runGame, speed)
}

init()
