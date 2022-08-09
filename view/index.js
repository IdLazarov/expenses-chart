
const data = fetch("../data.json")
.then(response => {
   return response.json();
})
.then(data => addDays(data));

const weekList = document.querySelector(".chart-list");
const weekdaysList = document.querySelector(".days-list");
const d = new Date();
let dayOfTheWeek = d.getDay();

const addDays = (data) => {

    data.map((dataItem, index)=>{
        // console.log(dataItem.day);
        // console.log(dataItem.amount);
        const amountList = document.createElement("li");
        const dayBalance = document.createElement("p");
        dayBalance.value = `$${dataItem.amount.toString()}`;
        console.log(dayBalance.value);
        dayBalance.style.cssText = `background-color: ${"#4a5354"};color:"#edf4f5";width:50px;height:20px;position:relative;top:-45px;border-radius:0.3rem;visibility:hidden;`;
        amountList.appendChild(dayBalance); 
        if(index === dayOfTheWeek){
            amountList.style.cssText = `background-color: ${"#76B5BC"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`;
            amountList.onmouseenter = ()=>{
                
                dayBalance.style.visibility = `visible`;
                amountList.style.cssText = `background-color:${"#8ad3db"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};
            amountList.onmouseout = ()=>{
                dayBalance.style.visibility = `hidden`;
                amountList.style.cssText = `background-color:${"#76B5BC"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};

        } else{
            amountList.style.cssText = `background-color: ${"#EC775F"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`;
            amountList.onmouseenter = ()=>{
        
                dayBalance.style.visibility = `visible`;
                amountList.style.cssText = `background-color:${"#F8E9DD"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};
            amountList.onmouseout = ()=>{
                dayBalance.style.visibility = `hidden`;
                amountList.style.cssText = `background-color:${"#EC775F"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};
        }
        

        // amountList.onmouseenter = ()=>{amountList.style.cssText = `background-color:${"#F8E9DD"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};
        // amountList.onmouseout = ()=>{amountList.style.cssText = `background-color:${"#EC775F"};margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;border-radius:0.3rem`};
        
        weekList.appendChild(amountList); 
        

        const daysList = document.createElement("p");
        const days = document.createTextNode(dataItem.day);
        days.innerHTML = `p {width:10vw;max-width:50px;margin:0;}`
        daysList.appendChild(days);
        weekdaysList.appendChild(daysList); 


        
    })
    

}

// this.onmouseover = ()=>{amountList.style.cssText = `background-color:${"#76B5BC"}`};
