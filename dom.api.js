let dbArr = JSON.parse(localStorage.getItem("QBODY"))
let stNa = JSON.parse(  localStorage.getItem("fName") )
let choice = JSON.parse(  localStorage.getItem("choice") )

let choiceArr = []

let titles = dbArr.filter((i, k) => {
    
    if(i.title === choice) {
        choiceArr.push(k)
    }
    
    return i.title
})

 
let workingArr = dbArr[choiceArr[0]] ? dbArr[choiceArr[0]] : dbArr[0]

const timeJudge = () => {
    
    let domShow = document.getElementById("timeOut")

    let i = -1;

   var _id = setInterval(() => {
        i++;

        domShow.innerHTML = i+"s" + `<br> <p>${ stNa.substring(0, 7) + "..." } </p>`;


        if(i === (workingArr.Qusetion.length * 5) + 10 ) {
            clearInterval(_id)
            document.getElementById("next").disabled = true;
            document.getElementById("prev").disabled = true;
            document.getElementById("seeRes").style.display = "inline-block"
          let mIo =   document.querySelectorAll("[id = sectArt] p") 

          for(let j = 0; j < mIo.length; j++) {
                mIo[j].style.display = "none"
          }

             


        
        }


    }, 1000);

}


timeJudge()

let cursor = 0;
 

let newMCQS = [];

 
let examTitle = workingArr.title;
let examStory = workingArr.story;


document.querySelector("[id = quesArt] h1").insertAdjacentHTML("beforeend", `
<span>Title: <span>${examTitle}</span> </span>

`
)  
document.querySelector("[id = quesArt] p").textContent = examStory;


for(let i = 0; i < workingArr.Qusetion.length; i++) {
        newMCQS.push({
            story: workingArr.Qusetion[i].qT,
            options: workingArr.Qusetion[i].qOpt,
            correctI: workingArr.Qusetion[i].qCorrect,
            gotIt: false,
            pickVal: []
        })

}

 
let MCQS = newMCQS

let maxScore = MCQS.length * 5;

document.getElementById("seeRes").style.display = "none"

const scoreStudent = () => {
console.log(MCQS)

// get array here of obj where the pickVal last item is equal to the currI

const giveQue = (num) => {
    if(num === 0) {
        return 1
    }
     else return num
}

let points = MCQS.filter((_que, i) => (giveQue(_que.correctI) - 1) === _que.pickVal.slice(-1)[0]).length * 5;


            let avgScore = (points  / maxScore) * 100;

            if(avgScore >= 75) {
                alert("You passed with " + points + " points" + " making a total of " + avgScore + " Congratulation!!!!!" )
            }
            else {
                alert(`not there yet, you have just ${points} points making a average of ${avgScore} you need a minimum of 75% to pass`)
            }
}

const getP = (e) => {
     let targetObj = MCQS[cursor]

    //  let iOfe = targetObj.options.indexOf(e.innerHTML)
  
     let allChild = document.getElementById("sectArt").children
  
     targetObj.pickVal.push( targetObj.options.indexOf(e.innerHTML) ) 

 
     allChild[targetObj.pickVal.slice(-1)].style.background = "#4c4c03c2" 

     let picArr = targetObj.pickVal.slice(-1)
     
targetObj.pickVal.filter((item) => item !== picArr[0]).map(n => allChild[n].style.background = "white")
 
}

const showQuestion = (quesObj = MCQS[cursor]) => {

    setTimeout(() => {
        let domArticle =  document.getElementById("quesArt")

     domArticle.classList.remove("animateArt")

     domArticle.removeAttribute("class")
}, 2500)
            
            let allChild = document.getElementById("sectArt").children

            if( quesObj.pickVal.length > 0 ) {
                
                allChild[ quesObj.pickVal.slice(-1) ].style.background = "#4c4c03c2"

            } 
            
            else {
                for(let i = 0; i < document.querySelectorAll("section p").length; i++) {
                    document.querySelectorAll("section p")[i].style.background = "white" 

                }
            }


                    


    document.getElementById("qH").innerHTML = quesObj.story + " " + '?'

         document.getElementById("pOne").innerHTML = quesObj.options[0]

         document.getElementById("pTwo").innerHTML = quesObj.options[1]

         document.getElementById("pThree").innerHTML = quesObj.options[2]

         document.getElementById("pFour").innerHTML = quesObj.options[3]

        } 
        
        showQuestion()

const next = () => {

             for(let i = 0; i < document.querySelectorAll("section p").length; i++) {
                document.querySelectorAll("section p")[i].style.background = "white" 

            }

            document.getElementById("quesArt").classList.add("animateArt")
            
            cursor =  cursor + 1 <= MCQS.length - 1 ? cursor + 1 : MCQS.length - 1
            
   document.getElementById("prev").disabled = false
   
   showQuestion()
   
   
   
   if(cursor === MCQS.length - 1) {
       document.getElementById("next").disabled = true
       document.getElementById("seeRes").style.display = "block"

    }
    
}

const prev = () => {

    for(let i = 0; i < document.querySelectorAll("section p").length; i++) {
        document.querySelectorAll("section p")[i].style.background = "white" 

    }
    document.getElementById("quesArt").classList.add("animateArt")
    
   cursor--

   document.getElementById("next").disabled = false

    if(cursor === 0) {
        document.getElementById("prev").disabled = true
     }
     
    showQuestion()
}


 