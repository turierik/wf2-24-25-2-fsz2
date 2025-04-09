<?php
    $lista = ["alma", "banán", "citrom", "datolya", "eper"];
    $tablazat = [[1, 2, 4], [0, 0, 7], [6, 6, 6], [4, 0, 4]];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php for($size=8; $size<=16; $size++): ?>
        <p style="font-size: <?= $size ?>px">Hello világ!</p>
    <?php endfor; ?>

    <ul>
        <?php foreach($lista as $elem): ?>
            <li><?= $elem ?></li>
        <?php endforeach; ?>
    </ul>

    <table>
        <?php foreach($tablazat as $sor): ?>
        <tr>
            <?php foreach($sor as $cella): ?>
                <td><?= $cella ?></td>
            <?php endforeach; ?>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>