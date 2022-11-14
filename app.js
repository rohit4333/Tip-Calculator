const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const res = document.querySelector("#result");
const tip = document.querySelector("#tip");
const root = document.documentElement;
//root.style.setProperty('--primary-color', 'red')

function calc(){
    if(bill.value==""){
        alert("Please enter Bill Amount!");
    }
    else if(tip.value=="none"){
        alert("Select Service Quality!")
    }
    else{
        if(people.value<=0) people.value = 1;
        const percentage = +tip.value;
        const billamount = +bill.value;
        const share = +people.value;

        const calcTip = (((billamount*percentage)/100)/share).toFixed(2); 
        
        
        res.innerHTML = calcTip + " Rs. for Each."

    }
    

}
