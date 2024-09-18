
//from sebmit reloading the page
//step-1 event handeler set
document.getElementById("btn-login").addEventListener("click",function(event){
    //preventDefault set 
    event.preventDefault();
    //get the phn number and the password
    const mobileNumber=document.getElementById("phn-number").value;
    const passwordNumber=document.getElementById("passwordNumber").value;
    //bad way to variable
    if(mobileNumber === "01322168910" && passwordNumber ==="1234" ){
        console.log("btn the locked");
        window.location.href='./home.html'
        
    }
    else if(mobileNumber === "01740995732" && passwordNumber ==="1234" ){
        console.log("btn the locked");
         window.location.href='./home.html'
        
    }
    else{
        alert("worng number or pin")
    }
    
})

