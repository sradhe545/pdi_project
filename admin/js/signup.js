
document.querySelector("#submit").addEventListener("click", function(){
    let user=JSON.parse(localStorage.getItem("pdi_admin_info"))|| []
    let obj={
        username:document.querySelector("#username").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    let emailCheck=obj.email.split("@")[1]
    if(emailCheck!="admin.com")
    {
        alert("You are not authorized to Admin")
    }
    else{
        let existingUser=user.find((el)=>el.email==obj.email)
        if(existingUser){
            alert("User already exists")
        }
        else{
            user.push(obj)
            localStorage.setItem("pdi_admin_info",JSON.stringify(user))
            window.location.href="../html/login.html"
        }
    }
})


