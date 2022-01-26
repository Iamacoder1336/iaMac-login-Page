function login() {

    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (uname == "iamac" && pass == "123456789") {
        location.assign("file:///C:/Users/iamac/Documents/iamac%20login%20page%20-%20Copy/page.html")
    }
    else {
        window.alert("login failed")
    }

}