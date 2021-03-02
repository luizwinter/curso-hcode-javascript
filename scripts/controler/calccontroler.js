class CalcControler{

    constructor(){
        this._operation = [];
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
    
    
    addOperation(value){
        this._operation.push(value);
    }
    
    clearAll(){
        this._operation = [];
    }
        cancelEntry(){
        this._operation.pop();
    }
    setError(){
        this._displayEl = "ERROR";
    }
    
    
    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.cancelEntry();
                console.log(this._operation);
                break;
            case 'porcento':
                console.log(this._operation);
                break;
            case 'soma':
                console.log(this._operation);
                break;
            case 'divisao':
                console.log(this._operation);
                break;
            case 'multiplicacao':
                console.log(this._operation);
            break;
            case 'subtracao':
                console.log(this._operation);
                break;
            case 'igual':
                console.log(this._operation);
                break;
            case 'ponto':
                console.log(this._operation);
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.addOperation(parseInt(value));
                console.log(this._operation)
                
                
                  
            default:
            this.setError();                
            break;
        }}
    
    

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, "click drag", e =>{
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log(textBtn) ;
                
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            });


        });
        
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
