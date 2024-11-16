<?php
// Dati di connessione al database
$servername = "sql8.freesqldatabase.com";
$username = "sql8745144";
$password = "Y5l66x5nyw";
$dbname = "sql8745144";
$port = 3306;

// Creazione della connessione
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verifica della connessione
if ($conn->connect_error) {
  die("Connessione fallita: " . $conn->connect_error . " (" . $conn->connect_errno . ")");
}

// La query SQL che desideri eseguire
$sql = "SELECT nome, descrizione FROM piatti WHERE id_categoria = 2";
$result = $conn->query($sql);

if ($result === false) {
  die("Errore nella query: " . $conn->error);
}

if ($result->num_rows > 0) {
  // Output dei dati di ogni riga
  while ($row = $result->fetch_assoc()) {
    echo "nome: " . $row["nome"] . " - descrizione: " . $row["descrizione"] . "<br>";
  }
} else {
  echo "0 risultati";
}

// Chiusura della connessione
$conn->close();
