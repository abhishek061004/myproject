let username;
document.getElementById("mybtn").onclick= function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    age = document.getElementById("myage").value;
    age = Number(age)
    let currenttime = new Date
    let current_year = currenttime.getFullYear()
    console.log(current_year)
    age = current_year - age
    let d  = new Date();
    let time = d.getHours();
    let greet = time >= 12 ? "good afternoon" : "good morning";
    console.log(time);
    if (username == ""){
        alert("please enter your name");
    }
    else{
        document.getElementById("myh1").textContent=`${greet} ${username}  you are ${age-1} years old`;
    }
    
    if(age-1 < 18){
        alert("you must be above 18");
    }
};
let n = 0;
document.getElementById("myh2").textContent = `${n}`;
document.getElementById("incre").onclick = function(){
    n +=1;
    document.getElementById("myh2").textContent = `${n}`;
};
document.getElementById("decre").onclick = function(){
    n -=1;
    document.getElementById("myh2").textContent = `${n}`;
};
document.getElementById("reset").onclick = function(){
    n = 0;
    document.getElementById("myh2").textContent = `${n}`;
};
document.getElementById("ran").onclick = function(){
    let rannum;
    let min = 0;
    let max = 6;
    rannum = Math.floor(Math.random()*(max - min)+min+1);
    document.getElementById("myh3").textContent = `${rannum}`;
};
const mysubmit =  document.getElementById("mysubmit");
const subscribe = document.getElementById("subscribe");
const PayPal = document.getElementById("PayPal");
const MasterCard = document.getElementById("MasterCard");
const UPI = document.getElementById("UPI");

PayPal.onclick = function(){
    document.getElementById("Paymentlabel").textContent =  "enter PayPal number";
};
MasterCard.onclick = function(){
    document.getElementById("Paymentlabel").textContent =  "enter MasterCard number";
};
UPI.onclick = function(){
    document.getElementById("Paymentlabel").textContent =  "enter UPI  number";
};

mysubmit.onclick =  function(){
    let Payment = document.getElementById("payment").value;
    let mailid = Payment.slice(0,Payment.indexOf("@"));
    console.log(mailid);
    if (subscribe.checked){
        document.getElementById("myh5").textContent = `${mailid} you are subscribed\n`;
    }
    else{
        document.getElementById("myh5").textContent = `${mailid} you are not subscribed\n`;
    }
    if (PayPal.checked){
        document.getElementById("myh5").textContent += ` you are paying through PayPal`;
    }
    else if (MasterCard.checked){
        document.getElementById("myh5").textContent += ` you are through MasterCard`;
    }
    else if (UPI.checked){
        document.getElementById("myh5").textContent += ` you are paying through UPI`;
    }
    
    
};
const cel = document.getElementById("celsius");
const far = document.getElementById("fahrenheit");

cel.onclick = function(){
    document.getElementById("templabel").textContent = "enter the degrees in celsius";

};
far.onclick = function(){
    document.getElementById("templabel").textContent = "enter the degrees in fahrenheit";
};
let result;
document.getElementById("convert").onclick = function(){
    console.log(document.getElementById("temp").value);
    let temp = document.getElementById("temp").value;
    console.log(temp);
    temp = Number(temp);
    console.log(temp); 
    if(cel.checked){
        result = (temp * (9/5)) + 32;
    }
    else if(far.checked){
        result = (temp-32)*(5/9);
    }
    document.getElementById("ans").textContent = `${result}`;
};



