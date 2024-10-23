document.getElementById('deposit').addEventListener('click',function(){
    
    const depositInput = document.getElementById('depositIn');
    const depositInputValue = depositInput.value;
    const depositInputValueNumber = parseInt(depositInputValue)

    if(depositInput.value === ''){
        document.getElementById('deposit').setAttribute('disabled')
    }
    else{
        document.getElementById('deposit').removeAttribute('disabled')
    }

    const depositParagraph = document.getElementById("depositParagraph");
    const depositParagraphInnerText = depositParagraph.innerText;
    const depositParagraphInnerTextNumber = parseInt(depositParagraphInnerText)
    const result = depositInputValueNumber + depositParagraphInnerTextNumber;
    depositParagraph.innerText = result

    

    const totalParagraph = document.getElementById('totalParagraph')
    const totalParagraphInnerText = totalParagraph.innerText;
    const totalParagraphInnerTextNumber = parseInt(totalParagraphInnerText)

    const totalResult = depositInputValueNumber + totalParagraphInnerTextNumber;
    totalParagraph.innerText = totalResult

    console.log(typeof totalParagraphInnerTextNumber);
    

})

