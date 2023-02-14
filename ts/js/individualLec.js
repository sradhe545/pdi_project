let ind=JSON.parse(localStorage.getItem("pdi_ind_lec"))
console.log(ind)

let cont=document.getElementById("container")
let p1=document.createElement("p")
p1.setAttribute("id","vtype")
p1.innerText="VIDEO"
let vid=document.createElement("video")
vid.controls=true
vid.setAttribute("width","950")
let source=document.createElement("source")
source.setAttribute("src",ind.video)
source.setAttribute("type","video/mp4")
vid.appendChild(source)
let p2=document.createElement("p")
p2.setAttribute("id","title")
p2.innerText=ind.title
let p3=document.createElement("p")
p3.setAttribute("id","desc")
p3.innerText=ind.description
cont.append(p1,vid,p2,p3)
