<?php
$marke = $_POST['marke'];
$modell = $_POST['modell'];
$baujahr = $_POST['baujahr'];
$kaufpreis = $_POST['kaufpreis'];
$werttrailer = $_POST['werttrailer'];
$versicherungssumme = $_POST['versicherungssumme'];
$schiffstyp = $_POST['schiffstyp'];
$motorleistung = $_POST['motorleistung'];
$wertab = $_POST['wertab'];
$anrede = $_POST['anrede'];
$nachname = $_POST['nachname'];
$vorname = $_POST['vorname'];
$geburtsdatum = $_POST['vorname'];
$telefon = $_POST['telefon'];
$postleitzahl = $_POST['postleitzahl'];
$strasse = $_POST['postleitzahl'];
$stadt = $_POST['stadt'];
$email = $_POST['email'];

$an = "mschlief@pantaenius.com";
$betreff = "Contact Form";

$content="
    Marke: $marke
    Modell: $modell
    Baujahr: $baujahr
    Kaufpreis: $kaufpreis
    Wert Trailer: $werttrailer
    Versicherungssumme: $versicherungssumme
    Schiffstyp: $schiffstyp
    Motorleistung: $motorleistung
    Wert AB: $wertab
    Anrede: $anrede
    Nachname: $nachname
    Geburtsdatum: $geburtsdatum
    Telefon: $telefon
    Strasse: $strasse
    Stadt: $stadt
    Email: $email
";

    mail($destino,$asunto,$comentario,$headers);

    
    echo $content;
    
?>
