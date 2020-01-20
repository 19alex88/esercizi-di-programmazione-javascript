/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var currentYear = 2019;
var birthYear = 1988;

var personYear = currentYear-birthYear;

console.log("La persona di cui hai inserito la data di nascita ha "+personYear+" anni.");

var to100 = 100 - personYear;

console.log("Gli mancano "+to100+" anni per arrivare a 100 =)");



