let stuDetails=JSON.parse(localStorage.getItem("pdi_stu"))
console.log(stuDetails)
let mainDiv=document.querySelector("#container")

let div1=document.createElement("div")
let p11=document.createElement("p")
p11.setAttribute("id","heading")

p11.innerText="Student  Details"
div1.append(p11)
let div2=document.createElement("div")
let p12=document.createElement("img")
p12.src=stuDetails.profilepic
div2.append(p12)

let div3=document.createElement("div")
let p30=document.createElement("p")
p30.innerText="Name   :   "+stuDetails.username
p30.setAttribute("class","info")

let p31=document.createElement("p")
p31.innerText="Email   :   "+stuDetails.email
p31.setAttribute("class","info")

let p32=document.createElement("p")
p32.innerText="Gender   :   "+stuDetails.gender
p32.setAttribute("class","info")

let p33=document.createElement("p")
p33.innerText="Role   :   "+stuDetails.role
p33.setAttribute("class","info")

let p34=document.createElement("p")
p34.innerText="Date of Birth   :   "+stuDetails.dob
p34.setAttribute("class","info")

let p35=document.createElement("p")
p35.innerText="State   :   "+stuDetails.state
p35.setAttribute("class","info")

let p36=document.createElement("p")
p36.innerText="City   :   "+stuDetails.city
p36.setAttribute("class","info")

let p37=document.createElement("p")
p37.innerText="Phone   :   "+stuDetails.mobile
p37.setAttribute("class","info")

let p38=document.createElement("p")
let timeofjoining=stuDetails.toj.split("T")[0]
p38.innerText="Date of Joining   :   "+timeofjoining
p38.setAttribute("class","info")
div3.append(p30,p31,p32,p34,p35,p36,p37,p38)
mainDiv.append(div1,div2,div3)

let btn=document.createElement("button")
btn.innerText="Logout"
btn.addEventListener("click",()=>{
    localStorage.removeItem("pdi_stu")
    window.location.href="../html/signup.html"
})
let container=document.getElementById("container")
container.append(btn)




// "username": "aman",
// "email": "aman@gmail.com",
// "password": "123",
// "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61Mv1Lqp-ceQoaJHCCVhJffG595ChzTTIuqkJUmZHZCiJ5RAGieDkLdYGks-5ZuAp1Co&usqp=CAU",
// "gender": "Male",
// "role": "Frontend",
// "dob": "2011-02-10",
// "state": "Bihar",
// "city": "Bhagalpur",
// "mobile": "9083487594",
// "toj": "2023-02-10T07:18:58.076Z",
// "id": 1

