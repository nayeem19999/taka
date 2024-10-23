document.getElementById('submit').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    if(email === "nayeem@gmail.com" && pass === "Nayeem"){
        window.location.href = "TakaPoysha.html";
    }
    else{
        alert("tmr email and password kintu vul. sabdhan . Taka churi korte asco?")
    }
})