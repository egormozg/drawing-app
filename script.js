const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let sizeText = document.getElementById('size')
let size = +sizeText.textContent
let color = document.getElementById('color')
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2 
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color.value
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color.value
    ctx.lineWidth = size * 2
    ctx.stroke()
}

const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const clear = document.getElementById('clear')

decrease.addEventListener('click', () => {
        size -= 2
        sizeText.innerText = `${size}`

        if (size < 2) {
            size = 2
            sizeText.innerText = '2'
        }
})

increase.addEventListener('click', () => {
        size += 2
        sizeText.innerText = `${size}`

        if (size > 50) {
            size = 50
            sizeText.innerText = '50'
        }
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  })