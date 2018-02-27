const secTen = document.getElementById("secondTens");
const secOne = document.getElementById("secondOnes");
const msHundred = document.getElementById("msHundreds");
const msTen = document.getElementById("msTens");

var testGlobalMsTen = 0;
var testGlobalMsHundred = 0;
var testGlobalSecOne = 0;
var testGlobalSecTen = 0;

function timer() {

    // set an interval that calls updateTimer as well as calls endTimer after 10 seconds**
    window.setInterval(function () { updateTimer(); }, 10);

    function init() {
        secTen.innerHTML = "0";
        secOne.innerHTML = "0";
        msHundred.innerHTML = "0";
        msTen.innerHTML = "0";
    }

    // helper function that gets called by updateTimer**
    function incrementMsTen() {
        let newMsTen = parseInt(msTen.innerHTML);
        newMsTen++;
        testGlobalMsTen = newMsTen;
        msTen.innerHTML = newMsTen.toString();
    }

    function incrementMsHundred() {
        let newMsHundred = parseInt(msHundred.innerHTML);
        newMsHundred++;
        testGlobalMsHundred = newMsHundred;
        msHundred.innerHTML = newMsHundred.toString();
    }

    function incrementSecOne() {
        let newSecOne = parseInt(secOne.innerHTML);
        newSecOne++;
        testGlobalSecOne = newSecOne;
        secOne.innerHTML = newSecOne.toString();
    }

    function incrementSecTen() {
        let newSecTen = parseInt(secTen.innerHTML);
        newSecTen++;
        testGlobalSecTen = newSecTen;
        secTen.innerHTML = newSecTen.toString();
    }

    function updateTimer() {

        incrementMsTen();
        if (testGlobalMsTen > 9) {

            msTen.innerHTML = "0";
            incrementMsHundred();
            if (testGlobalMsHundred > 9) {

                msHundred.innerHTML = "0";
                incrementSecOne();
                if (testGlobalSecOne > 9) {

                    secOne.innerHTML = "0";
                    incrementSecTen();

                    if (testGlobalSecTen > 0) {

                        endTimer();
                    }
                }
            }
        }
    }

    function endTimer() {
        clearTimeout(testGlobalSecTen);
    }

    init();

}

timer();