let font
let graphic

function preload() {
    font = loadFont("/fonts/spacegrotesk-medium.otf")
}
function setup () {
    createCanvas(1200, 600)

    graphic = createGraphics(1200, 800)
    graphic.textFont(font)
    graphic.fill("#ffffff")    
    graphic.textSize(300)
    graphic.textAlign(CENTER, CENTER)

    graphic.text("vostok", 600, 300)
}

function draw () {
    background("#000000")

    const tileSize = 30

    for (let y = 0; y < 20; y = y + 1) {

        let position = winMouseX / windowWidth
        position = easeInOutCubic(position)

        const sx = 0
        const sy = y * tileSize + position
        const sw = 1200
        const sh = tileSize * position + (600 - tileSize) * (1 - position)

        const dx = 0
        const dy = y * tileSize
        const dw = 1200
        const dh = tileSize


        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }


}
