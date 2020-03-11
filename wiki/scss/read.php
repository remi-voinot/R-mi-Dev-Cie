<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="margin: 0; width: 100%; height: 100%;">
    <style>
        html,
        body,
        div.c {
            height: 100%;
        }
    </style>
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.location.reload(1);
            }, 10*1000);
        }
    </script>

    <div style="background:#32ad8b" class="c">
        <div style='content: " ";'>.</div>
        <div id="textSection">
            <div style="margin: 40px; background: #bbbbbb; font-size:1.5rem; width: calc(100% - 80px); height: calc(100% - 80px);">
                <?php
                $homepage = file_get_contents('./maintext.scss');
                echo "<pre>" . $homepage . "</pre>";
                ?>
            </div>
        </div>

</body>

</html>