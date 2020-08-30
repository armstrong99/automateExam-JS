let testArrOnLoad = JSON.stringify([{"title":"Coding Django","story":"qweweweee","Qusetion":[{"qOpt":["hool","mools","eools","kools"],"qCorrect":2,"qT":"why python"},{"qOpt":["weeen","ds","jjj","jjkll"],"qCorrect":4,"qT":"WHy snake"}]},{"title":"Software Engineering","story":"qween and king","Qusetion":[{"qOpt":["why me","rose","john","love"],"qCorrect":4,"qT":"holidya"}]},{"title":"Teach Robotics","story":"Before there were computers, there were algorithms. But now that there are computers,thereareevenmorealgorithms, andalgorithmslieattheheartofcomputing. This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. We have tried to keep explanations elementary without sacriﬁcing depth of coverage or mathematical rigor. Each chapter presents an algorithm, a design technique, an application area, or a related topic. Algorithms are described in English and ina pseudocode designed to be readable by anyone who has done a little programming. The book contains 244 ﬁgures—many with multiple parts—illustrating how the algorithms work. Since we emphasize efﬁciency as a design criterion, we include careful analyses of the running times of all our algorithms. The text is intended primarily for use in undergraduate or graduate courses in algorithms or data structures. Because it discusses engineering issues in algorithm design, as well as mathematical aspects, it is equally well suited for self-study by technical professionals. In this, the third edition, we have once again updated the entire book. The changes cover a broad spectrum, including new chapters, revised pseudocode, and a more active writing style.","Qusetion":[{"qOpt":["Beakon","Micheal","Love","Girls"],"qCorrect":2,"qT":"how do we do ?"},{"qOpt":["James","Alibaba","Maggi","Vexa"],"qCorrect":2,"qT":"QWhat else"}]}])


localStorage.setItem("QBODY", testArrOnLoad)

let dbArr = JSON.parse(localStorage.getItem("QBODY"))


let titles = dbArr.map(i => i.title)

document.getElementById("opt").insertAdjacentHTML("beforeend", `
        ${
            titles.map(i => (
                `<option value="${i}">${i}</option>`
            )).toString().replace(/,/g, "")
        }
`)


const startNow = () => {
let name = document.getElementById("formName").value

if(name !== "") {

    let strName = JSON.stringify(name)
    localStorage.setItem("fName", strName)
    let selOpt = JSON.stringify(  document.getElementById("opt").value )

    localStorage.setItem("choice", selOpt)
    
    window.location.assign('/src/Views/exam.notice.html')
    
}

else {
    alert("You seem not to fill your name")
}

}