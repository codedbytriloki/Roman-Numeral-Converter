
function convertRoman(){
  const numberInput = parseInt(document.getElementById("number-input").value);
 const output = document.getElementById("output");

 if(isNaN(numberInput) || numberInput < 1 || numberInput > 3999){
  output.textContent = "Please enter a number between 1 and 3999";
  output.style.color = '#dc2626';
  return;
 }

 const romanMap = [
  {value : 1000, symbol : "M"},
  {value : 900, symbol : "CM"},
  {value : 500, symbol : "D"},
  {value : 400, symbol : "CD"},
  {value : 100, symbol : "C"},
  {value : 90, symbol : "XC"},
  {value : 50, symbol : "L"},
  {value : 40, symbol : "XL"},
  {value : 10, symbol : "X"},
  {value : 9, symbol : "IX"},
  {value : 5, symbol : "V"},
  {value : 4, symbol : "IV"},
  {value : 1, symbol : "I"},
 ]

 let roman = "";
 let current = numberInput;

 for(let i = 0; i < romanMap.length; i++){
    while(current >= romanMap[i].value){
      roman += romanMap[i].symbol;
      current -= romanMap[i].value;
    }
 }
 

 output.textContent = roman;
 output.style.color = '#1e293b';
}