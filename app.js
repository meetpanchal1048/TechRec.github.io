const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index)=>{
        item.onmouseover = () => {
            menu.dataset.activeIndex = index ;
        }
    })


// ========================Login=========================

const button = document.getElementById("myButton")
const form = document.getElementById("myForm")

button.addEventListener("click", function () {
    form.style.display = "block";
})


function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "admin"){
        alert("Login Successfull")
    }
    else if (username == "hello" && password == "hello"){
        window.open("test.html")
    }
}