let dbArr;

let testArrOnLoad = JSON.stringify([{"title":"Teach Robotics","story":"Before there were computers, there were algorithms. But now that there are computers,thereareevenmorealgorithms, andalgorithmslieattheheartofcomputing. This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. We have tried to keep explanations elementary without sacriﬁcing depth of coverage or mathematical rigor. Each chapter presents an algorithm, a design technique, an application area, or a related topic. Algorithms are described in English and ina pseudocode designed to be readable by anyone who has done a little programming. The book contains 244 ﬁgures—many with multiple parts—illustrating how the algorithms work. Since we emphasize efﬁciency as a design criterion, we include careful analyses of the running times of all our algorithms. The text is intended primarily for use in undergraduate or graduate courses in algorithms or data structures. Because it discusses engineering issues in algorithm design, as well as mathematical aspects, it is equally well suited for self-study by technical professionals. In this, the third edition, we have once again updated the entire book. The changes cover a broad spectrum, including new chapters, revised pseudocode, and a more active writing style.","Qusetion":[{"qOpt":["Beakon","Micheal","Love","Girls"],"qCorrect":2,"qT":"how do we do ?"},{"qOpt":["James","Alibaba","Maggi","Vexa"],"qCorrect":2,"qT":"QWhat else"}]},{"title":"Nigeria Polictics","story":"Nigeria has been home to a number of ancient and indigenous pre-colonial states and kingdoms over the millennia. The modern state originated from British colonial rule beginning in the 19th century, and took its present territorial shape with the merging of the Southern Nigeria Protectorate and Northern Nigeria Protectorate in 1914 by Lord Frederick Lugard. The British set up administrative and legal structures while practicing indirect rule through traditional chiefdoms; Nigeria became a formally independent federation on October 1, 1960. It experienced a civil war from 1967 to 1970. It thereafter alternated between democratically elected civilian governments and military dictatorships until it achieved a stable democracy in 1999, with the 2015 presidential election marking the first time an incumbent president had lost re-election.","Qusetion":[{"qOpt":["President","Governor","Chairman","Traveler"],"qCorrect":1,"qT":"Who is Buhari"},{"qOpt":["East","South","West","North"],"qCorrect":4,"qT":"Where is Kano"},{"qOpt":["35","365","36","90"],"qCorrect":3,"qT":"How many states Nigeria have"},{"qOpt":["Sokoto","Abuja","Port harcourt","Minna"],"qCorrect":2,"qT":"Where is Aso rock"},{"qOpt":["East","North","South","West"],"qCorrect":2,"qT":"Where is Sokoto"},{"qOpt":["Green and white","Red an blue","Green, white and Green","Blue and white"],"qCorrect":1,"qT":"Colors of Nigeria"},{"qOpt":["1914","1999","2022","1908"],"qCorrect":1,"qT":"Which date is unique to Nigeria"},{"qOpt":["No","Yes","may be","not at all"],"qCorrect":2,"qT":"Do cars run in Nigeria"},{"qOpt":["No","Yes","may be","sometimes"],"qCorrect":1,"qT":"Is keke same as Okada"},{"qOpt":["none","all","few","Dont know"],"qCorrect":2,"qT":"How many states has a Governor"}]}])



dbArr = JSON.parse(localStorage.getItem("QBODY"))

if(!(Array.isArray(dbArr))) {
    
     localStorage.setItem("QBODY", testArrOnLoad)

    dbArr = JSON.parse(localStorage.getItem("QBODY"))
}


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