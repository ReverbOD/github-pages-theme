import '../sass/style.scss';

// NAVBAR

// Transparency regolator

let isTransparent = true;
const nav = document.querySelector('.fix-nav');
console.log(nav)

// Modify transparency on scroll
window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
        nav.classList.add('_fixed');
        isTransparent = false;
    }

    if (window.pageYOffset <= 70 && !isTransparent) {
        nav.classList.remove('_fixed');
        isTransparent = true;
    }
});

// Navbar element

const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector(`a[href="#${id}"]`)

const inView = (element) => {
    var top = element.offsetTop;
    var height = element.offsetHeight;

    while(element.offsetParent){
        element = element.offsetParent;
        top += element.offsetTop;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) && (top + height) > window.pageYOffset
        );
    };

const init = () => {
    function update(){
        let next = false;

        sections.forEach(section => {
            const current = link(section.id);

            if(inView(section) && !next ){
                current.classList.add('current');
                next = true;
            } else {
                current.classList.remove('current');
            }
        } );
    }

    update();
    window.addEventListener('scroll', update);

}

init();

// END NAVBAR