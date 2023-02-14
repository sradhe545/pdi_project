document.querySelector("#submit").addEventListener("click", function(){
    let user=JSON.parse(localStorage.getItem("pdi_admin_info"))|| []

    let obj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    
        let findUser=user.find((el)=>el.email==obj.email && el.password==obj.password)
        if(findUser){
            window.location.href="../html/dashboard.html"
        }
        else{
            alert("Wrong Credentials! Please try again")
        }
    
})

