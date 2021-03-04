class CalcControler{

    constructor(){
        this._operation = [];
        this._displayEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalcEl = document.querySelector("#display");

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
    
    getLastOperation(){
        let newVar = this._operation[this._operation.length-1];
        return newVar;
    }


    isOperator(value){
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1); 
    }
     
    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;

    }

    
    pushOperation(value){
        this._operation.push(value);
        if(this._operation.length > 3){
            
            this.calc();

        }
    }
    
    calc(){
        let last = this._operation.pop();
        
        let result = eval(this._operation.join(""));
        this._operation = [result, last]
        document.querySelector("#display").innerHTML = result;

    }
    
    
    setLastNumberToDisplay(){
        let lastNumber;
        
        for(let i = this._operation.length-1; i >= 0; i--){
            if(!this.isOperator(this._operation[i])){
                
                lastNumber = this._operation[i];

                break;
            }
        }
        document.querySelector("#display").innerHTML = lastNumber;
    }
    
    
    addOperation(value){

        if (isNaN(this.getLastOperation())){

            if(this.isOperator(value)){

                this.setLastOperation(value);
                //troca o operador
            }else if(isNaN(value)){

                console.log(value);

            } else {

                this.pushOperation(value);
                this.setLastNumberToDisplay();                
            }


        }else {
            
            if(this.isOperator(value)){
                
                this.pushOperation(value);
                
            } else {
                     let newValue = this.getLastOperation().toString() + value.toString();
                    this.setLastOperation(parseInt(newValue));
                
                this.setLastNumberToDisplay();
            }}

        this.getLastOperation();

    
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
                this.addOperation('%');
                console.log(this._operation);
                break;
            case 'soma':
                this.addOperation('+');
                console.log(this._operation);
                break;
            case 'divisao':
                this.addOperation('/');
                console.log(this._operation);
                break;
            case 'multiplicacao':
                this.addOperation('*');
                console.log(this._operation);
            break;
            case 'subtracao':
                this.addOperation('-');
                console.log(this._operation);
                break;
            case 'igual':
                this.addOperation('=');
                console.log(this._operation);
                break;
            case 'ponto':
                this.addOperation('.');
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
            default:
            this.setError();                
            break;
        }}
    
    

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, "click drag", e =>{
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log("entrada: " + textBtn) ;
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
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }


    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}
