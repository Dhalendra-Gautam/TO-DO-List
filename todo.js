let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    console.log(inp.value);

    let item = document.createElement("li");  //list banai(new element)
    item.innerText = inp.value;  //usme input ki value dal di

    let delBtn = document.createElement("button");  //delete button banai
    delBtn.innerText = "delete";// uske andr ye likh diya
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""; //isse add task pe click karne pe input me likha hut hat jaega
    
})

// this below code se bas existing element pe event listeners apply hoge  hence this code is of no use
// let delBtns = document.querySelectorAll(".delete");
// for( let delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener("click", function (event) { //delete ka parent li hai aur ul bhi kisi pe bhi kar sakte the hamne ul liya hai 
    if(event.target.nodeName =="BUTTON"){    //target event ki ek property hoti hai jo batati hai konsi cheez click hui hai. and iski bhi ek property hoti hai nodeName jo type batati hai element ka (e.g list,button) hame button pe click karne pe delete karwana hai therefor given this condition
        let listItem = event.target.parentElement;  // target hai delete and uska parent element hai list ham use delete karwa dege hence stored in listItem
        listItem.remove();
        console.log("deleted");
}
})