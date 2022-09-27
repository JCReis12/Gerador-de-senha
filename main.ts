let _1: Image = null
let _2: Image = null
let _3: Image = null
let _4: Image = null
let A = 0
let B = 0
let C = 0
let D = 0
input.onButtonPressed(Button.A, function () {
    A = randint(1, 5)
    B = randint(1, 5)
    C = randint(1, 5)
    D = randint(1, 5)
    basic.showString("SENHA GERADA")
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    _1.scrollImage(1, 200)
    _2.scrollImage(1, 200)
    _3.scrollImage(1, 200)
    _4.scrollImage(1, 200)
})
basic.forever(function () {
    if (A == 1) {
        _1 = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (A == 2) {
        _1 = images.createImage(`
            . # # . .
            . # . # .
            . # # # .
            . # . # .
            . # # . .
            `)
    }
    if (A == 3) {
        _1 = images.createImage(`
            . # # # .
            . # . # .
            . # . . .
            . # . # .
            . # # # .
            `)
    }
    if (A == 4) {
        _1 = images.createImage(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
    }
    if (A == 5) {
        _1 = images.createImage(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (C == 1) {
        _3 = images.createImage(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # . . .
            `)
    }
    if (C == 2) {
        _3 = images.createImage(`
            . # # # .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    if (C == 3) {
        _3 = images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (C == 4) {
        _3 = images.createImage(`
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (C == 5) {
        _3 = images.createImage(`
            . # # # .
            . . # . .
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
basic.forever(function () {
    if (B == 1) {
        _2 = images.createImage(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (B == 2) {
        _1 = images.createImage(`
            . # # # .
            . # . # .
            . . # # .
            . # . . .
            . # # # .
            `)
    }
    if (B == 3) {
        _2 = images.createImage(`
            . # # # .
            . # . # .
            . . # # .
            . # . # .
            . # # # .
            `)
    }
    if (B == 4) {
        _2 = images.createImage(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (B == 5) {
        _2 = images.createImage(`
            . # # # .
            . # . . .
            . # # . .
            . . . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (D == 1) {
        _4 = images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (D == 2) {
        _4 = images.createImage(`
            . # # # .
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (D == 3) {
        _4 = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (D == 4) {
        _4 = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (D == 5) {
        _4 = images.createImage(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
})
