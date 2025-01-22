<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Portfolio Salah-Din Benaouda - Etudiant en développement web</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style-guide.css">
</head>
<body>
    <?php 
        require_once('nav.inc.php'); 
        require 'validateForm.php';
        /* $response = "";
        $responseClassName = "error";

        if (isset($_GET['status'])) {
            if ($_GET['status'] === 'success') {
                $response = "Message envoyé avec succès";
                $responseClassName = "success";
            } elseif ($_GET['status'] === 'error') {
               $response = 'Une erreur est survenue dans l\'envoie du message. Veuillez réessayer plus tard';
               $responseClassName = 'error';
            }
        } */
        
        ?>


    <section class="hero-contact">
        <div class="container">
        <div class="titre-wrapper-row row">
                <div class="titre-wrapper col col-xxl-8 col-xl-8 col-l-10 col-m-6 col-s-6 col-xs-6">
                    <h1>VOUS SOUHAITEZ ENTRER EN CONTACT ?</h1>
                </div>
            </div>
            <div class="container-form-row row">
                <form action="validateForm.php" method="post" id="form" class="col col-xxl-10 col-xl-10 col-l-12 col-m-6 col-s-6 col-xs-6" enctype="multipart/form-data">
                    <div class="container-input container">
                        <div class="message-row row">
                            <div class="message-col col col-xxl-12 col-xl-12 col-l-12 col-m-6 col-s-6 col-xs-6">
                                <p class="messageMail"></p>
                            </div>
                        </div>
                            <div class="container-input-row row">
                            <div class="prenom col col-xxl-6 col-xl-6 col-l-12 col-m-6 col-s-6 col-xs-6">
                            <input autocomplete="off" type="text" class="prenom" name="prenom" placeholder="Veuillez entrer votre prénom..." required>
                            </div>
                            <div class="nom col col-xxl-6 col-xl-6 col-l-12 col-m-6 col-s-6 col-xs-6">
                            <input autocomplete="off" type="text" class="nom" name="nom" placeholder="Veulliez entrer votre nom..." required>
                            </div>
                            <div class="objet col col-xxl-6 col-xl-6 col-l-12 col-m-6 col-s-6 col-xs-6">
                            <input autocomplete="off" type="objet" class="objet" name="objet" placeholder="Objet" required>
                            </div>
                            <div class="email col col-xxl-6 col-xl-6 col-l-12 col-m-6 col-s-6 col-xs-6">
                            <input autocomplete="off" type="email" class="email" name="email" placeholder="Veuillez entrer votre email..." required>
                            </div>
                            <div class="textarea col col-xxl-12 col-xl-12 col-l-12 col-m-6 col-s-6 col-xs-6">
                                <textarea autocomplete="off" name="message" id="message" class="message" placeholder="Quel est votre message ?" required></textarea>
                            </div>
                            <div class="btn-wrapper col col-xxl-12 col-xl-12 col-l-12 col-m-6 col-s-6 col-xs-6">
                                <button class="submit">Envoyer</button>
                            </div>
                            
                        </div>
                    </div>
                </form> 
        </div>
    </section>


  <!--   <?php require_once('footer.php') ?> -->

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js"></script> 
    <script src="js/app.js"></script>
    <script src="js/contact.js"></script>
</body>
</html>