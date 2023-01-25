<html>
    <?php
        $caracter = ".";
        $scandir = scandir(".");

        foreach($scandir as $repertory){
            if(strpos($repertory, $caracter) === false){
                echo '<div id="content" onclick=display()>',$repertory,'</div>';

                $scan = scandir($repertory);
                foreach($scan as $file) {
                    if(!($file == "." || $file == "..")){
                        echo '<img src=',$repertory,'/',$file,' alt=',$file,'></img>';
                    }
                }
            }
        }       
        
    ?>
    <style>
        body{
            display: flex;
            flex-wrap: wrap;
        }
        div{
            cursor: pointer;
            height: 25px;
            margin: 1em;
            border: 1px solid black;
            border-radius: 0.2em;
            text-align: center;
            padding: 0.5em;
            box-shadow: 2px 2px black;
        }
        a{
            text-decoration: none;
            color: black;
            font-size: 1.2em;
        }

        div:hover{
            border-color: green;
            box-shadow: 2px 2px green;
        }

        img{
            height: 100px;
            width: 100px;
        }
    </style>

        <script>
            function display(){
                let content = document.getElementById("content");
                let img = document.createElement("img");
                img.src = "./icone/16410.png";
                document.body.appendChild(img);

                console.log("<?php echo 'bonjour'; ?>");

                
            }
        </script>

        <!-- à creser le data attribues en html-->
</html>