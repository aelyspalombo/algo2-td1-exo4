input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        led.unplot(x, y)
        led.plot(x + 1, y)
    } else {
        led.unplot(x, y)
        y = 0
        x = 4
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x != 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    } else {
        led.unplot(x, y)
        y = 0
        x = 0
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = randint(0, 4)
y = randint(0, 4)
led.plot(x, y)
