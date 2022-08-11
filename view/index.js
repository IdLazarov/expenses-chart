
const data = fetch("../data.json")
.then(response => {
   return response.json();
})
.then(data => addDays(data));

const weekList = document.querySelector(".chart-list");
const weekdaysList = document.querySelector(".days-list");
const d = new Date();
let dayOfTheWeek = d.getDay();
let mobileSizeEnd = window.matchMedia("(max-width: 414px)")
let windowWidth = window.innerWidth;


const addDays = (data) => {

    
    data.map((dataItem, index)=>{
        let listItemStyle = `margin:5px;height:${dataItem.amount*2}px;width:10vw;max-width:50px;max-height:150px;border-radius:0.3rem;position:relative;`;
        let dayBalanceStyle = `background-color: ${"#4a5354"};color:"#edf4f5";width:15vw;max-width:60px;height:25px;padding-top:5px;position:relative;top:-55px;right:10px;border-radius:0.3rem;visibility:hidden;text-align:center;z-index:100;`;
        // console.log(dataItem.day);
        // console.log(dataItem.amount);
        console.log(windowWidth);
        const amountList = document.createElement("li");
        const dayBalance = document.createElement("p");
        const dayBalanceValue = document.createTextNode(`$${dataItem.amount}`);
        const textWrapper = document.createElement("span");
        textWrapper.appendChild(dayBalanceValue);  
        textWrapper.style.color = "white"
        dayBalance.appendChild(textWrapper);
        
        dayBalance.style.cssText = `${dayBalanceStyle}`;
        amountList.appendChild(dayBalance); 
        if(index === dayOfTheWeek){
            amountList.style.cssText = `background-color: ${"#76B5BC"};${listItemStyle}`;
            amountList.onmouseenter = ()=>{
                
                dayBalance.style.visibility = `visible`;
                amountList.style.cssText = `background-color:${"#8ad3db"};${listItemStyle}`};
            amountList.onmouseout = ()=>{
                dayBalance.style.visibility = `hidden`;
                amountList.style.cssText = `background-color:${"#76B5BC"};${listItemStyle}`};

        } else{
            amountList.style.cssText = `background-color: ${"#EC775F"};${listItemStyle}`;
            amountList.onmouseenter = ()=>{
        
                dayBalance.style.visibility = `visible`;
                amountList.style.cssText = `background-color:${"#F8E9DD"};${listItemStyle}`};
            amountList.onmouseout = ()=>{
                dayBalance.style.visibility = `hidden`;
                amountList.style.cssText = `background-color:${"#EC775F"};${listItemStyle}`};
        }
        

        
        weekList.appendChild(amountList); 
        

        const daysList = document.createElement("p");
        const days = document.createTextNode(dataItem.day);
        daysList.style.cssText = `width:10vw;max-width:50px;margin:0;position:absolute;bottom:-30px;text-align:center;opacity:0.7;`
        daysList.appendChild(days);
        amountList.appendChild(daysList); 


        
    })
    

}

// this.onmouseover = ()=>{amountList.style.cssText = `background-color:${"#76B5BC"}`};
