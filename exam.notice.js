let stNa = JSON.parse(  localStorage.getItem("fName") )

document.getElementById("fLi").textContent = "Hi " + stNa + ", You will be given a story or short note from which your Questions will be derived"

const startNow = () => {
    let res = confirm("Your exam begins immediately, are you sure you want to begin now")

    if(res) {
        window.location.assign('./exam.html')
    }
}