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

let currentStatus = 'all';

const emptyState = document.getElementById ('empty-state');

function togglingStyle (id) {
  allFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]');  
  interviewFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]');  
  rejectedFilterBtn.classList.remove ('text-white', 'bg-[#3B82F6]'); 

  allFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-gray-200');
  interviewFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-gray-200');
  rejectedFilterBtn.classList.add ('text-[#64748B]', 'bg-white', 'border', 'border-gray-200');

  const selected = document.getElementById (id);
  selected.classList.remove ('text-[#64748B]', 'bg-white', 'border', 'border-gray-200');
  selected.classList.add ('text-white', 'bg-[#3B82F6]');

   emptyState.classList.add ('hidden');
 
  currentStatus = id;

  if (id === 'all-filter-btn') {
    allCards.classList.remove ('hidden');
    filterSection.classList.add ('hidden');
    if (allCards.children.length < 1) {
      emptyState.classList.remove ('hidden');
    }
  }
  else if (id === 'interview-filter-btn') {
    allCards.classList.add ('hidden');
    filterSection.classList.remove ('hidden');
    if (interviewList < 1) {
      emptyState.classList.remove ('hidden');
    }
    renderInterview ();
  }
  else if (id === 'rejected-filter-btn') {
    allCards.classList.add ('hidden');
    filterSection.classList.remove ('hidden');
    if (rejectedList < 1) {
      emptyState.classList.remove ('hidden');
    }
    renderRejected ();
  }

}

// main container function
const MainContainer = document.getElementById ('main-container');

MainContainer.addEventListener ('click', function (event) {

  if (event.target.classList.contains ('interview-btn')) {
    const parentNode = event.target.parentNode.parentNode;

  const companyName = parentNode.querySelector ('.company-name').innerText;
  const jobName = parentNode.querySelector ('.job-name').innerText;
  const place = parentNode.querySelector ('.place').innerText;
  const time = parentNode.querySelector ('.time').innerText;
  const salary = parentNode.querySelector ('.salary').innerText;
  const status = parentNode.querySelector ('.status').innerText;
  const notes = parentNode.querySelector ('.notes').innerText;
  
  parentNode.querySelector ('.status').innerText = 'interviewed';

  const cardInfo = {
    companyName,
    jobName,
    place,
    time,
    salary,
    status: 'interviewed',
    notes
  }

   const jobExist = interviewList.find (item => item.companyName === cardInfo.companyName);

   if (!jobExist) {
    interviewList.push (cardInfo);
   }

   rejectedList = rejectedList.filter (item => item.companyName !== cardInfo.companyName);
  
  if (currentStatus === 'rejected-filter-btn') {
    renderRejected ();
  }

   calculateCount ();
  }

  else if (event.target.classList.contains ('rejected-btn')) {
    const parentNode = event.target.parentNode.parentNode;

  const companyName = parentNode.querySelector ('.company-name').innerText;
  const jobName = parentNode.querySelector ('.job-name').innerText;
  const place = parentNode.querySelector ('.place').innerText;
  const time = parentNode.querySelector ('.time').innerText;
  const salary = parentNode.querySelector ('.salary').innerText;
  const status = parentNode.querySelector ('.status').innerText;
  const notes = parentNode.querySelector ('.notes').innerText;

  parentNode.querySelector ('.status').innerText = 'rejected';
  
  const cardInfo = {
    companyName,
    jobName,
    place,
    time,
    salary,
    status:'rejected',
    notes
  }

   const jobExist = rejectedList.find (item => item.companyName === cardInfo.companyName);

   if (!jobExist) {
    rejectedList.push (cardInfo);
   }

    interviewList = interviewList.filter (item => item.companyName !== cardInfo.companyName);
    
  if (currentStatus === 'interview-filter-btn') {
    renderInterview ();
  }
  
   calculateCount ();
  }
})

const filterSection = document.getElementById ('filter-section');

function renderInterview () {
  filterSection.innerHTML = '';

  for (let list of interviewList) {
     let div = document.createElement ('div');
     div.className = 'flex justify-between border border-gray-200 rounded-md bg-[#FFFFFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
     div.innerHTML = `
     <!-- main-part-1 -->
                <div class="space-y-4">
                    <!-- part-1 -->
                     <div>
                        <p class="company-name text-2xl font-semibold text-[#002C5C]">${list.companyName}</p>
                        <p class="job-name text-lg text-[#64748B]">${list.jobName}</p>
                     </div>
                     <!-- part-2 -->
                    <div class="flex gap-2">
                     <p class="place text-sm text-[#64748B]">${list.place}<p>
                     <p class="time text-sm text-[#64748B]">${list.time}</p>
                     <p class="salary text-sm text-[#64748B]">${list.salary}</p>
                    </div>

                      <!-- part-3 -->
                       <p class="status w-[150px] text-center uppercase text-sm font-medium text-[#002C5C] bg-[#EEF4FF] rounded-sm px-3 py-2">${list.status}</p>

                       <!-- part-4 -->
                       <p class="notes text-[16px] text-[#323B49]">${list.notes}</p>

                       <!-- part-5 -->
                        <div class="flex gap-5">
                            <button class="interview-btn text-sm font-semibold text-[#10B981] border-2 border-[#10B981] px-3 py-1.5 rounded-md uppercase transition-all active:scale-95">Interview</button>

                            <button class="rejected-btn text-sm font-semibold text-[#EF4444] border-2 border-[#EF4444] px-3 py-1.5 rounded-md uppercase transition-all active:scale-95">Rejected</button>
                        </div>
                </div>

                <!-- main-part-2 -->
                <div>
                    <button class="delete-btn w-10 h-10 border border-gray-200 rounded-full transition-all active:scale-95">
                        <i class="fa-solid fa-trash text-red-400"></i>
                    </button>
                </div>
     `
     filterSection.appendChild (div);
  }
}

function renderRejected () {
   filterSection.innerHTML = '';

  for (let list of rejectedList) {
     let div = document.createElement ('div');
     div.className = 'flex justify-between border border-gray-200 rounded-md bg-[#FFFFFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
     div.innerHTML = `
     <!-- main-part-1 -->
                <div class="space-y-4">
                    <!-- part-1 -->
                     <div>
                        <p class="company-name text-2xl font-semibold text-[#002C5C]">${list.companyName}</p>
                        <p class="job-name text-lg text-[#64748B]">${list.jobName}</p>
                     </div>
                     <!-- part-2 -->
                    <div class="flex gap-2">
                     <p class="place text-sm text-[#64748B]">${list.place}<p>
                     <p class="time text-sm text-[#64748B]">${list.time}</p>
                     <p class="salary text-sm text-[#64748B]">${list.salary}</p>
                    </div>

                      <!-- part-3 -->
                       <p class="status w-[150px] text-center uppercase text-sm font-medium text-[#002C5C] bg-[#EEF4FF] rounded-sm px-3 py-2">${list.status}</p>

                       <!-- part-4 -->
                       <p class="notes text-[16px] text-[#323B49]">${list.notes}</p>

                       <!-- part-5 -->
                        <div class="flex gap-5">
                            <button class="interview-btn text-sm font-semibold text-[#10B981] border-2 border-[#10B981] px-3 py-1.5 rounded-md uppercase transition-all active:scale-95">Interview</button>

                            <button class="rejected-btn text-sm font-semibold text-[#EF4444] border-2 border-[#EF4444] px-3 py-1.5 rounded-md uppercase transition-all active:scale-95">Rejected</button>
                        </div>
                </div>

                <!-- main-part-2 -->
                <div>
                    <button class="delete-btn w-10 h-10 border border-gray-200 rounded-full transition-all active:scale-95">
                        <i class="fa-solid fa-trash text-red-400"></i>
                    </button>
                </div>
     `
     filterSection.appendChild (div);
  }
}
