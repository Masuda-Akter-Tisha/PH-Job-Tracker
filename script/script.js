//total,interview and rejected count function
let total = document.getElementById ('total');
let interviewCount = document.getElementById ('interview-count');
let rejectedCount = document.getElementById ('rejected-count');

let interviewList = [];
let rejectedList = [];
let allCards = document.getElementById ('all-cards');

function calculateCount () {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount ();