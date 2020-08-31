let dbArr;

let testArrOnLoad = JSON.stringify([{"title":"Nigeria Polictics","story":"Nigeria has been home to a number of ancient and indigenous pre-colonial states and kingdoms over the millennia. The modern state originated from British colonial rule beginning in the 19th century, and took its present territorial shape with the merging of the Southern Nigeria Protectorate and Northern Nigeria Protectorate in 1914 by Lord Frederick Lugard. The British set up administrative and legal structures while practicing indirect rule through traditional chiefdoms; Nigeria became a formally independent federation on October 1, 1960. It experienced a civil war from 1967 to 1970. It thereafter alternated between democratically elected civilian governments and military dictatorships until it achieved a stable democracy in 1999, with the 2015 presidential election marking the first time an incumbent president had lost re-election.","Qusetion":[{"qOpt":["President","Governor","Chairman","Traveler"],"qCorrect":1,"qT":"Who is Buhari"},{"qOpt":["East","South","West","North"],"qCorrect":4,"qT":"Where is Kano"},{"qOpt":["35","365","36","90"],"qCorrect":3,"qT":"How many states Nigeria have"},{"qOpt":["Sokoto","Abuja","Port harcourt","Minna"],"qCorrect":2,"qT":"Where is Aso rock"},{"qOpt":["East","North","South","West"],"qCorrect":2,"qT":"Where is Sokoto"},{"qOpt":["Green and white","Red an blue","Green, white and Green","Blue and white"],"qCorrect":1,"qT":"Colors of Nigeria"},{"qOpt":["1914","1999","2022","1908"],"qCorrect":1,"qT":"Which date is unique to Nigeria"},{"qOpt":["No","Yes","may be","not at all"],"qCorrect":2,"qT":"Do cars run in Nigeria"},{"qOpt":["No","Yes","may be","sometimes"],"qCorrect":1,"qT":"Is keke same as Okada"},{"qOpt":["none","all","few","Dont know"],"qCorrect":2,"qT":"How many states has a Governor"}]}])



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