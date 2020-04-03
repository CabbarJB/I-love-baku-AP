function handleTabsChange() {
    let tabs = document.querySelectorAll('.info-tab');
    let generalInfo = document.querySelector('.general-info-content');
    let userInfo = document.querySelector('.user-info-content');
    tabs.forEach(item=>{
        item.addEventListener('click', ()=>{
            tabs.forEach(e=>{
                e.classList.remove('info-tab-active')
            })

            item.classList.add('info-tab-active')
            if (item.classList.contains('general-info-tab')){
                generalInfo.style.display = "flex";
                userInfo.style.display = 'none'

            }
            else if (item.classList.contains('user-info-tab')){
                generalInfo.style.display = "none";
                userInfo.style.display = 'block'
            }
        })
    })
}

if (document.querySelector('.general-info-content')){
    handleTabsChange()
}

let messageCloseBtn = document.querySelectorAll('.popup-close-btn');
messageCloseBtn.forEach(item=>{
    item.addEventListener('click', event=>{
        event.currentTarget.parentElement.parentElement.style.display = 'none'
    })
})