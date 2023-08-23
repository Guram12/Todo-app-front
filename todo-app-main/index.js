let image=document.querySelector(".moon");
let background=document.querySelector('.background');
let dark=document.querySelectorAll('.dark');
let main_text=document.querySelectorAll(".main-text")
let checkboxitem=document.querySelectorAll(".checkbox_item")
let ultag=document.querySelector(".ul-tag");
let input=document.querySelector(".input_text")
let num = 0;

let cross=document.querySelectorAll(".cross")



image.addEventListener('click', () => {
    if (num === 0){
    document.body.style.backgroundColor='#171823';
    background.style.backgroundImage=' url("./images/bg-desktop-dark.jpg")';
    image.src="./images/icon-sun.svg";

    for (let i =0 ; i < dark.length; i ++){
        dark[i].classList.add("darkelement");
    }
    for(let z=0; z<main_text.length; z++){
        main_text[z].style.color='#C8CBE7'
    }
    for(let t=0; t<checkboxitem.length; t++){
        checkboxitem[t].style.backgroundColor='#25273d'
    }
    num = 1;
    }else{
        document.body.style.backgroundColor='rgba(250,250,250,1)';
        background.style.backgroundImage=' url("./images/bg-desktop-light.jpg")';
        image.src="./images/icon-moon.svg";
    
        for (let i =0 ; i < dark.length; i ++){
            dark[i].classList.remove("darkelement");
        }
        for(let z=0; z<main_text.length; z++){
            main_text[z].style.color='#494c6b'
        }
        for(let t=0; t<checkboxitem.length; t++){
            checkboxitem[t].style.backgroundColor='#f7fcfc'
        num = 0;
        }
    }
}
);



const loginForm = document.getElementById("loginForm");
const mainSite = document.getElementById("mainSite");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
    loginForm.style.display = "none";
    mainSite.style.display = "block";
});



















































































// let arr = [
//     {
//         text:"first text",
//         checked:"false"
//     },
//     {
//         text:"second text",
//         checked:"true"
//     },
//     {
//         text:"third text",
//         checked:"false"
//     },
//     {
//         text:"fourth tag",
//         checked:"false"
//     }
// ]

// function todos(){
//     for (let u=0; u<arr.length; u++ ) {
//         ultag.innerHTML+=`<li>
//         <div class="flex-cross">
//         <div class="checkbox_item">
//             <input class="checkbox1" type="checkbox">
//             <div class="input_div">  </div>

//         </div>
//         <h3 class="main-text">${arr[u].text}</h3> 
//         </div>
//         <img class="cross" src="./images/icon-cross.svg"/>
//         </li>`
//     }
// }
// todos();


// function deletetodo(){
//     for(let r=0; r<cross.length; r++){
//         cross[r].addEventListener("click", (e) =>{
//             let newarray= arr.filter((item,id)=>item.text!=e.target.parentElement.children[0].children[1].textContent)
//             console.log(e.target.parentElement)
//             todos()
//         })
//     }
// }
// deletetodo()



// function addtodo(){
//     ultag.innerHTML+=`<li>
//         <div class="flex-cross">
//         <div class="checkbox_item">
//             <input class="checkbox1" type="checkbox">
//             <div class="input_div">  </div>

//         </div>
//         <h3 class="main-text">${arr[arr.length-1].text}</h3> 
//         </div>
//         <img class="cross" src="./images/icon-cross.svg"/>
//         </li>`
// }


// input.addEventListener("keyup", (e)=>{
//     if (e.key=="Enter" & e.target.value!==""){
//         arr.push({
//             text:e.target.value,
//             checked:false
//         });
//         addtodo();
//         e.target.value=""
//         cross=document.querySelectorAll(".cross")
//         console.log(cross)
//         deletetodo()
//     }
// })





























































{/* <li>
  <div class="flex-cross">
    <div class="checkbox_item">
    <input class="checkbox1" type="checkbox">
    <div class="input_div">  </div>
    </div>
    <h3 class="main-text"> Complite online JavaScript course</h3> 
  </div>
  <img src="./images/icon-cross.svg"/>
</li> */}



