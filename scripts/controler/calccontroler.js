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
    
<<<<<<< Updated upstream
    calc(){
        let last = this._operation.pop();
=======
    
    getResult(){
        return eval(this._operation.join(""));
    }
    
    
    
    
    calc(){
        let last = '';
        
        this._lastOperator = this.getLastItem(true);
        
        if(this._operation.length < 3){
            
            let firstItem = this._operation[0];
            this._operation = [firstItem, this._lastOperator, this._lastNumber];
            
        }

        
        if(this._operation.length > 3){
            
            last = this._operation.pop();
            
            this._lastNumber = this.getResult();

        }else if(this._operation.length == 3){
                        
            this._lastNumber = this.getLastItem(false);

        }
        
        console.log("lastoperator" + this._lastOperator);
        console.log("lastnumber" + this._lastNumber);

        
        
        let result = this.getResult();

        
        if(last == '%'){
            
            result = result /100;
            this._operation = [result];            
            
        }else {
            
            this._operation = [result]
            
            if(last){
                this._operation.push(last);
            }
        }
>>>>>>> Stashed changes
        
        let result = eval(this._operation.join(""));
        this._operation = [result, last]
        document.querySelector("#display").innerHTML = result;

    }
    
    
<<<<<<< Updated upstream
=======
    getLastItem(isOperator = true){
        
    }
    
    
    getLastItem(isOperator = true){
        let lastItem ;
         for(let i = this._operation.length-1; i >= 0; i--){
             
             if(isOperator){
                 
                    if(this.isOperator(this._operation[i])){
                    
                     lastItem = this._operation[i];

                     break;
                 }
                 
             }else{
                 
                      if(!this.isOperator(this._operation[i])){
                    
                     lastItem = this._operation[i];
                          

                     break;
                 }
                 
             }
             
             
         }

        if(!lastItem){
            
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;
            
        }
        
        return lastItem;
        
    }
    
>>>>>>> Stashed changes
    setLastNumberToDisplay(){
        let lastNumber = this.getLastItem(false);
        
<<<<<<< Updated upstream
        for(let i = this._operation.length-1; i >= 0; i--){
            if(!this.isOperator(this._operation[i])){
                
                lastNumber = this._operation[i];

                break;
            }
        }
=======
        
        if(!lastNumber) lastNumber = 0;
        
>>>>>>> Stashed changes
        document.querySelector("#display").innerHTML = lastNumber;
    }
    
    
    addOperation(value){

        if (isNaN(this.getLastOperation())){

            if(this.isOperator(value)){

                this.setLastOperation(value);
                //troca o operador
            }else {

                this.pushOperation(value);
                this.setLastNumberToDisplay();                
            }


        }else {
            
            if(this.isOperator(value)){
                
                this.pushOperation(value);
                
            } else {
                     let newValue = this.getLastOperation().toString() + value.toString();
                    this.setLastOperation(newValue);
                
                this.setLastNumberToDisplay();
            }}

        this.getLastOperation();

    
    }
    
    clearAll(){
        this._operation = [];
<<<<<<< Updated upstream
=======
        this._lastNumber= '';
        this._lastOperator= '';
        this.setLastNumberToDisplay();
>>>>>>> Stashed changes
    }
        cancelEntry(){
        this._operation.pop();

    }
    setError(){
        this._displayEl = "ERROR";
    }
    
    
    addDot(){
        
        let lastOperation = this.getLastOperation();
        
        if(typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1)
            return;

        if(this.isOperator(lastOperation) || !lastOperation){
            this.pushOperation('0.');
            console.log("nao parou1");
        } else{
            
            this.setLastOperation(lastOperation.toString() + '.');
                    console.log("nao parou2");

            
        }
            this.setLastNumberToDisplay();
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
                this.addDot();
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
