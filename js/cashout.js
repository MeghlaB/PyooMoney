//cashOut money ar js DOM
//event handelar
document.getElementById("btn-cashOut").addEventListener("click",function(event){
    //predefault set
    event.preventDefault();
    const cashOut=document.getElementById("cashout-money").value;
    const cashOutPinNumber=document.getElementById("cashout-money-pin-number").value;
    // console.log(cashOut,cashOutPinNumber);
    if(cashOutPinNumber ==="1234"){
        const Balance=document.getElementById("Balance").innerText;
        const money=parseFloat(cashOut);
        const currentBlance=parseFloat(Balance);
        //set the money
        const newBalance=currentBlance-money;
        document.getElementById("Balance").innerText=newBalance; 
    }
    else{
        alert('wrong pin number')
    }
})