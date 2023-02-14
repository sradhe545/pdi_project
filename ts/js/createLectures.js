
document.querySelector("#submit").addEventListener("click", function(){
  let lectures=JSON.parse(localStorage.getItem("lect_detail"))||[]
    let obj={
        video:document.querySelector("#video").value,
        title:document.querySelector("#title").value,
        description:document.querySelector("#description").value,
        role:document.querySelector("#role").value,
        timeOfCreation:new Date(),
        createdBy:JSON.parse(localStorage.getItem("pdi_ts")).username

    }
           lectures.push(obj)
          localStorage.setItem("lect_detail",JSON.stringify(lectures))

           window.location.href="../html/lecturesPage.html"
})