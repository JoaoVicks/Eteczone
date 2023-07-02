window.addEventListener("scroll", function() {
    let header = document.querySelector('#inav');
    header.classList.toggle('rolagem', window.scrollY > 0);
});