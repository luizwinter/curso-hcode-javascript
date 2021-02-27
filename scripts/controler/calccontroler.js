class CalcControler{

    constructor(){
        this._displayEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.inicialize();
        this.initButtonsEvents()
    }


    inicialize(){
        this.setDisplayTime();


        setInterval(()=>{
            this.setDisplayTime();

        }, 1000);
    }


    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, "click drag", e =>{
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            })


        })
        
    }



    setDisplayTime(){
        this.displayDate = this.currentDate.toLocaleDateString("pt-br");
        this.displayTime = this.currentDate.toLocaleTimeString("pt-br");

    }



    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
         this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;

    }


    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }


    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

}