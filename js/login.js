console.log("LoginJs Loader Done...")
function obtain(){
    if(login_cookie() == true){
        console.log("cookie验证成功!")
        window.location.href="/pages/admin/admin.html";
    }else{
        console.log("cookie验证no!")
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        set_cookie(forge_sha256(username),forge_sha256(password))
        login(username.value, password.value)
    }
}
function login(username, password) {
    var un = forge_sha256(username);
    var pd = forge_sha256(password);
    var uns = "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2";
    var pds = "17ad10e9a85f3f6e50b233b9d26ccde7a4f1d3b7a4c5160a5e63ff965d9448cb";
    if(un == uns){
        if(pd == pds){
            window.location.href="/pages/admin/admin.html";
        }else{
            window.alert("用户名或密码错误");
        }
    }else{
        window.alert("用户名或密码错误");
    }
}
function login_cookie(){
    var cookie = document.cookie;
    console.log(cookie)
    if(cookie != null & cookie != ""){
        var cookie_split1 = cookie.split(";");
        var username_cookie =  cookie_split1[0].split("=")[1];
        var password_cookie =cookie_split1[1].split("=")[1];
        if(forge_sha256(username_cookie) == login.uns){
            if(forge_sha256(password_cookie) == login.pds){
                login(username_cookie,password_cookie);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}
function set_cookie(username_sha256, password_sha256){
    document.cookie = "username=" + username_sha256 + ";" + "password=" + password_sha256;
    console.log(document.cookie)
}