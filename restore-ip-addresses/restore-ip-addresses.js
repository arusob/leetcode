
function printValidIpAddress (string) {

    // less than 4 signs
    if(string.length < 4) {
        return "This string is too short to make IP adress";
    }

    var arrayFromString = []
    for(let i=0; i<=string.length-1; i++) {
        var checkCharater = string[i]*1
        arrayFromString.push(checkCharater)
    } 
    
    if(arrayFromString.includes(NaN)) {
        var output = 0
        return 'The string contains illegal characters that are not numbers';
    }
    
    // 4 signs
    if(string.length === 4) {
        var outputFour = []
        // | 0.0.0.0 |
        let ipAdress = "" 
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdress = ipAdress + oneChar
            if(ipAdress.length >= 1 && ipAdress.length < 6) {
                ipAdress = ipAdress + "."
            }
        }
        outputFour.push(ipAdress)
        var output = outputFour
    }

    if(string.length === 5) {
        var outputFive = []
        // | 0.0.0.00 |
        let ipAdressOne = ""
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 7) {
                ipAdressOne = ipAdressOne + "."
            }
        }
        outputFive.push(ipAdressOne)
        // | 0.0.00.0 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 1 && ipAdressTwo.length < 4) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 6 && dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputFive.push(ipAdressTwo)
        // | 0.00.0.0 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 4 && ipAdressThree.length < 8 && dotsThree >= 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } 
        }
        outputFive.push(ipAdressThree)
        // | 00.0.0.0 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 4 && ipAdressFour.length < 8 && dotsFour >= 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } 
        }
        outputFive.push(ipAdressFour)
        var output = outputFive
    }

    // 6 signs 
    if(string.length === 6) {
        var outputSix = []
        // |1| 0.0.0.000 |
        let ipAdressOne = ""
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 7) {
                ipAdressOne = ipAdressOne + "."
            }
        }
        outputSix.push(ipAdressOne)
        
        // |2| 0.0.000.0 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 1 && ipAdressTwo.length < 5) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 7 && ipAdressTwo.length < 9 && dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
            }
        }
        outputSix.push(ipAdressTwo)
        
        // |3| 0.000.0.0 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 1 && ipAdressThree.length < 3) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 5 && ipAdressThree.length < 7 && dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 7 && ipAdressThree.length < 9 && dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputSix.push(ipAdressThree)

        // |4| 000.0.0.0 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 3 && ipAdressFour.length < 5) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 5 && ipAdressFour.length < 7 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 7 && ipAdressFour.length < 9 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputSix.push(ipAdressFour)

        // |5| 0.0.00.00 | 
        let ipAdressFive = ""
        let dotsFive = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFive = ipAdressFive + oneChar
            if(ipAdressFive.length >= 1 && ipAdressFive.length < 3) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 3 && ipAdressFive.length < 5 &&  dotsFive === 1) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 6 && ipAdressFive.length < 8 &&  dotsFive === 2) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            }
        }
        outputSix.push(ipAdressFive)

        // |6| 0.00.00.0 |
        let ipAdressSix = ""
        let dotsSix = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSix = ipAdressSix + oneChar
            if(ipAdressSix.length >= 1 && ipAdressSix.length < 3) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 4 && ipAdressSix.length < 6 &&  dotsSix === 1) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 7 && ipAdressSix.length < 9 &&  dotsSix === 2) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            }
        }
        outputSix.push(ipAdressSix)

        // |7| 00.00.0.0 |
        let ipAdressSeven = ""
        let dotsSeven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeven = ipAdressSeven + oneChar
            if(ipAdressSeven.length >= 2 && ipAdressSeven.length < 4) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 5 && ipAdressSeven.length < 7 &&  dotsSeven === 1) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 7 && ipAdressSeven.length < 9 &&  dotsSeven === 2) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            }
        }
        outputSix.push(ipAdressSeven)

        // |8| 00.0.0.00 |
        let ipAdressEight = ""
        let dotsEight = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEight = ipAdressEight + oneChar
            if(ipAdressEight.length >= 2 && ipAdressEight.length < 4) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 4 && ipAdressEight.length < 6 &&  dotsEight === 1) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 6 && ipAdressEight.length < 8 &&  dotsEight === 2) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            }
        }
        outputSix.push(ipAdressEight)

        // |9| 00.0.00.0 |
        let ipAdressNine = ""
        let dotsNine = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNine = ipAdressNine + oneChar
            if(ipAdressNine.length >= 2 && ipAdressNine.length < 4) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 4 && ipAdressNine.length < 6 &&  dotsNine === 1) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 7 && ipAdressNine.length < 8 &&  dotsNine === 2) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            }
        }
        outputSix.push(ipAdressNine)
        
        // |10| 0.00.0.00 |
        let ipAdressTen = ""
        let dotsTen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTen = ipAdressTen + oneChar
            if(ipAdressTen.length >= 1 && ipAdressTen.length < 3) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 4 && ipAdressTen.length < 6 &&  dotsTen === 1) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 6 && ipAdressTen.length < 8 &&  dotsTen === 2) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            }
        }
        outputSix.push(ipAdressTen)
        var output = outputSix
    }

    // 7 signs 
    if(string.length === 7) {
        var outputSeven = [] 
        // |1| 0.0.00.000 |
        let ipAdressOne= ""
        let dotsOne = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 3) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 3 && ipAdressOne.length < 5 &&  dotsOne === 1) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 6 && ipAdressOne.length < 8 &&  dotsOne === 2) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            }
        }
        outputSeven.push(ipAdressOne)
        
        // |2| 0.00.0.000 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 1 && ipAdressTwo.length < 3) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 4 && ipAdressTwo.length < 5 &&  dotsTwo === 1) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 6 && ipAdressTwo.length < 8 &&  dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputSeven.push(ipAdressTwo)

        // |3| 00.0.0.000 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 2 && ipAdressThree.length < 4) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 4 && ipAdressThree.length < 6 && dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 6 && ipAdressThree.length < 8 &&  dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputSeven.push(ipAdressThree)

        // |4| 0.00.000.0 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 1 && ipAdressFour.length < 3) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 4 && ipAdressFour.length < 6 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 8 && ipAdressFour.length < 9 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputSeven.push(ipAdressFour)
        
        // |5| 00.0.000.0 |
        let ipAdressFive = ""
        let dotsFive = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFive = ipAdressFive + oneChar
            if(ipAdressFive.length >= 2 && ipAdressFive.length < 4) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 4 && ipAdressFive.length < 6 &&  dotsFive === 1) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 8 && ipAdressFive.length < 9 &&  dotsFive === 2) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            }
        }
        outputSeven.push(ipAdressFive)
        
        // |6| 0.0.000.00 |
        let ipAdressSix = ""
        let dotsSix = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSix = ipAdressSix + oneChar
            if(ipAdressSix.length >= 1 && ipAdressSix.length < 3) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 3 && ipAdressSix.length < 5 &&  dotsSix === 1) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 7 && ipAdressSix.length < 9 &&  dotsSix === 2) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            }
        }
        outputSeven.push(ipAdressSix)
        
        // |7| 00.000.0.0 |
        let ipAdressSeven = ""
        let dotsSeven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeven = ipAdressSeven + oneChar
            if(ipAdressSeven.length >= 2 && ipAdressSeven.length < 4) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 6 && ipAdressSeven.length < 8 &&  dotsSeven === 1) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 8 && ipAdressSeven.length < 10 &&  dotsSeven === 2) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            }
        }
        outputSeven.push(ipAdressSeven)

        // |8| 0.000.0.00 |
        let ipAdressEight = ""
        let dotsEight = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEight = ipAdressEight + oneChar
            if(ipAdressEight.length >= 1 && ipAdressEight.length < 3) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 5 && ipAdressEight.length < 7 &&  dotsEight === 1) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 7 && ipAdressEight.length < 9 &&  dotsEight === 2) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            }
        }
        outputSeven.push(ipAdressEight)

        // |9| 0.000.00.0 |
        let ipAdressNine = ""
        let dotsNine = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNine = ipAdressNine + oneChar
            if(ipAdressNine.length >= 1 && ipAdressNine.length < 3) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 5 && ipAdressNine.length < 7 &&  dotsNine === 1) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 8 && ipAdressNine.length < 10 &&  dotsNine === 2) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            }
        }
        outputSeven.push(ipAdressNine)

        // |10| 000.0.0.00 |
        let ipAdressTen = ""
        let dotsTen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTen = ipAdressTen + oneChar
            if(ipAdressTen.length >= 3 && ipAdressTen.length < 5) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 5 && ipAdressTen.length < 7 &&  dotsTen === 1) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 7 && ipAdressTen.length < 9 &&  dotsTen === 2) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            }
        }
        outputSeven.push(ipAdressTen)

        // |11| 000.0.00.0 |
        let ipAdressEleven = ""
        let dotsEleven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEleven = ipAdressEleven + oneChar
            if(ipAdressEleven.length >= 3 && ipAdressEleven.length < 5) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 5 && ipAdressEleven.length < 7 &&  dotsEleven === 1) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 8 && ipAdressEleven.length < 10 &&  dotsEleven === 2) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            }
        }
        outputSeven.push(ipAdressEleven)

        // |12| 000.00.0.0 |
        let ipAdressTwelve = ""
        let dotsTwelve = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwelve = ipAdressTwelve + oneChar
            if(ipAdressTwelve.length >= 3 && ipAdressTwelve.length < 5) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 6 && ipAdressTwelve.length < 8 &&  dotsTwelve === 1) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 8 && ipAdressTwelve.length < 10 &&  dotsTwelve === 2) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            }
        }
        outputSeven.push(ipAdressTwelve)

        // |13| 0.00.00.00 |
        let ipAdressThirteen = ""
        let dotsThirteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThirteen = ipAdressThirteen + oneChar
            if(ipAdressThirteen.length >= 1 && ipAdressThirteen.length < 3) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 4 && ipAdressThirteen.length < 6 &&  dotsThirteen === 1) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 7 && ipAdressThirteen.length < 9 &&  dotsThirteen === 2) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            }
        }
        outputSeven.push(ipAdressThirteen)
        
        // |14| 00.0.00.00 |
        let ipAdressFourteen = ""
        let dotsFourteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFourteen = ipAdressFourteen + oneChar
            if(ipAdressFourteen.length >= 2 && ipAdressFourteen.length < 4) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 4 && ipAdressFourteen.length < 6 &&  dotsFourteen === 1) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 7 && ipAdressFourteen.length < 9 &&  dotsFourteen === 2) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            }
        }
        outputSeven.push(ipAdressFourteen)

        // |15| 00.00.0.00 |
        let ipAdressFifteen = ""
        let dotsFifteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFifteen = ipAdressFifteen + oneChar
            if(ipAdressFifteen.length >= 2 && ipAdressFifteen.length < 4) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 5 && ipAdressFifteen.length < 7 &&  dotsFifteen === 1) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 7 && ipAdressFifteen.length < 9 &&  dotsFifteen === 2) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            }
        }
        outputSeven.push(ipAdressFifteen)
        
        // |16| 00.00.00.0 |
        let ipAdressSixteen = ""
        let dotsSixteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSixteen = ipAdressSixteen + oneChar
            if(ipAdressSixteen.length >= 2 && ipAdressSixteen.length < 4) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 5 && ipAdressSixteen.length < 7 &&  dotsSixteen === 1) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 8 && ipAdressSixteen.length < 9 &&  dotsSixteen === 2) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            }
        }
        outputSeven.push(ipAdressSixteen)
        var output = outputSeven
    }


    // 8 signs 
    if(string.length === 8) {
        var outputEight = []
        // |1| 0.0.000.000 |
        let ipAdressOne = ""
        let dotsOne = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 3) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 3 && ipAdressOne.length < 5 &&  dotsOne === 1) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 7 && ipAdressOne.length < 9 &&  dotsOne === 2) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            }
        }
        outputEight.push(ipAdressOne)

        // |2| 0.000.0.000 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 1 && ipAdressTwo.length < 3) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 5 && ipAdressTwo.length < 7 &&  dotsTwo === 1) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 7 && ipAdressTwo.length < 9 &&  dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputEight.push(ipAdressTwo)

        // |3| 0.000.000.0 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 1 && ipAdressThree.length < 3) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 5 && ipAdressThree.length < 7 &&  dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 9 && ipAdressThree.length < 11 &&  dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputEight.push(ipAdressThree)

        // |4| 000.0.0.000 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 3 && ipAdressFour.length < 5) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 5 && ipAdressFour.length < 7 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 7 && ipAdressFour.length < 9 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputEight.push(ipAdressFour)
        
        // |5| 000.0.000.0 |
        let ipAdressFive = ""
        let dotsFive = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFive = ipAdressFive + oneChar
            if(ipAdressFive.length >= 3 && ipAdressFive.length < 5) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 5 && ipAdressFive.length < 7 &&  dotsFive === 1) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 9 && ipAdressFive.length < 11 &&  dotsFive === 2) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            }
        }
        outputEight.push(ipAdressFive)

        // |6| 000.000.0.0 |
        let ipAdressSix = ""
        let dotsSix = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSix = ipAdressSix + oneChar
            if(ipAdressSix.length >= 3 && ipAdressSix.length < 5) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 7 && ipAdressSix.length < 9 &&  dotsSix === 1) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 9 && ipAdressSix.length < 11 &&  dotsSix === 2) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            }
        }
        outputEight.push(ipAdressSix)

        // |7| 00.00.00.00 |
        let ipAdressSeven = ""
        let dotsSeven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeven = ipAdressSeven + oneChar
            if(ipAdressSeven.length >= 2 && ipAdressSeven.length < 4) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 5 && ipAdressSeven.length < 7 &&  dotsSeven === 1) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 8 && ipAdressSeven.length < 10 &&  dotsSeven === 2) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            }
        }
        outputEight.push(ipAdressSeven)

        // |8| 00.00.0.000 |
        let ipAdressEight = ""
        let dotsEight = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEight = ipAdressEight + oneChar
            if(ipAdressEight.length >= 2 && ipAdressEight.length < 4) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 5 && ipAdressEight.length < 7 &&  dotsEight === 1) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 7 && ipAdressEight.length < 9 &&  dotsEight === 2) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            }
        }
        outputEight.push(ipAdressEight)

        // |9| 00.0.00.000 |
        let ipAdressNine = ""
        let dotsNine = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNine = ipAdressNine + oneChar
            if(ipAdressNine.length >= 2 && ipAdressNine.length < 4) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 4 && ipAdressNine.length < 6 &&  dotsNine === 1) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 7 && ipAdressNine.length < 9 &&  dotsNine === 2) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            }
        }
        outputEight.push(ipAdressNine)

        // |10| 0.00.00.000 |
        let ipAdressTen = ""
        let dotsTen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTen = ipAdressTen + oneChar
            if(ipAdressTen.length >= 1 && ipAdressTen.length < 3) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 4 && ipAdressTen.length < 6 &&  dotsTen === 1) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 7 && ipAdressTen.length < 9 &&  dotsTen === 2) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            }
        }
        outputEight.push(ipAdressTen)

        // |11| 00.00.000.0 |
        let ipAdressEleven = ""
        let dotsEleven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEleven = ipAdressEleven + oneChar
            if(ipAdressEleven.length >= 2 && ipAdressEleven.length < 4) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 5 && ipAdressEleven.length < 7 &&  dotsEleven === 1) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 9 && ipAdressEleven.length < 11 &&  dotsEleven === 2) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            }
        }
        outputEight.push(ipAdressEleven)

        // |12| 00.0.000.00 |
        let ipAdressTwelve = ""
        let dotsTwelve = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwelve = ipAdressTwelve + oneChar
            if(ipAdressTwelve.length >= 2 && ipAdressTwelve.length < 4) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 4 && ipAdressTwelve.length < 6 &&  dotsTwelve === 1) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 8 && ipAdressTwelve.length < 10 &&  dotsTwelve === 2) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            }
        }
        outputEight.push(ipAdressTwelve)

        // |13| 0.00.000.00 |
        let ipAdressThirteen = ""
        let dotsThirteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThirteen = ipAdressThirteen + oneChar
            if(ipAdressThirteen.length >= 1 && ipAdressThirteen.length < 3) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 4 && ipAdressThirteen.length < 6 &&  dotsThirteen === 1) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 8 && ipAdressThirteen.length < 10 &&  dotsThirteen === 2) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            }
        }
        outputEight.push(ipAdressThirteen)

        // |14| 00.000.00.0 |
        let ipAdressFourteen = ""
        let dotsFourteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFourteen = ipAdressFourteen + oneChar
            if(ipAdressFourteen.length >= 2 && ipAdressFourteen.length < 4) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 6 && ipAdressFourteen.length < 8 &&  dotsFourteen === 1) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 9 && ipAdressFourteen.length < 11 &&  dotsFourteen === 2) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            }
        }
        outputEight.push(ipAdressFourteen)

        // |15| 00.000.0.00 |
        let ipAdressFifteen = ""
        let dotsFifteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFifteen = ipAdressFifteen + oneChar
            if(ipAdressFifteen.length >= 2 && ipAdressFifteen.length < 4) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 6 && ipAdressFifteen.length < 8 &&  dotsFifteen === 1) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 8 && ipAdressFifteen.length < 10 &&  dotsFifteen === 2) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            }
        }
        outputEight.push(ipAdressFifteen)

        // |16| 0.000.00.00 |
        let ipAdressSixteen = ""
        let dotsSixteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSixteen = ipAdressSixteen + oneChar
            if(ipAdressSixteen.length >= 1 && ipAdressSixteen.length < 3) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 5 && ipAdressSixteen.length < 7 &&  dotsSixteen === 1) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 8 && ipAdressSixteen.length < 10 &&  dotsSixteen === 2) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            }
        }
        outputEight.push(ipAdressSixteen)

        // |17| 000.00.00.0 |
        let ipAdressSeventeen = ""
        let dotsSeventeen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeventeen = ipAdressSeventeen + oneChar
            if(ipAdressSeventeen.length >= 3 && ipAdressSeventeen.length < 5) {
                ipAdressSeventeen = ipAdressSeventeen + "."
                dotsSeventeen ++
            } else if (ipAdressSeventeen.length >= 6 && ipAdressSeventeen.length < 8 &&  dotsSeventeen === 1) {
                ipAdressSeventeen = ipAdressSeventeen + "."
                dotsSeventeen ++
            } else if (ipAdressSeventeen.length >= 9 && ipAdressSeventeen.length < 11 &&  dotsSeventeen === 2) {
                ipAdressSeventeen = ipAdressSeventeen + "."
                dotsSeventeen ++
            }
        }
        outputEight.push(ipAdressSeventeen)

        // |18| 000.00.0.00 |
        let ipAdressEighteen = ""
        let dotsEighteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEighteen = ipAdressEighteen + oneChar
            if(ipAdressEighteen.length >= 3 && ipAdressEighteen.length < 5) {
                ipAdressEighteen = ipAdressEighteen + "."
                dotsEighteen ++
            } else if (ipAdressEighteen.length >= 6 && ipAdressEighteen.length < 8 &&  dotsEighteen === 1) {
                ipAdressEighteen = ipAdressEighteen + "."
                dotsEighteen ++
            } else if (ipAdressEighteen.length >= 8 && ipAdressEighteen.length < 10 &&  dotsEighteen === 2) {
                ipAdressEighteen = ipAdressEighteen + "."
                dotsEighteen ++
            }
        }
        outputEight.push(ipAdressEighteen)

        // |19| 000.0.00.00 |
        let ipAdressNineteen = ""
        let dotsNineteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNineteen = ipAdressNineteen + oneChar
            if(ipAdressNineteen.length >= 3 && ipAdressNineteen.length < 5) {
                ipAdressNineteen = ipAdressNineteen + "."
                dotsNineteen ++
            } else if (ipAdressNineteen.length >= 5 && ipAdressNineteen.length < 7 &&  dotsNineteen === 1) {
                ipAdressNineteen = ipAdressNineteen + "."
                dotsNineteen ++
            } else if (ipAdressNineteen.length >= 8 && ipAdressNineteen.length < 10 &&  dotsNineteen === 2) {
                ipAdressNineteen = ipAdressNineteen + "."
                dotsNineteen ++
            }
        }
        outputEight.push(ipAdressNineteen)
        var output = outputEight
    }


    // 9 signs 
    if(string.length === 9) {
        var outputNine = []
        // |1| 0.00.000.000 |
        let ipAdressOne = ""
        let dotsOne = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 3) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 4 && ipAdressOne.length < 6 &&  dotsOne === 1) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 8 && ipAdressOne.length < 10 &&  dotsOne === 2) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            }
        }
        outputNine.push(ipAdressOne)

        // |2| 00.0.000.000 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 2 && ipAdressTwo.length < 4) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 4 && ipAdressTwo.length < 6 &&  dotsTwo === 1) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 8 && ipAdressTwo.length < 10 &&  dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputNine.push(ipAdressTwo)

        // |3| 00.000.000.0 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 2 && ipAdressThree.length < 4) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 6 && ipAdressThree.length < 8 &&  dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 10 && ipAdressThree.length < 12 &&  dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputNine.push(ipAdressThree)

        // |4| 0.000.000.00 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 1 && ipAdressFour.length < 3) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 5 && ipAdressFour.length < 7 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 9 && ipAdressFour.length < 11 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputNine.push(ipAdressFour)

        // |5| 000.000.00.0 |
        let ipAdressFive = ""
        let dotsFive = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFive = ipAdressFive + oneChar
            if(ipAdressFive.length >= 3 && ipAdressFive.length < 5) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 7 && ipAdressFive.length < 9 &&  dotsFive === 1) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 10 && ipAdressFive.length < 12 &&  dotsFive === 2) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            }
        }
        outputNine.push(ipAdressFive)

        // |6| 000.000.0.00 |
        let ipAdressSix = ""
        let dotsSix = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSix = ipAdressSix + oneChar
            if(ipAdressSix.length >= 3 && ipAdressSix.length < 5) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 7 && ipAdressSix.length < 9 &&  dotsSix === 1) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 9 && ipAdressSix.length < 11 &&  dotsSix === 2) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            }
        }
        outputNine.push(ipAdressSix)

        // |7| 000.00.0.000 |
        let ipAdressSeven = ""
        let dotsSeven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeven = ipAdressSeven + oneChar
            if(ipAdressSeven.length >= 3 && ipAdressSeven.length < 5) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 6 && ipAdressSeven.length < 8 &&  dotsSeven === 1) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 8 && ipAdressSeven.length < 10 &&  dotsSeven === 2) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            }
        }
        outputNine.push(ipAdressSeven)

        // |8| 000.0.00.000 |
        let ipAdressEight = ""
        let dotsEight = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEight = ipAdressEight + oneChar
            if(ipAdressEight.length >= 3 && ipAdressEight.length < 5) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 5 && ipAdressEight.length < 7 &&  dotsEight === 1) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 8 && ipAdressEight.length < 10 &&  dotsEight === 2) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            }
        }
        outputNine.push(ipAdressEight)

        // |9| 000.00.000.0 |
        let ipAdressNine = ""
        let dotsNine = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNine = ipAdressNine + oneChar
            if(ipAdressNine.length >= 3 && ipAdressNine.length < 5) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 6 && ipAdressNine.length < 8 &&  dotsNine === 1) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 10 && ipAdressNine.length < 12 &&  dotsNine === 2) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            }
        }
        outputNine.push(ipAdressNine)

        // |10| 000.0.000.00 |
        let ipAdressTen = ""
        let dotsTen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTen = ipAdressTen + oneChar
            if(ipAdressTen.length >= 3 && ipAdressTen.length < 5) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 5 && ipAdressTen.length < 7 &&  dotsTen === 1) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 9 && ipAdressTen.length < 11 &&  dotsTen === 2) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            }
        }
        outputNine.push(ipAdressTen)

        // |11| 00.000.0.000 |
        let ipAdressEleven = ""
        let dotsEleven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEleven = ipAdressEleven + oneChar
            if(ipAdressEleven.length >= 2 && ipAdressEleven.length < 4) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 6 && ipAdressEleven.length < 8 &&  dotsEleven === 1) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            } else if (ipAdressEleven.length >= 8 && ipAdressEleven.length < 10 &&  dotsEleven === 2) {
                ipAdressEleven = ipAdressEleven + "."
                dotsEleven ++
            }
        }
        outputNine.push(ipAdressEleven)

        // |12| 0.000.00.000 |
        let ipAdressTwelve = ""
        let dotsTwelve = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwelve = ipAdressTwelve + oneChar
            if(ipAdressTwelve.length >= 1 && ipAdressTwelve.length < 3) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 5 && ipAdressTwelve.length < 7 &&  dotsTwelve === 1) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            } else if (ipAdressTwelve.length >= 8 && ipAdressTwelve.length < 10 &&  dotsTwelve === 2) {
                ipAdressTwelve = ipAdressTwelve + "."
                dotsTwelve ++
            }
        }
        outputNine.push(ipAdressTwelve)

        // |13| 00.00.00.000 |
        let ipAdressThirteen = ""
        let dotsThirteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThirteen = ipAdressThirteen + oneChar
            if(ipAdressThirteen.length >= 2 && ipAdressThirteen.length < 4) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 5 && ipAdressThirteen.length < 7 &&  dotsThirteen === 1) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            } else if (ipAdressThirteen.length >= 8 && ipAdressThirteen.length < 10 &&  dotsThirteen === 2) {
                ipAdressThirteen = ipAdressThirteen + "."
                dotsThirteen ++
            }
        }
        outputNine.push(ipAdressThirteen)

        // |14| 00.00.000.00 |
        let ipAdressFourteen = ""
        let dotsFourteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFourteen = ipAdressFourteen + oneChar
            if(ipAdressFourteen.length >= 2 && ipAdressFourteen.length < 4) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 5 && ipAdressFourteen.length < 7 &&  dotsFourteen === 1) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            } else if (ipAdressFourteen.length >= 9 && ipAdressFourteen.length < 11 &&  dotsFourteen === 2) {
                ipAdressFourteen = ipAdressFourteen + "."
                dotsFourteen ++
            }
        }
        outputNine.push(ipAdressFourteen)

        // |15| 00.000.00.00 |
        let ipAdressFifteen = ""
        let dotsFifteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFifteen = ipAdressFifteen + oneChar
            if(ipAdressFifteen.length >= 2 && ipAdressFifteen.length < 4) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 6 && ipAdressFifteen.length < 8 &&  dotsFifteen === 1) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            } else if (ipAdressFifteen.length >= 9 && ipAdressFifteen.length < 11 &&  dotsFifteen === 2) {
                ipAdressFifteen = ipAdressFifteen + "."
                dotsFifteen ++
            }
        }
        outputNine.push(ipAdressFifteen)

        // |16| 000.00.00.00 |
        let ipAdressSixteen = ""
        let dotsSixteen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSixteen = ipAdressSixteen + oneChar
            if(ipAdressSixteen.length >= 3 && ipAdressSixteen.length < 5) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 6 && ipAdressSixteen.length < 8 &&  dotsSixteen === 1) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            } else if (ipAdressSixteen.length >= 9 && ipAdressSixteen.length < 11 &&  dotsSixteen === 2) {
                ipAdressSixteen = ipAdressSixteen + "."
                dotsSixteen ++
            }
        }
        outputNine.push(ipAdressSixteen)
        var output = outputNine
    }


    // 10 signs 
    if(string.length === 10) {
        var outputTen = []
        // |1| 0.000.000.000 |
        let ipAdressOne = ""
        let dotsOne = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 1 && ipAdressOne.length < 3) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 5 && ipAdressOne.length < 7 &&  dotsOne === 1) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 9 && ipAdressOne.length < 11 &&  dotsOne === 2) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            }
        }
        outputTen.push(ipAdressOne)

        // |2| 00.00.000.000 |
        let ipAdressTwo = ""
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 2 && ipAdressTwo.length < 4) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 5 && ipAdressTwo.length < 7 &&  dotsTwo === 1) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 9 && ipAdressTwo.length < 11 &&  dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputTen.push(ipAdressTwo)

        // |3| 000.0.000.000 |
        let ipAdressThree = ""
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 3 && ipAdressThree.length < 5) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 5 && ipAdressThree.length < 7 &&  dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 9 && ipAdressThree.length < 11 &&  dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputTen.push(ipAdressThree)

        // |4| 00.000.00.000 |
        let ipAdressFour = ""
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 2 && ipAdressFour.length < 4) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 6 && ipAdressFour.length < 8 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 9 && ipAdressFour.length < 11 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputTen.push(ipAdressFour)

        // |5| 000.000.0.000 |
        let ipAdressFive = ""
        let dotsFive = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFive = ipAdressFive + oneChar
            if(ipAdressFive.length >= 3 && ipAdressFive.length < 5) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 7 && ipAdressFive.length < 9 &&  dotsFive === 1) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            } else if (ipAdressFive.length >= 9 && ipAdressFive.length < 11 &&  dotsFive === 2) {
                ipAdressFive = ipAdressFive + "."
                dotsFive ++
            }
        }
        outputTen.push(ipAdressFive)

        // |6| 000.00.00.000 |
        let ipAdressSix = ""
        let dotsSix = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSix = ipAdressSix + oneChar
            if(ipAdressSix.length >= 3 && ipAdressSix.length < 5) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 6 && ipAdressSix.length < 8 &&  dotsSix === 1) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            } else if (ipAdressSix.length >= 9 && ipAdressSix.length < 11 &&  dotsSix === 2) {
                ipAdressSix = ipAdressSix + "."
                dotsSix ++
            }
        }
        outputTen.push(ipAdressSix)

        // |7| 000.000.000.0 |
        let ipAdressSeven = ""
        let dotsSeven = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressSeven = ipAdressSeven + oneChar
            if(ipAdressSeven.length >= 3 && ipAdressSeven.length < 5) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 7 && ipAdressSeven.length < 9 &&  dotsSeven === 1) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            } else if (ipAdressSeven.length >= 11 && ipAdressSeven.length < 13 &&  dotsSeven === 2) {
                ipAdressSeven = ipAdressSeven + "."
                dotsSeven ++
            }
        }
        outputTen.push(ipAdressSeven)

        // |8| 000.000.00.00 |
        let ipAdressEight = ""
        let dotsEight = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressEight = ipAdressEight + oneChar
            if(ipAdressEight.length >= 3 && ipAdressEight.length < 5) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 7 && ipAdressEight.length < 9 &&  dotsEight === 1) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            } else if (ipAdressEight.length >= 10 && ipAdressEight.length < 12 &&  dotsEight === 2) {
                ipAdressEight = ipAdressEight + "."
                dotsEight ++
            }
        }
        outputTen.push(ipAdressEight)

        // |9| 000.00.000.00 |
        let ipAdressNine = ""
        let dotsNine = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressNine = ipAdressNine + oneChar
            if(ipAdressNine.length >= 3 && ipAdressNine.length < 5) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 6 && ipAdressNine.length < 8 &&  dotsNine === 1) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            } else if (ipAdressNine.length >= 10 && ipAdressNine.length < 12 &&  dotsNine === 2) {
                ipAdressNine = ipAdressNine + "."
                dotsNine ++
            }
        }
        outputTen.push(ipAdressNine)

        // |10| 00.000.000.00 |
        let ipAdressTen = ""
        let dotsTen = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTen = ipAdressTen + oneChar
            if(ipAdressTen.length >= 2 && ipAdressTen.length < 4) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 6 && ipAdressTen.length < 8 &&  dotsTen === 1) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            } else if (ipAdressTen.length >= 10 && ipAdressTen.length < 12 &&  dotsTen === 2) {
                ipAdressTen = ipAdressTen + "."
                dotsTen ++
            }
        }
        outputTen.push(ipAdressTen)
        var output = outputTen
    }


    // 11 signs 
    if(string.length === 11) {
        var outputEleven = []
        // |1| 00.000.000.000 |
        let ipAdressOne = "" 
        let dotsOne = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressOne = ipAdressOne + oneChar
            if(ipAdressOne.length >= 2 && ipAdressOne.length < 4) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 6 && ipAdressOne.length < 8 &&  dotsOne === 1) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            } else if (ipAdressOne.length >= 10 && ipAdressOne.length < 12 &&  dotsOne === 2) {
                ipAdressOne = ipAdressOne + "."
                dotsOne ++
            }
        }
        outputEleven.push(ipAdressOne)

        // |2| 000.00.000.000 |
        let ipAdressTwo = "" 
        let dotsTwo = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressTwo = ipAdressTwo + oneChar
            if(ipAdressTwo.length >= 3 && ipAdressTwo.length < 5) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 6 && ipAdressTwo.length < 8 &&  dotsTwo === 1) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            } else if (ipAdressTwo.length >= 10 && ipAdressTwo.length < 12 &&  dotsTwo === 2) {
                ipAdressTwo = ipAdressTwo + "."
                dotsTwo ++
            }
        }
        outputEleven.push(ipAdressTwo)

        // |3| 000.000.00.000 |
        let ipAdressThree = "" 
        let dotsThree = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressThree = ipAdressThree + oneChar
            if(ipAdressThree.length >= 3 && ipAdressThree.length < 5) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 7 && ipAdressThree.length < 9 &&  dotsThree === 1) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            } else if (ipAdressThree.length >= 10 && ipAdressThree.length < 12 &&  dotsThree === 2) {
                ipAdressThree = ipAdressThree + "."
                dotsThree ++
            }
        }
        outputEleven.push(ipAdressThree)

        // |4| 000.000.000.00 |
        let ipAdressFour = "" 
        let dotsFour = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdressFour = ipAdressFour + oneChar
            if(ipAdressFour.length >= 3 && ipAdressFour.length < 5) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 7 && ipAdressFour.length < 9 &&  dotsFour === 1) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            } else if (ipAdressFour.length >= 11 && ipAdressFour.length < 13 &&  dotsFour === 2) {
                ipAdressFour = ipAdressFour + "."
                dotsFour ++
            }
        }
        outputEleven.push(ipAdressFour)
        var output = outputEleven
    }


    // 12 signs
    if(string.length === 12) {
        var outputTwelve = []
        // |1| 000.000.000.000 |
        let ipAdress = "" 
        let dots = 0
        for(let i=0; i <= string.length-1; i++) {
            var oneChar = string[i]
            ipAdress = ipAdress + oneChar
            if(ipAdress.length >= 3 && ipAdress.length < 5) {
                ipAdress = ipAdress + "."
                dots ++
            } else if (ipAdress.length >= 7 && ipAdress.length < 9 &&  dots === 1) {
                ipAdress = ipAdress + "."
                dots ++
            } else if (ipAdress.length >= 11 && ipAdress.length < 13 &&  dots === 2) {
                ipAdress = ipAdress + "."
                dots ++
            }
        }
        outputTwelve.push(ipAdress)
        var output = outputTwelve
    }

    var outputFilterd = []
    for(let i=0; i <= output.length-1; i++) {
        var checkStr = output[i]
        var checkArr = checkStr.split('.')
        var isValidStr = []
        for(let k=0; k<=3; k++) {
            var thisStr = checkArr[k]
            if(thisStr.length === 1) {
                isValidStr.push(true)
            }
            if(thisStr.length === 2 && thisStr.charAt(0) !== '0') {
                isValidStr.push(true)
            } 
            if(thisStr.length === 3 && thisStr.charAt(0) !== '0' & thisStr*1 <= 255 ) {
                isValidStr.push(true)
            }
        }
        if(isValidStr.length === 4) {
            outputFilterd.push(checkStr)
        }
    }
    return outputFilterd.sort()
}

module.exports = printValidIpAddress;
