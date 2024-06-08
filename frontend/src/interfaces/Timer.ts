interface Timer {
    setTimeValue(time: string): void
    getTimeValue(): string
    start( intervalFunct: Function, stopFunct: Function): void
    pause(): void
    stop(): void
    isExecuting(): boolean
}