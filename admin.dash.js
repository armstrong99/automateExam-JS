
// create operation

//localstorage data

let _Question= {};

let Qusetion = [];

let qBody = [];

// Question Params
let qT = "";
let qOpt = [];
let qCorrect = '';


//--------

//option algorithm;

let optData = [];

let checkNorm = [];

const checkerF = (e, _i) => {

     if(e.checked === true) {
        checkNorm.indexOf(_i) === -1 ? checkNorm.push(_i) : ""
     } 
     
     else {
        checkNorm.splice(checkNorm.indexOf(_i), 1)        
     }
 }

 const optionTQs = () => {
 if(checkNorm.length === 1 ) {
    qCorrect = checkNorm[0] === "one" ? 1 : checkNorm[0] === "two" ? 2 : checkNorm[0] === "three" ? 3 : 4


}

else if(checkNorm.length === 0) {
    alert("you seem not to have picked any option as the answer")
    qCorrect = ""
}

else {
    alert("you have too many answers for this question, pls each question should have only one answer")

    qCorrect = ""

    checkNorm = []
}


let allI = document.querySelectorAll("[name = inputOptH]")

let allCB = document.querySelectorAll("[type = checkbox]")

 
for(let i = 0; i < allI.length; i++) {

    if(allI[i].value === "") {
        alert(`the ${i + 1} field seems to empty pls fill and try saving again`)
    } 
    
    else {
        if( qOpt.indexOf(allI[i].value) === -1) {
            qOpt.push(allI[i].value)
        }
     }
}
 
 
if(qOpt.length === 4 && qCorrect !== '') {
  
    Qusetion.push({
        qOpt: qOpt,
        qCorrect: qCorrect,
        qT: document.querySelector("[name = ques]").value
    })

     if(document.querySelector("textarea").value === "") {
        alert("add a question story")
    }
    
    if(document.querySelector("[name = title]").value === "") {
        alert("add a question title")
    }
    
    if(document.querySelector("textarea").value !== "" && document.querySelector("[name = ques]").value !== "" ) {
        
        
     
        let qBodyObj = {
            title:  document.querySelector("[name = title]").value,
            story: document.querySelector("textarea").value,
            Qusetion: Qusetion
        }
        
        console.log(qBodyObj)
          qBody.push(qBodyObj)
        
        document.querySelector("[name = ques]").placeholder = "add more question for this story"
        
         document.querySelector("[name = title]").disabled = true
         document.querySelector("textarea").disabled = true
    
         let qqT = document.querySelector("[name = ques]").value = "";
    
       
        
     
        for(let i = 0; i < allI.length; i++) {
    
             allI[i].value = ""
            allCB[i].checked = false;
            qqT.value = ""
    
            qT = "";
            qOpt = [];
            qCorrect = "";
           }

           checkNorm = []

           if(document.querySelector("body")  ) {
    
            document.querySelector("body").removeChild(document.getElementById("addQSec"))
             
           }
    
         console.log(qBody)

         document.querySelector("[name = addQues]").disabled = false;

    }
    
}
 }

//-----------------


document.querySelector("[name = addQues]").addEventListener("click", e => {

    e.target.disabled = true;

qT = document.querySelector("[name = ques]").value;

if(qT !== "") {

    document.querySelector("[name = addQues]").insertAdjacentHTML("afterend", `
    <section id="addQSec">
    
    <h2>Add options for your Question</h2>
    <small>Check the correct answer</small>
    <br />
    <br />

    <input name="inputOptH"  type="text" />  <input type="checkbox" onclick="checkerF(this, 'one')" /> 
    <br />
    <br />
    
    <input name="inputOptH" type="text" />  <input type="checkbox" onclick="checkerF(this, 'two')" /> 
    <br />
    <br />
    
    <input name="inputOptH" type="text" />  <input type="checkbox" onclick="checkerF(this, 'three')" /> 
    <br />
    <br />
    <input name="inputOptH" type="text" />  <input type="checkbox" onclick="checkerF(this, 'four')" />  
    <br />
    <br />

    <button onclick="optionTQs()">Save all</button>
    </section>
    
    `)
}



});


document.getElementById('sub').addEventListener("click", e => {
    if(qBody.length > 0) {

        let myarr= JSON.stringify(qBody)

        if(localStorage.getItem("QBODY")) {
           let dbArr = JSON.parse(localStorage.getItem("QBODY"))

           dbArr.push(qBody[0])
           let ans = JSON.stringify(dbArr )
           
           localStorage.setItem("QBODY", ans)

          window.location.assign('/')
        } 
        
        else {

            localStorage.setItem("QBODY", myarr)
       
            window.location.assign('/')
        }
      
    } 
    else {
        alert("complete the form")
    }
 })