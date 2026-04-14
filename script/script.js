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

// 3 buttons toggling
const allFilterBtn = document.getElementById ('all-filter-btn');
const interviewFilterBtn = document.getElementById ('interview-filter-btn');
const rejectedFilterBtn = document.getElementById ('rejected-filter-btn');

function togglingStyle (id) {
  allFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]');  
  interviewFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]');  
  rejectedFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]'); 

  allFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-[#F1F2F4]');
  interviewFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-[#F1F2F4]');
  rejectedFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-[#F1F2F4]');

  const selected = document.getElementById (id);
  selected.classList.remove ('text-[#64748B]', 'bg-white', 'border', 'border-[#F1F2F4]');
  selected.classList.add ('text-white', 'bg-[#3B82F6]');

}