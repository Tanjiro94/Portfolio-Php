const lenis = new Lenis({
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    const hamburger = document.querySelector(".nav-fixed .row-nav nav .hamburger-wrapper");
    const closeNav = document.querySelector(".menu-fixed .close ");
    const liMenus = document.querySelectorAll(".menu-fixed .row-menu ul li span ");
    const menu = document.querySelector(".menu-fixed");
    const menuMotif = document.querySelector(".menu-fixed .motif-wrapper");
    gsap.to(menuMotif, {
        rotate:360,
        duration:10,
        repeat:-1,
        ease:"none",
    })
    function openNav(){
        const tlEntre = gsap.timeline();
        tlEntre.to(menu, {
            transform: "translateY(0%)",
            duration: 1.25,
            ease: "Quart.easeInOut",
        });
        tlEntre.to(liMenus, {
            transform: "translateY(0%)",
            duration: 1.25,
            stagger: 0.2,
            ease: "Quart.easeInOut",
        }, "-=0.75");
    }
    function closingNav(){
        const tlSortie = gsap.timeline();

        tlSortie.to(liMenus, {
            transform: "translateY(-150%)",
            duration: 1.25,
            stagger: 0.2,
            ease: "Quart.easeInOut",
        });

        tlSortie.to(menu, {
            transform:"translateY(-150%)",
            duration:1.25,
            ease:"Quart.easeInOut",
        }, "-=0.75");
    }
    hamburger.addEventListener('click', () => {
        openNav();
    });
    closeNav.addEventListener('click', ()=>{
        closingNav();
    })
    liMenus.forEach(liMenu=>{
        liMenu.addEventListener('click', ()=>{
            closingNav();
        })
    })
    // Animation sur les motif de chaque section
    const motifSection = document.querySelectorAll("section .motif-wrapper");
    gsap.to(motifSection, {
        rotate:360,
        duration:10,
        repeat:-1,
        ease:"none",
    })
    // Animation sur la photo de a propos
    const img = document.querySelector('.a-propos .a-propos-row .photo-wrapper img');
        document.addEventListener('mousemove', (event) => {
            const { clientX: mouseX, clientY: mouseY } = event;
            const { innerWidth: width, innerHeight: height } = window;
            const xRotation = ((mouseY / height) - 0.5) * -20;
            const yRotation = ((mouseX / width) - 0.5) * -20;

            gsap.to(img, {
                transform:`rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
                duration:0.5,
                ease:"power3.out",
            })
            
            img.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        // Gestion des scroll bar dans la section compétences
        const rectangleCompUn = document.querySelector('.competence .competence-techno-row .competence-techno');
        const rectangleCompDeux = document.querySelector('.competence .competence-vie-row .competence-vie');
        const scrollBarUn = document.querySelector('.competence .competence-techno-row .scroll-bar-wrapper');
        const scrollBarDeux = document.querySelector('.competence .competence-vie-row .scroll-bar-wrapper');
        const barUn = document.querySelector('.competence .competence-techno-row .scroll-bar-wrapper .bar .scroll-bar');
        const barDeux= document.querySelector('.competence .competence-vie-row .scroll-bar-wrapper .bar .scroll-bar');

        function animBar(bar, section){
            gsap.to(bar, {
                scrollTrigger:{
                    trigger: section,
                    start:"top center", 
                    end:"bottom top",
                    scrub:true,
                },
                height:"100%",
                duration:1,
                ease:"Quart.easeInOut",
            })
        }
        function getHeights() {
            const heightUn = rectangleCompUn.getBoundingClientRect().height;
            const heightDeux = rectangleCompDeux.getBoundingClientRect().height;
            
            scrollBarUn.style.height = heightUn + "px";
            scrollBarDeux.style.height = heightDeux + "px";
        }
        window.addEventListener('resize', getHeights, animBar);
    
        getHeights();
        animBar(barUn, '.competence .competence-techno-row');
        animBar(barDeux, '.competence .competence-vie-row');

   });