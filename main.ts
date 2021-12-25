input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # #
        . # # # #
        . # # # .
        `)
})
basic.showString("Sus")
basic.pause(1000)
basic.clearScreen()
