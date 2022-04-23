class Timer {
    constructor(timerInput, timerButton, resetButton, onStart, onUpdate, onStop, onFinish, onReset){
        this.timerInput = timerInput;
        this.timerButton = timerButton;
        this.resetButton = resetButton;
        this.onStart = onStart;
        this.onStop = onStop;
        this.onUpdate = onUpdate;
        this.onFinish = onFinish;
        this.onReset = onReset;
        this.state = {
            isRunning: false,
            isStopped: false,
        };
        timerButton.addEventListener('click', this.eventEmitter);
        resetButton.addEventListener('click', this.reset);
    }

    eventEmitter = () => {
        if(this.state.isRunning){
            this.stop();
            this.state.isStopped = true;
        } else {
            this.start();
            if(this.state.isStopped){
                this.state.isStopped = false;
            } 
        }
    }

    start = () => {
        if(!this.state.isStopped){
            this.onStart(this.getValue);
        }
        this.updateTimer();
        this.intervalId = setInterval(()=>{
            this.updateTimer();
        }, 50) 
    }

    stop = () => {
        this.state.isRunning = false;
        this.onStop();
        clearInterval(this.intervalId);
    }

    reset = () => {
        console.log("Reset");
        this.state.isRunning = false;
        this.state.isStopped = false;
        this.onFinish();
        this.setValue = 0;
        this.onReset();
    }

    updateTimer = () => {
        if(this.getValue > 0){
            this.state.isRunning = true;
            this.setValue = (this.getValue - .05).toFixed(2);
            console.log(this.getValue);
            this.onUpdate(this.getValue);
        } else {
            console.log(this.getValue);
            clearInterval(this.intervalId);
            this.state.isRunning = false;
            this.onFinish();
        };
    }

    get getValue(){
        return parseFloat(this.timerInput.value).toFixed(2);
    }
    set setValue(value){
        this.timerInput.value = value;
    }
}

