class Border {
    constructor(circle){
        this.circle = circle;
        this.currentDashOffset = parseFloat(this.circle.getAttribute("stroke-dashoffset"));
    }
    setStep(value){
        this.step = parseFloat(((754/value)*.05*(-1)).toFixed(2));
        console.log(this.step);
    }
    makeStep(){
        this.currentDashOffset = this.currentDashOffset + this.step;
        this.circle.setAttribute("stroke-dashoffset", +this.currentDashOffset.toFixed(2));
        console.log(this.currentDashOffset.toFixed(2));
    }
    resetCircle(){
        this.circle.setAttribute("stroke-dashoffset", 0);
        this.currentDashOffset = 0;
    }
}

// каждый раз при обновлении таймера уменьшать stroke-dashoffset на
// (currentDashOffset + (currentDashArray/value)*.05)*(-1)
// 754 - 5
// x - .05
// 754/5 = x/.05
// 150.8 = x/.05

