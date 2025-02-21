/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/ console.log("----------------Esercizio A----------------");

const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/ console.log("----------------Esercizio B----------------");

const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/ console.log("----------------Esercizio C----------------");

const me = { name: "Marcello", surname: "Miranda", age: 20 };
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/ console.log("----------------Esercizio D----------------");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/ console.log("----------------Esercizio E----------------");

me.skills = ["Javascript", "Java"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/ console.log("----------------Esercizio F----------------");

me.skills.push("C++ for Arduino");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/ console.log("----------------Esercizio G----------------");

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/ console.log("----------------Esercizio 1----------------");

const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/ console.log("----------------Esercizio 2----------------");

const whoIsBigger = (n1, n2) => {
  if (n1 < n2) {
    return n2;
  } else {
    return n1;
  }
};
console.log(whoIsBigger(15, 20));
console.log(whoIsBigger(10, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/ console.log("----------------Esercizio 3----------------");

const splitMe = (str1) => {
  return str1.split(" ");
};
console.log(
  splitMe(
    "Un Anello per domarli tutti, un anello per trovarli, un anello per ghermirli e nell'oscurità incatenarli"
  )
);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/ console.log("----------------Esercizio 4----------------");

const deleteOne = (str2, boolean) => {
  if (boolean === false) {
    return str2.slice(0, str2.length - 1);
  } else {
    return str2.slice(1, str2.length);
  }
};
console.log(deleteOne("ciao", false));
console.log(deleteOne("ciao", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/ console.log("----------------Esercizio 5----------------");

const onlyLetters = (str3) => {
  return str3.replace(/\d+/g, ""); //vorrei tanto sapere chi ha avuto l'idea di creare questa cosa, poteva farlo un po più facile da scrivere
};
console.log(onlyLetters("prova 123 prova"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("----------------Esercizio 6----------------");

const isThisAnEmail = (email) => {
  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //pure questo che diamine di comando è, ma fare una cosa integrata un po più semplice no ? ci ho messo 15 minuti a trovarla
  return patternEmail.test(email);
};
console.log(isThisAnEmail("marcellomiranda2004@gmail.com"));
console.log(isThisAnEmail("miranda_marcello-2004£email;net"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/ console.log("----------------Esercizio 7----------------");

const whatDayIsIt = () => {
  let day = new Date();
  const today = day.getDay();
  switch (today) {
    case 0:
      return "Oggi è Domenica";

    case 1:
      return "Oggi è Lunedi";

    case 2:
      return "Oggi è Martedi";

    case 3:
      return "Oggi è Mercoledi";

    case 4:
      return "Oggi è Giovedi";

    case 5:
      return "Oggi è Venerdi";

    case 6:
      return "Oggi è Sabato";
    default:
      "day error";
  }
};
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/ console.log("----------------Esercizio 8----------------");

const rollTheDices = (number) => {
  let sum = 0;
  let values = [];
  for (let i = 0; i < number; i++) {
    const dices = dice();
    console.log(dices);
    sum += dices;
    values.push(dices);
  }
  console.log(`la somma dei tiri fatti è ${sum}`);
  return {
    sum: sum,
    values: values,
  };
};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/ console.log("----------------Esercizio 9----------------");

const howManyDays = (date) => {
  const todayDate2 = new Date();
  const pastDate = new Date(date);
  const difference = todayDate2 - pastDate;
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24)); //questa cosa ho dovuto cercarla su internet perché altrimenti mi usciva tutti in millisecondi
  const daysPositive = Math.abs(daysDifference); //se non inserivo questa stringa i giorni uscivano in negativo, per fortuna è stato facile trovarlo su google

  return `dal ${date} sono passati ${daysPositive}`;
};
console.log(howManyDays("2025/02/11")); //ci ho messo un po a capire che non funzionava perché dovevo scrivere la data in stile "americano" e non ho capito come convertirlo

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("----------------Esercizio 10----------------");

const isTodayMyBirthday = () => {
  const todayDate = new Date();
  const monthDay = todayDate.getDate();
  const actualMonth = todayDate.getMonth();

  if (actualMonth === 10 && monthDay === 12) {
    // il mio compleanno cade il 12/11
    return `true, Buon Compleanno !`;
  } else {
    return false;
  }
};
console.log(isTodayMyBirthday());

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003", //non per fare il pignolo ma è uscito nel 2004
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002", //non per fare il pignolo ma è uscito nel 2003
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978", //non per fare il pignolo ma è uscito nel 2002
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
//se non lo spostavo non mi funzionavano le espressioni, non so perché

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/ console.log("----------------Esercizio 11----------------");
const deleteProp = (obj, prop) => {
  delete obj[prop];
  return obj;
};

const person = {
  name: "Marco",
  age: 15,
  city: "Milano",
};

console.log(deleteProp(person, "age")); // Rimuove la proprietà 'age'

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/ console.log("----------------Esercizio 12----------------"); //per fare questo ci ho messo 45 minuti
const newestMovie = (movies) => {
  let newest = movies[0];
  movies.forEach((movie) => {
    if (parseInt(movie.Year) > parseInt(newest.Year)) {
      newest = movie;
    }
  });
  return `il film piu recente è ${newest.Title}`;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/ console.log("----------------Esercizio 13----------------");
const countMovies = () => {
  let numberOfmovies = 0;
  for (let i = 0; i < movies.length; i++) {
    numberOfmovies += 1;
  }
  return `in tutto ci sono ${numberOfmovies}`;
};
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/ console.log("----------------Esercizio 14----------------");
const onlyTheYears = () => {
  let onlyTheYears = [];
  for (let i = 0; i < movies.length; i++) {
    onlyTheYears.push(movies[i].Year);
  }
  return onlyTheYears;
};
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ console.log("----------------Esercizio 15----------------");
const onlyInLastMillennium = () => {
  let onlyInLastMillennium = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year < 2000) {
      onlyInLastMillennium.push(movies[i].Title);
    }
  }
  return onlyInLastMillennium;
};
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/ console.log("----------------Esercizio 16----------------");
const sumAllTheYears = () => {
  let sumYears = 0;
  for (let i = 0; i < movies.length; i++) {
    sumYears += parseInt(movies[i].Year);
  }
  return `la somma di tutti gli anni dei film è ${sumYears}`;
};
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/ console.log("----------------Esercizio 17----------------");
const searchByTitle = (title) => {
  for (let i = 0; i < movies.length; i++) {
    if (title === movies[i].Title) {
      return `${movies[i].Title} è stato trovato`;
    }
  }
  return `nessun film chiamato ${title} è stato trovato`;
};
console.log(searchByTitle("The Lord of the Rings"));
console.log(searchByTitle("The Mask"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/ console.log("----------------Esercizio 18----------------");
const searchAndDivide = (str4) => {
  let searchAndDivide = { match: [], unmatch: [] };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(str4.toLowerCase())) {
      searchAndDivide.match.push(movies[i]);
    } else {
      searchAndDivide.unmatch.push(movies[i]);
    }
  }
  return searchAndDivide;
};
console.log(searchAndDivide("avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/ console.log("----------------Esercizio 19----------------");
const removeIndex = (index) => {
  movies.splice(index, 1);
  return movies;
};

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

//so che non è necessario sempre fare console.log, lo metto lo stesso cosi quando apro la console posso vedere tutti gli esercizi

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/ console.log("----------------Esercizio 20----------------");
const idTracker = () => {
  const container = document.getElementById("container");
  return container;
};
console.log(idTracker());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/ console.log("----------------Esercizio 21----------------");
const tdTracker = () => {
  const td = document.getElementsByTagName("td");
};
console.log(tdTracker());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/ console.log("----------------Esercizio 22----------------");
const stampTd = () => {
  const tdStamp = document.getElementsByTagName("td");

  for (let i = 0; i < tdStamp.length; i++) {
    console.log(tdStamp[i].textContent);
  }
};
console.log(stampTd());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/ console.log("----------------Esercizio 23----------------");
const redLink = () => {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};
console.log(redLink());

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/ console.log("----------------Esercizio 24----------------");
const addElement = () => {
  const myList = document.getElementById("myList"); //ho dovuto aggiungere nel documento una ul perché altrimenti mi andava in errore
  const newLi = document.createElement("li");
  newLi.textContent = "New";
  myList.appendChild(newLi);
};
console.log(addElement());

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/ console.log("----------------Esercizio 25----------------");
const clearList = () => {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
};
console.log(clearList());

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/ console.log("----------------Esercizio 26----------------");
const addClass = () => {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};
console.log(addClass());

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/ console.log("----------------Esercizio 27----------------");

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/ console.log("----------------Esercizio 28----------------");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/ console.log("----------------Esercizio 29----------------");
