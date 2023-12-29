const tadContentBlocks = document.querySelectorAll('.tab_content_block')
const  tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab =0
const hideTabContent = () => {
    tadContentBlocks.forEach(tadContentBlocks => {
        tadContentBlocks.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const  showTabContent = (tabIndex = 0) => {
    tadContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

const  autoSwitchTab = (tabIndex) => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent(currentTab)
setInterval(autoSwitchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) =>{
            if (event.target === tab) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}