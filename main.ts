input.onButtonPressed(Button.A, function () {
    basic.showString("BUS49")
    basic.showString("" + randint(0, 60) + "MIN")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("BUS36")
    basic.showString("" + randint(0, 60) + "MIN")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("BUS86")
    basic.showString("" + randint(0, 60) + "MIN")
})
basic.showString("BUS TIMER")
basic.clearScreen()
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
