input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        
        . # # # .
        # . . . #
        `)
})
basic.forever(function () {
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(4, 0)
    led.plot(3, 0)
    led.plot(4, 1)
    led.plot(3, 1)
})
