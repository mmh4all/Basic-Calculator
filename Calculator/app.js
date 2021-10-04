let inputField;
      let inputValues = "";
      let result;
      let itemArray = [];
      let output = "";
      let calculateResult;
      let idx;
      let prevIdx;
      let nextIdx;
    
      function enterInput(btnValue){
        inputField = document.getElementById("input");
        inputValues = inputField.value += btnValue;
        inputField.value = inputValues;
        inputField.focus();
        inputField.setSelectionRange(inputField.value.length, inputField.value.length);
      }
      function outputResult()
            {
              itemArray = inputValues.split(' ');
              
              calculate();
              
              output = output.replaceAll('π','3.14159');
              result = eval(output);
              document.getElementById("input").value = result;
            }
    
    
      // When C Button Clicked
      function clearInput(){
        document.getElementById("input").value = "";
        result = 0;
      }
    
      function calculate()
      {
                for(let i of itemArray){
                  idx = itemArray.indexOf(i);
                  prevIdx = parseFloat(itemArray[idx-1]);
                  nextIdx = parseFloat(itemArray[idx+1]);
    
                  if(i == "^"){
                  calculateResult = Math.pow(prevIdx, nextIdx);
                  console.log(calculateResult);
                  removeItemsFromArray();
                  }
    
                  if(i == "√"){
                  calculateResult = Math.sqrt(nextIdx);
                  itemArray[idx] = calculateResult;
                  itemArray[idx + 1] = "#";
                  itemArray = itemArray.filter(item => item !== "#");
                  }
    
                }
                output = itemArray.join('');
             
      }
    
      function removeItemsFromArray()
      {
        itemArray[idx] = calculateResult;
        itemArray[idx - 1] = "#";
        itemArray[idx + 1] = "#";
        itemArray = itemArray.filter(item => item !== "#");
      }
    
    
      // ToDo: Remove last entry
      function backSpace()
      {
        var output = document.getElementById("input").value;
        document.getElementById("input").value = output.substr(0,output.length-1);
        document.getElementById("input").value = document.getElementById("input").value.trim();
      }