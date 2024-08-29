function format(elem){
    elem.value = elem.value.replaceAll("&", "")
}

window.onload = function(){
    document.getElementById("goto_signup").addEventListener("click", function(){
        document.getElementById("login").style.display = "none"
        document.getElementById("signup").style.display = "block"
    }, false)

    document.getElementById("goto_login").addEventListener("click", function(){
        document.getElementById("signup").style.display = "none"
        document.getElementById("login").style.display = "block"
    }, false)

    document.getElementById("signup_btn").addEventListener("click", function(){
        let username = document.getElementById("signup_username").value
        let password = document.getElementById("signup_password").value
        fetch(window.location.origin+"/signup/?"+username+"&&&&&"+password)
            .then((response) => response.json())
            .then((data) => alert(data.message))
    }, false)

    document.getElementById("login_btn").addEventListener("click", function(){
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        window.location.href = window.location.origin + "/?" + username + "&&&&&" + password
    }, false)
}