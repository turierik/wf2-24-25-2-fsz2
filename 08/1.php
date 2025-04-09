cica
<?php
    $a = 6;
    print $a;
    print($a);
    echo $a;
    echo($a);

    $b = [4, 3, 2, 6, 8, 11];
    echo implode(', ', $b);

    // 1. feladat
    // válogasd ki a páros számokat
    // a.) for ciklus, b.) foreach ciklus, c.) tömbfv.
    // JS: t.filter(fv)     PHP: array_filter(t, fv)
    $c = [];
    for($i = 0; $i < count($b); $i++){
        if ($b[$i] % 2 === 0){
            $c[] = $b[$i];
        }
    }
    echo "<br>";
    echo implode(', ', $c);

    $d = [];
    foreach ($b as $index => $elem){
        if ($elem % 2 === 0){
            $d[] = $elem;
        }
    }
    echo "<br>";
    echo implode(', ', $d);

    $e = array_filter($b, fn($x) => $x % 2 === 0);
    echo "<br>";
    echo implode(', ', $e);

    // 2. feladat
    // emeld négyzetre a tömböt
    // a.) for,   b.) foreach,     c.) tömbfv.
    $f = [];
    for($i = 0; $i < count($b); $i++){
        $f[] = $b[$i] * $b[$i];
    }

    $g = [];
    foreach($b as $elem){
        $g[] = $elem * $elem;
    }

    $h = array_map(fn($x) => $x * $x, $b);
    echo "<br>";
    echo implode(', ', $h);
?>
kutya