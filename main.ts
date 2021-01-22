let Info = ""
basic.showIcon(IconNames.Heart)
let Gent = 0
radio.setGroup(21)
DFRobotMaqueenPlus.I2CInit()
huskylens.initI2c()
huskylens.forgetLearn()
huskylens.clearOSD()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    Info = DFRobotMaqueenPlus.readVersion()
    Gent = huskylens.getBox(HUSKYLENSResultType_t.HUSKYLENSResultBlock)
    radio.sendString(Info)
    radio.sendNumber(Gent)
})
basic.forever(function () {
    huskylens.request()
    basic.showNumber(Gent)
})
