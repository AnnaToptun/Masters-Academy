const pandemicStartMap = "01000000X000X011X0X";
const pandemicEndMap = "11111111X000X111X0X";


searchCode(pandemicStartMap);

function showMap(code, parentElementClass) {
    for (var i = 0; i < code.length; i++) {

        switch (code[i]) {
            case "0":
                let uninfected = document.createElement('div');
                uninfected.setAttribute('class', 'block');
                uninfected.setAttribute('style', 'background-color: green;');
                document.getElementById(parentElementClass).appendChild(uninfected);
                console.log("uninfected")
                break;
            case "1":
                let infected = document.createElement('div');
                infected.setAttribute('class', 'block');
                infected.setAttribute('style', 'background-color: red;');
                document.getElementById(parentElementClass).appendChild(infected);
                console.log("infected");
                break;
            case "X":
                let ocean = document.createElement('div');
                ocean.setAttribute('class', 'block');
                ocean.setAttribute('style', 'background-color: blue;');
                document.getElementById(parentElementClass).appendChild(ocean);
                console.log("ocaen");
                break;
        }

    }
}
showMap(pandemicStartMap, 'container1');
showMap(pandemicEndMap, 'container2');
var numberOfPeople = 0;
var infectedOfPeople = 0;
var infectedPercentage = 0;

function counterElement(code) {
    for (var i = 0; i < code.length; i++) {
        if (code[i] == '1' || code[i] == '0') {
            numberOfPeople++;
        }
    }
    console.log(numberOfPeople);
    document.getElementById('total').innerHTML = "Total: " + numberOfPeople;

    for (var i = 0; i < code.length; i++) {
        if (code[i] == '1') {
            infectedOfPeople++;
        }
    }
    console.log(infectedOfPeople);
    document.getElementById('infected').innerHTML = "Infected: " + infectedOfPeople;
    for (var i = 0; i < code.length; i++) {
        if (code[i] == '1') {
            infectedPercentage = (infectedOfPeople * 100) / numberOfPeople;
        }
    }
    console.log(infectedPercentage)
    document.getElementById('percentage').innerHTML = "Percentage: " + infectedPercentage;
}
counterElement(pandemicEndMap)