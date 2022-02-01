
var isDotPressed = false; //flag to detect if Dot is pressed
var value1 ="", value2 ="", Symbol = "";
var reqVal2 = false;

function buttonclicked(butClickedValue){
    // alert("i got here.\nYou clicked => " + butClickedValue);
    butClickedValue = butClickedValue.toLowerCase();
    var result = "";
    var screen = document.getElementById("screen");
    //Get the value on the screen
    var screenval = screen.textContent;

    switch(butClickedValue){
        case "on/off":
            
            if(screenval == ""){ //screen in off state
                result = "0.";
            }else{ //it means its in ON state
                    result = "";
            }
            resetAllFields();
            break;
        case "clr":
            result = "0.";
            resetAllFields();
            break;
        case "del":
            var noOfChar2Remove = (screenval.indexOf(".")==screenval.length-1 ? 2 : 1);
            screenval = screenval.substring(0, screenval.length-noOfChar2Remove); 
            if(screenval==""){
                resetAllFields();
                
            } 
            screenval = (screenval=="" ? "0" : screenval);
            result = screenval + add_dot_or_not(screenval);

            break;
        case "9": case "8": case "7": case "6": case "5": case "4":
        case "3": case "2": case "1": case "0":
            if(screenval == "0." && !isDotPressed){
                screenval = "";
            }
            if(reqVal2){
                screenval ="";
                reqVal2 = false; //Reset d flag
            }
            // screenval = (screenval.indexOf(".") == (screenval.length-1) && !isDotPressed ? screenval.replace(".", "") : screenval); //tenary operator
            screenval += butClickedValue;
            result = screenval + add_dot_or_not(screenval);
            break;
        case ".":
            result = screenval + add_dot_or_not(screenval);
            isDotPressed = true; //set the flag
            break;
        case "/": case "*": case "-": case "+":
            if (value1 ==""){
                value1 = goStripDot(screenval);
                symbol = butClickedValue;
                reqVal2 = true;
                return;
            }else if(value1 != "" && value2 == ""){
                if(symbol==""){
                    symbol = butClickedValue;
                    reqVal2 = true;
                    return;
                }
                value2 =goStripDot(screenval);
                result = eval(value1 + symbol + value2);
                result += add_dot_or_not(result.toString());

                value1 = goStripDot(result);
                value2 ="";
                symbol = butClickedValue;
                reqVal2 = true; //set d flag
            }
            break;
        case "=":
            if(value1 == ""){
                return;
            }else if(value1 != "" && value2 ==""){
                value2 =goStripDot(screenval);
                result = eval(value1 + symbol + value2);
                result += add_dot_or_not(result.toString());

                symbol ="";
                value1 = goStripDot(result);
                value2 = "";
                reqVal2 = true; //set d flag
            }
                
    }
    // Updating our screen with a result
    screen.textContent = result;
}
function add_dot_or_not(data2process){
    return(data2process.indexOf(".")== -1 ? "." : "");
}
function goStripDot(dVal2Strip){
    var strippedVal  = (dVal2Strip.indexOf(".") == (dVal2Strip.length-1) && !isDotPressed ? dVal2Strip.replace(".", "") : dVal2Strip);
    return strippedVal;
}
function resetAllFields(){
    isDotPressed="";
    value1 ="";
    value2="";
    symbol ="";
    reqVal2 = false;
}
