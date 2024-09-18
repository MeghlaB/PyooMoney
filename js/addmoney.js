
//add money ar js DOM
//event handelar
document.getElementById("btn-add-money").addEventListener("click",function(event){
  //preventDefault set 
  event.preventDefault();
  //addmoney ar pinNumber and amount
  const amountNumber=document.getElementById("add-money").value;
  const pinNumber=document.getElementById("add-money-pin-number").value;
  if(pinNumber === "1234"){
    const amountBlance=document.getElementById("Balance").innerText;
    const addMoney=parseFloat(amountNumber);
    const currentBlance=parseFloat(amountBlance);
    const newBalance=addMoney+currentBlance;
    document.getElementById("Balance").innerText=newBalance  
  }
  else{
    alert("wrong pin number")
  }
})
