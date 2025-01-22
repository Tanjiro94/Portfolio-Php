let message = document.querySelector('.message-row .message-col .messageMail');
let url = window.location.href;
const nom = document.querySelector('.nom')
const prenom = document.querySelector('.prenom')
const email = document.querySelector('.email')
const objet = document.querySelector('.objet')
const messageText = document.querySelector('.message')
const submitMail = document.querySelector('.submit')


const display = () => {
    if (url.includes("status=error")) {
        message.innerHTML = "Erreur vérifier les données saisie, ou réessayer plus tard";

        if (message.classList.contains("success")) {
            message.classList.remove("success");
        }

        if (!message.classList.contains("error")) {
            message.classList.add("error");
        }
    } else if (url.includes("status=succes")) {
        message.innerHTML = "Le message à bien été envoyé";

        if (message.classList.contains("error")) {
            message.classList.remove("error");
        }
        if (!message.classList.contains("success")) {
            message.classList.add("success");
        }
    }

    setTimeout(() => {
        message.innerHTML = "";
        if(url.includes("?status")){
            let newUrl = url.split("?status")[0];
            window.history.replaceState(null, "", newUrl);
        }
        message.classList.remove("error", "success");
    }, 10000);
};

if (message) {
    display();
}

const lisNav = document.querySelectorAll('.nav-fixed ul li');
const lisMobile = document.querySelectorAll('.menu-fixed ul li');


if (lisNav) {
    lisNav.forEach(liNav =>{
        liNav.addEventListener('click', (e)=>{
            if(liNav.textContent == "Compétences"){
                window.location.href = "index.php#competences"
            }
            if(liNav.textContent == "A propos"){
                window.location.href = "index.php#a-propos"
            }
            if(liNav.textContent == "Projets"){
                window.location.href = "index.php#projets"
            }
            
        })
    })
}
if (lisMobile) {
    lisMobile.forEach(liMobile =>{
        liMobile.addEventListener('click', (e)=>{
            if(liMobile.textContent == "compétences"){
                window.location.href = "index.php#competences"
            }
            if(liMobile.textContent == "a propos"){
                window.location.href = "index.php#a-propos"
            }
            if(liMobile.textContent == "projets"){
                window.location.href = "index.php#projets"
            }
            console.log(liMobile.textContent);
            
            
        })
    })
}


