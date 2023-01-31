function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 score:" + player_1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 score:" + player_2)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds:" + rounds)
}
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    player_1 = 0
    player_2 = 0
    ties = 0
    rounds = 0
    OLED.writeStringNewLine("shall we play a game?")
    basic.pause(2000)
    update_scoreboard()
}
let rounds = 0
let ties = 0
let player_2 = 0
let player_1 = 0
reset()
basic.forever(function () {
	
})
