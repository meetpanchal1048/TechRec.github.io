function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "admin"){
        alert("Login Successfull")
        window.open("../index.html");
    }
    else if (username == "hello" && password == "hello"){
        window.open("test.html")
    }
}