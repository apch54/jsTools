
<?php
    if(!isset($_POST["x"]) || !isset($_POST["y"])) {
        echo "Une erreur s'est produite." ;
    }else{      
       echo $_POST["x"].' et '.$_POST["y"];
    }