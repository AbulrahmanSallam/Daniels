import { CountUp } from "../../node/countup.js/dist/countUp.min.js";

export class Counter {
    constructor(targetVals) {
        this.targetVals = targetVals;
        this.section = document.getElementById('achievement');
        this.counterElements = [
            document.getElementById('counter1'),
            document.getElementById('counter2'),
            document.getElementById('counter3'),
            document.getElementById('counter4')
        ];

        this.counterElements.forEach((element, index) => {
            this.startCounter(element, this.targetVals[index]);
        });
    }


    startCounter(element, targetVal) {
        const options = {
            duration: 3,
            useEasing: true,
            useGrouping: false,
            enableScrollSpy: true

        };

        const countUp = new CountUp(element, targetVal, options);
        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(`Error initializing CountUp for ${element}:`, countUp.error);
        }
    }
}
