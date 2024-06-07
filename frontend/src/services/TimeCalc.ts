class TimeCalc {

    static executionTime: number;

    private constructor() {}

    static start(initialTime:string, intervalFunct: Function, stopFunct: Function){ 
        if (initialTime === "00:00") return
        
        let actualTime = initialTime

        this.executionTime = setInterval(() => {
            actualTime = TimeCalc.getNextTime(actualTime)
            intervalFunct(actualTime)
            if ( actualTime === "00:00:00") {
                clearInterval(this.executionTime)
                stopFunct()
            }
        }, 1000)

    }

    static stop(){
        clearInterval(this.executionTime)
        this.executionTime = 0  
    }

    private static getNextTime(time: string, down: boolean = true) {
        const lastTime = time.split(':').map(time => parseInt(time))
        let seconds =this.timeToSeconds(lastTime)
        seconds += down ? -1 : 1
        return this.timeFormater(this.secondsToTime(seconds))
    }

    private static timeToSeconds(timeArray: number[]) {
        let [hour, minute, second] = timeArray
        const timeInSeconds = hour * 3600 + minute * 60 + second
        return timeInSeconds
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

export default TimeCalc