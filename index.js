const adviceID = document.getElementById("adviceId")
const advice = document.getElementById("adviceTxt")
const btn = document.getElementById("adviceBtn")

function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(Response => {
        return Response.json()
    }).then(adviceData => { 
        const adviceNum = adviceData.slip.id;
        const adviceTxt = adviceData.slip.advice;

        adviceID.textContent = adviceNum;
        advice.textContent = `"${adviceTxt}"`

    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener("click", function () {
    getAdvice()
})

window.onload = () => {
    getAdvice()
}