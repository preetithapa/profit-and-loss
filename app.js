var inputPrice=document.querySelector("#price");
var noOfStock=document.querySelector("#no-of-stock");
var outputBtn=document.querySelector("#price-btn");
var output=document.querySelector("#output");
var currentPrice=document.querySelector("#current-price")


function calculateProfitAndLoss(initial,quntity,current){
    if (initial>current) {
        var loss=(initial-current)*quntity;
        var lossPrcentage=(loss/initial)*100;
        output.innerText=`Hey loss is ${loss} and the parcent is ${lossPrcentage}% 😑`;
        output.style.color="red"
    }else if(current>initial){
        var profit=(current-initial)*quntity;
        var profitPrcentage=(profit/initial)*100;
        output.innerText=`Hey profit is ${profit} and the parcent is ${profitPrcentage}% 😇`;
        output.style.color="blue"

    }else{
        output.innerText="No pain  No Gain and No gain No pain !!";
        output.style.color="green"

    }
    
} 

function submitHandler(){
    var ip=Number(inputPrice.value);
    var quty=Number(noOfStock.value);
    var curr=Number(currentPrice.value);
    
    calculateProfitAndLoss(ip,quty,curr)  

}

// calculateProfitAndLoss(100,10,10)
// calculateProfitAndLoss(10,10,100)

outputBtn.addEventListener("click",submitHandler)
output.style.color="black"
