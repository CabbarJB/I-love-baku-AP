let pageCount = 20;

function createPaginationMenu() {
let container = document.createElement('div');
container.classList.add('pagination-container');
let firstBtn = document.createElement('a');
firstBtn.innerText = 'First';
firstBtn.classList.add('first-last-btn')
container.appendChild(firstBtn)
let lastBtn = document.createElement('a');
lastBtn.innerText = 'Last';
    lastBtn.classList.add('first-last-btn')

let prevBtn = document.createElement('a');
let nextBtn = document.createElement('a');
nextBtn.innerText = '>';
prevBtn.innerText = '<';
nextBtn.classList.add('pagination-btn');
prevBtn.classList.add('pagination-btn')
container.appendChild(prevBtn);
if (pageCount<=5){
    for (let i = 1;i<=pageCount;i++){
            let pageNum = document.createElement('a');
            pageNum.classList.add('pagination-btn')
            pageNum.innerText = i.toString();
            container.appendChild(pageNum)
    }

}

else if (pageCount>5){
    let pageNum1 = document.createElement('a');
    pageNum1.innerText = '1';
    let pageNum2 = document.createElement('a');
    pageNum2.innerText = '2';
    let mid = document.createElement('a');
    mid.innerText = '...';
    let pageNum4 = document.createElement('a');
    pageNum4.innerText = (pageCount-1).toString();
    let pageNum5 = document.createElement('a');
    pageNum5.innerText = pageCount.toString();
    pageNum1.classList.add('pagination-btn');
    pageNum2.classList.add('pagination-btn')
    mid.classList.add('pagination-btn')
    pageNum4.classList.add('pagination-btn')
    pageNum5.classList.add('pagination-btn')
    container.append(pageNum1, pageNum2, mid, pageNum4, pageNum5)

}

container.appendChild(nextBtn);
container.appendChild(lastBtn)
document.querySelector('.main-body').appendChild(container);
let links = document.querySelectorAll('.pagination-container a');

   for (let j = 0;j<links.length;j++){
       links[j].href = '#'
   }
}

createPaginationMenu()