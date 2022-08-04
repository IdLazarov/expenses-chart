
const data = fetch("../data.json")
.then(response => {
   return response.json();
})
.then(data => addDays(data));

const weekList = document.querySelector(".chart-list");
const weekdaysList = document.querySelector(".days-list");

const addDays = (data) => {
    for(let index = 0; index < data.length-1; index++){
        console.log(data[index].day);
        console.log(data[index].amount);
        const amountList = document.createElement("li");
        let sheet = document.createElement('style')
        sheet.innerHTML = `li {background-color: ${"#76b5bc"};height:${data[index].amount*2}px;width:10vw;max-width:50px;border-radius:0.5rem}`;
        document.body.appendChild(sheet);
        // const textnode = document.createTextNode(data[index].amount);
        // node.appendChild(textnode);
        weekList.appendChild(amountList); 
        const daysList = document.createElement("li");
        const days = document.createTextNode(data[index].day);
        daysList.appendChild(days);
        weekdaysList.appendChild(days); 
    }
}

