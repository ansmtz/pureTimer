const timerInput = document.getElementById('timerInput'),
      timerButton = document.getElementById('timerButton'),
      resetButton = document.getElementById('resetButton'),
      circle = document.querySelector('.circle');

const addButtonStyle = (btn, className) => {
    btn.classList.add(className);
}

const removeButtonStyle = (btn, className) => {
    btn.classList.remove(className);
}

const border = new Border(circle);
const myTimer = new Timer(timerInput,
    timerButton,
    resetButton,
    (value)=>{
        console.log("Timer Started", value);
        // задать шаг
        border.setStep(value);
    },
    (value)=> {
        console.log("Timer Updated", value);
        // уменьшить бордер на шаг
        border.makeStep();
        timerInput.disabled = true;
        addButtonStyle(timerButton, "stop");
    },
    ()=>{
        console.log("Timer Stopped");
        removeButtonStyle(timerButton, "stop");
    },
    ()=>{
        console.log("Timer Finished");
        // сбросить дашофсет
        border.resetCircle();
        timerInput.disabled = false;
        removeButtonStyle(timerButton, "stop");
    },
    ()=>{
        removeButtonStyle(timerButton, "stop");
    });






