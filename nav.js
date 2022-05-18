const body = document.querySelector('body')
const hambugger = document.getElementById('hambugger');
const navItems = document.querySelectorAll('.nav-items');

function openNav(){
    if (body.classList.contains('openNav') === false ) {
        body.classList.add('openNav')
    } else{
        body.classList.remove('openNav')
    }
}

hambugger.addEventListener('click', openNav);


navItems.forEach( item => {
    item.addEventListener('click', () => {
        body.classList.remove('openNav');
    })    
})