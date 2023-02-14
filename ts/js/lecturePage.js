let lectures=JSON.parse(localStorage.getItem("lect_detail"))||[]
let myUsername=JSON.parse(localStorage.getItem("pdi_ts"))
// console.log(filterLect);



lec(lectures)
function lec(data)
{
    let myLec=document.getElementById("getLec")
   data.forEach((el,i)=>{
    let outerDiv=document.createElement("div")
    outerDiv.setAttribute("id","outerDiv")

    let c1=document.createElement("div")
    c1.setAttribute("id","child1")

     let inner1=document.createElement("div")
    inner1.setAttribute("id","inner1")

    let inner2=document.createElement("div")
    inner2.setAttribute("id","inner2")

    let c2=document.createElement("div")
    c2.setAttribute("id","child2")



 
    let h3=document.createElement("h3")
    h3.innerText=el.title
    h3.setAttribute("id","title")
    h3.addEventListener("click",()=>{
        localStorage.setItem("pdi_ind_lec",JSON.stringify(el))
        window.location.href="../html/individualLec.html"
    })
    
    let p11=document.createElement("p")
    p11.setAttribute("id","type")
    
    p11.innerText="Video"

    let btn1=document.createElement("button")
    btn1.setAttribute("class","btn")
    btn1.innerText="Edit"
    btn1.addEventListener("click",()=>{
        localStorage.setItem("editLec",JSON.stringify(el))
        window.location.href="../html/editlecture.html"
    })
    let btn2=document.createElement("button")
    btn2.setAttribute("class","btn")
    btn2.innerText="Delete"
    btn2.addEventListener("click",()=>{
      data.splice(i,1)
localStorage.setItem("lect_detail",JSON.stringify(data))
window.location.reload()
    })
    inner1.append(h3,p11)
    inner2.append(btn1,btn2)
    if(el.createdBy==myUsername.username)
    {
        c1.append(inner1,inner2)
    }else{
        c1.append(inner1)
    }
   

    let p22=document.createElement("p")
    p22.innerText="Created By "+el.createdBy
    p22.setAttribute("id","created")

    let p1=document.createElement("p")
    p1.innerText=el.role
    let p2=document.createElement("p")
    let t1=el.timeOfCreation.split("T")[0]
    
    p2.innerText=t1
    
    c2.append(p1,p2)
    
    outerDiv.append(c1,p22,c2)
    // maindiv.setAttribute("id","maindiv")
    myLec.append(outerDiv)
   })
}

let myInfo=JSON.parse(localStorage.getItem("pdi_ts"))
let p=myInfo.username[0].toUpperCase()
console.log(p);
let myfirst=document.getElementById("info")
myfirst.append(p)