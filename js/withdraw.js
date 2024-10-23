document.getElementById('Withdraw').addEventListener('click',function(){
    const WithdrawInput = document.getElementById('withdrawIn');
    const withdrawInputValue = WithdrawInput.value;
    const covertedWithdraw = parseInt(withdrawInputValue);
    const withdrawParagraph = document.getElementById('withdrawParagraph');
    const withdrawParagraphValue = withdrawParagraph.innerText;
    const ConvertedWithdrawInput = parseInt(withdrawParagraphValue)
    const result = covertedWithdraw + ConvertedWithdrawInput;
    
    WithdrawInput.value = ''

    const withdrawTotal = document.getElementById('totalParagraph');
    const withdrawTotalValue = withdrawTotal.innerText;
    const withdrawTotalNumber = parseInt(withdrawTotalValue);
    const result2=withdrawTotalNumber - withdrawInputValue;


    if(withdrawInputValue>withdrawTotalNumber){
        WithdrawInput.innerText = "00"
    }
    else{
        withdrawParagraph.innerText = result
    }

    if(result2 <= 0){
        alert('You do not have sufficiant balance')
    }
    else{

        
        withdrawTotal.innerText = result2
    }

    console.log(withdrawTotalValue)
})