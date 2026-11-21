const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobilePanel = document.getElementById('mobile-panel');

menuIcon.addEventListener('click', () => {
    mobilePanel.classList.add('active')
})


closeIcon.addEventListener('click', () => {
    mobilePanel.classList.remove('active')
})