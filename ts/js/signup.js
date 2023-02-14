
document.querySelector("#submit").addEventListener("click", function(){
    let user=JSON.parse(localStorage.getItem("pdi_ts_info"))|| []
    let obj={
        username:document.querySelector("#username").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        toj:new Date()
    }
    let emailCheck=obj.email.split("@")[1]
    if(emailCheck!="ts.com")
    {
        alert("You are not authorized to Teaching Staff")
    }
    else{
        let existingUser=user.find((el)=>el.username==obj.username ||el.email==obj.email)
        if(existingUser){
            alert("User already exists")
        }
        else{
            user.push(obj)
            localStorage.setItem("pdi_ts_info",JSON.stringify(user))
            window.location.href="../html/login.html"
             
        }
    }

})

