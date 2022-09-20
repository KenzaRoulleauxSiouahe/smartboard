input.onButtonPressed(Button.A, function () {
    basic.showString("BUS49")
    basic.showNumber(randint(0, 60))
    basic.showString("MIN")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("BUS36")
    basic.showNumber(randint(0, 60))
    basic.showString("MIN")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("BUS86")
    basic.showNumber(randint(0, 60))
    basic.showString("MIN")
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
