let dbArr = JSON.parse(localStorage.getItem("QBODY"))

 //CRUD functions
// const close = () => {

// alert('sanona')

//     // document.querySelector("body").removeChild(document.getElementById("editModal"))


//     // document.getElementById("editBtn").disabled = false;

// }
 
const closeModa = () => {
    // alert("close me")
    document.querySelector("body").removeChild(document.getElementById("editModal"))
    document.getElementById("editBtn").disabled = false;
}

const deleteQ = (_id) => {
    let res = confirm("Are you sure you want to delete this question, use the Edit button to modify each question");

    if(res) {
        dbArr.splice(_id, 1)

        let ans = JSON.stringify(dbArr)

        localStorage.setItem("QBODY", ans)

        alert("The story has been deleted pls refresh to view changes")
    }

    
}
// modeal variable
const modalTitle = (e) => {
    let newQuestion = [

    ]
    // alert(e.value)
    
}

const getTrue = (us) => {
      
     
};

const saveModalChanges = (_id) => {
    let res = confirm("Are you sure you want to make this changes ?")
            
    let title = document.querySelectorAll("[id = editModal] [type = text]")[0].value;
    let story = document.querySelectorAll("[id = editModal] [type = text]")[1].value;
    let qOpt = [];
    let qT = [];
    let qC = [];
    let Qusetion = [];

   
    if(res) {
             let parent = document.querySelectorAll("[id = editModal] [type = text]")
             let parentQT = document.querySelectorAll("[id = editModal] h3")

             let parentQC = document.querySelectorAll("[id = editModal] [type = checkbox]")

              let recur = parent.length - 2;

  // this is to get the options
             for(let i = qOpt.length + 2; i < parent.length ; i++ ) {

                // for(let k =  i; k )
                  
                qOpt.push(parent[i].value)
                }

// this is to get the quesions
                for(let k = 0; k < parentQT.length; k++) {
                    qT.push((parentQT[k].innerHTML).substring(3, (parentQT[k].innerHTML).length))
                }

                        // console.log(qT)
//this is for qCorrect

                for(let m = 0; m < parentQC.length; m++) {
                    if(parentQC[m].checked === true) {
                        if(m < 5) {
                            qC.push(m + 1)
                        } else {
                            qC.push((m - 4) + 1)
                        }
                    }
                }
                    let expectL =  recur / 4

                    // console.log(qOpt.splice(4, qOpt.length))

            if(qOpt.length === recur && qC.length === expectL && qT.length === expectL ) {

                    for(let j = 0; j < expectL; j++) {
                        Qusetion.push(
                            {qOpt:   qOpt.splice(qOpt / (j * 2), 4 + (j * 2)),
                            qCorrect: qC[j],
                            qT: qT[j]
                            }
                        )
                             
                    }
                    
                    // send to storage

                     let newObj = {
                         title: title,
                         story: story,
                         Qusetion: Qusetion
                        }
                        
                        dbArr.splice(_id, 1)
                        
                        dbArr.push(newObj)
                        
                        let myDb = JSON.stringify(dbArr) 
                        
                        localStorage.setItem("QBODY", myDb)
                        
                        alert("Your update was successfull pls refresh the page to see changes")
                    }
                    
        else if(qC.length !== expectL) {
                        alert("You seem to have more than one answer for each option, hence we cant save your changes")
                    }

 
    }
}

//-----------

const editQ = (_id) => {

    document.getElementById("editBtn").disabled = true;

    const {title, story, Qusetion} = dbArr[_id]


            
     document.querySelector("[id = head]").insertAdjacentHTML("afterend", `

        <section id="editModal">

        <h1> Edit Story</h1> 
        
        <button onclick="closeModa()">Close</button>

        <section>

        <label> Title</label>

        <br >
        <br >

        <input type="text" value="${title}" onkeyup="modalTitle(this, 'one')" />

        <br >
        <br >


        <label> Story </label>
        <br >
        <br >
        <input type="text" value="${story}" onkeyup="modalTitle(this, 'two')" />
        
        </section>

        ${
            Qusetion.map((item, i) => (
                    `
                    <h3>Q: ${item.qT}</h3>

                    ${
                        item.qOpt.map((opt, io) => (

                           `  
                        <br >
                        <div>
                        <input type="text" value="${opt}" onkeyup="modalTitle(this)" />
                        
                        ${
                            (item.qCorrect - 1) === io ? ` 
                            <input 
                            type="checkbox" 
                            checked="true"
                             onclick="getTrue(this)"
                            class="modalCheck"
                             /> 
                            `
                            : `
                            <input 
                            type="checkbox" 
                            check="false"
                            onclick="getTrue(this)"
                            class="modalCheck"
                             /> 
                            `

                        }
                                
                    </div>
                         
                            `
                        )).toString().replace(/,/g, "")
                    }

                    
                    `

            )).toString().replace(/,/g, "")
        }
            <br />
            <br />
        <button onclick="saveModalChanges(${_id})"> Save Changes</button>
        <br />

        <button onclick="closeModa()">Close</button>

         </section>
         <br />
         <br />

  
  `)



}




//------------------------




if(dbArr && dbArr.length > 0) {

    document.querySelector("[id = exam]").insertAdjacentHTML("beforeend", `
        ${
             
            dbArr.map((_ques, i) => (
                `<section class="mainDisp" style="margin-top: 3rem">

                <article>
                <h1>${ _ques.title } </h1>
                <p>${(_ques.story).toString().substring(0, 100)}</p>
                <section>
                ${
                    _ques.Qusetion.map((item, i) => (

               `     <p><strong>Q:</strong> ${item.qT}</p>
                    <h4>Options:</h4>
                    <ul>
                    <li>${item.qOpt[0] } </li>
                    <li>${item.qOpt[1] } </li>
                    <li>${item.qOpt[2] } </li>
                    <li>${item.qOpt[3] } </li>
                    </ul>`

                    ))
                }
                </section>
                 </article>

                <button onclick="deleteQ(${i})"> Delete Question </button>

                 <button id="editBtn" onclick="editQ(${i})"> Edit Question </button>

                </section>
                 
                `
            )).toString().replace(/,/g, "")
        }    


    `)


}


else {
    document.querySelector("[id = head]").insertAdjacentHTML("afterend", `
    <section class="oops">
      <h2> You have no Exams Question added yet</h2>
  </section>
    `)
}