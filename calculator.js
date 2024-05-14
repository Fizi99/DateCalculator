
const startDateDOM = document.getElementById("startDate");
const endDateDOM = document.getElementById("endDate");
const resultDOM = document.getElementById("result");

let startDate = new Date();
let endDate = new Date();

startDateDOM.addEventListener("change", (e)=> {
    startDate = new Date(startDateDOM.value);
    let days = calculateDiff(startDate, endDate);
    let string = 'difference in days: ' + days;
    resultDOM.innerHTML = string;
});
endDateDOM.addEventListener("change", (e)=> {
    endDate = new Date(endDateDOM.value);
    let days = calculateDiff(startDate, endDate);
    let string = 'difference in days: ' + days;
    resultDOM.innerHTML = string;
});

function calculateDiff(startDate, endDate){
    let firstDate;
    let secondDate;

    if(startDate !== null || startDate !== undefined && endDate !== null || endDate !== undefined){
        if(startDate > endDate){
            firstDate = endDate;
            secondDate = startDate;
        }else{
            firstDate = startDate;
            secondDate = endDate;
        }

        return (secondDate - firstDate)/86400000;
    }

    return 0;
}


