/**
 * Use the VARIABLE.defl=VALUE notation to specify
 * default argument values.
 */

function _7seg(num: number) {
    return [
        "1111110",
        "0110000",
        "1101101",
        "1111001",
        "0110011",
        "1011011",
        "1111101",
        "1110000",
        "1111111",
        "1111011"
    ][num]
}
let _7SegI = 0
let _7SegII = 0
let _7SegImg: Image = null

//% color="#AA278D"
namespace MyRuneGenerator {
    //% block
    export function GenerateRune(Col: number, Inverted: boolean) {
        _7SegImg = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
        _7SegII = 0
        for (let index = 0; index < 4; index++) {
            _7SegI = 0
            for (let value of _7seg(randint(0, 9))) {
                if ((value == "0") == Inverted) {
                    _7SegImg.drawLine([
                        0,
                        2,
                        2,
                        2,
                        0,
                        0,
                        0
                    ][_7SegI] + _7SegII % 12, [
                        0,
                        0,
                        2,
                        4,
                        4,
                        2,
                        2
                    ][_7SegI] + Math.floor(_7SegII / 12) * 6, [
                        2,
                        2,
                        2,
                        0,
                        0,
                        0,
                        2
                    ][_7SegI] + _7SegII % 12, [
                        0,
                        2,
                        4,
                        4,
                        2,
                        0,
                        2
                    ][_7SegI] + Math.floor(_7SegII / 12) * 6, Col)
                }
                _7SegI += 1
            }
            _7SegII += 6
        }
        return _7SegImg
    }
}