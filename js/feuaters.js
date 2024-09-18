// show the cashOut From
document.getElementById("show-btn-cashOut").addEventListener("click",function(){
    //show the cashout From
    document.getElementById("cashout-from" ).classList.remove("hidden")
    //remove the addMoney FRom
    document.getElementById("addmoney-from").classList.add("hidden")
    
})

//show the addMoney From
document.getElementById("show-btn-addMoney").addEventListener("click",function(){
    //show the addMoney from
    document.getElementById("addmoney-from").classList.remove("hidden");

    //remove the cashout From
    document.getElementById("cashout-from").classList.add("hidden")
})