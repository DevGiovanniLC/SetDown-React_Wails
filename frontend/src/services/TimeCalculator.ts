import Timer from '../interfaces/Timer'

class TimeCalculator implements Timer {
    private executionTime!: number;
    private time!: string;

    constructor() {
        this.executionTime = 0
    }

    setTimeValue(time: string) {
        this.time = time
    }

    getTimeValue() {
        return this.time
    }

    start(intervalFunct: Function, stopFunct: Function){ 
        if (this.time === "00:00") return

        this.executionTime = setInterval(() => {
            this.time = TimeCalculator.getNextTime(this.time)
            intervalFunct(this.time)
            if ( this.time === "00:00:00") {
                clearInterval(this.executionTime)
                stopFunct()
            }
        }, 1000)
    }

    pause(){
        clearInterval(this.executionTime)
        this.executionTime = 0
    }

    stop(){
        clearInterval(this.executionTime)
        this.executionTime = 0  
        this.time = "00:00"
    }

    isExecuting(): boolean {
        return this.executionTime != 0
    }

    private static getNextTime(time: string, down: boolean = true) {
        const lastTime = time.split(':').map(time => parseInt(time))
        let seconds =this.timeToSeconds(lastTime)
        seconds += down ? -1 : 1
        return this.timeFormater(this.secondsToTime(seconds))
    }

    private static timeToSeconds(timeArray: number[]) {
        let [hour, minute, second] = timeArray
        return hour * 3600 + minute * 60 + second
    }

    private static secondsToTime(seconds: number) {

        const hour = Math.floor(seconds / 3600)
        const minute = Math.floor((seconds % 3600) / 60)
        const second = Math.floor((seconds % 3600) % 60)
        return [hour, minute, second]
    }

    private static timeFormater(timeArray: number[]) {
        const [hour, minute, second] = timeArray 
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
    }    
}

export default TimeCalculator