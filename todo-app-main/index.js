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
const auth_button = document.getElementById("authButton"); 
const auth_form = document.getElementById("authForm");

// Event listener for switching to the authentication form
auth_button.addEventListener("click", () => {
    loginForm.style.display = "none";
    auth_form.style.display = "block"; // Display the authentication form
    mainSite.style.display = "none";
});

// Event listener for going back to the login form from the authentication form
const backToLoginButton = document.getElementById("go_to_login");
backToLoginButton.addEventListener("click", () => {
    loginForm.style.display = "block"; // Display the login form
    auth_form.style.display = "none";
    mainSite.style.display = "none";
});

// Event listener for registration process
const registerButton = document.getElementById("go_to_login");
registerButton.addEventListener("click", async () => {
    const username = document.getElementById("username1").value; // Get the username input value
    const password = document.getElementById("password1").value; // Get the password input value
    const email = document.getElementById("email").value // get the email input value

    // Assuming you're making a POST request to create a user
    await fetch("http://127.0.0.1:8000/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email,
            username: username,
            password: password,
        }),
    });

    loginForm.style.display = "block";
    auth_form.style.display = "none"; // Hide the authentication form
    mainSite.style.display = "none";
});


// LOGIN
let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (response.ok) {
            let data = await response.json();

            localStorage.setItem("token", data.access); // Set a simple test value

            loginForm.style.display = "none";
            auth_form.style.display = "none";
            mainSite.style.display = "block";
        } else {
            console.error("Login failed");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    
});

