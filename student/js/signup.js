
document.querySelector("#submit").addEventListener("click", function(){
    let user=JSON.parse(localStorage.getItem("pdi_stu_info"))|| []

    let obj={
        username:document.querySelector("#username").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        profilepic:document.querySelector("#profilepic").value,
        gender:document.querySelector("#gender").value,
        role:document.querySelector("#role").value,
        dob:document.querySelector("#dob").value,
        state:document.querySelector("#state").value,
        city:document.querySelector("#city").value,
        mobile:document.querySelector("#mobile").value,
        toj:new Date()

    }
    let emailCheck=obj.email.split("@")[1].split(".")[1]
    console.log(emailCheck);
    if(emailCheck=="in" || emailCheck=="com")
    {
        let existingUser=user.find((el)=>el.email==obj.email)
        if(existingUser){
            alert("User already exists")
        }
        else{
            user.push(obj)
            localStorage.setItem("pdi_stu_info",JSON.stringify(user))
            window.location.href="../html/login.html"
        }
    }
    else{
        alert("This is not valid Email Id")
    }
    
})
