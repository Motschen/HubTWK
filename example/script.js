// Variable des Typs Integer (wird automatisch ermittelt)
let clickCount = 0;
// Hier suchen wir auf der Website nach unserem in HTML definiertem Knopf und speichern ihn
const button = document.getElementById('our-button');
// Nun fügen wir eine Funktion hinzu, die aufgerufen wird, sobald man auf den Knopf drückt
button.addEventListener('click', () => {
    // Wir erhöhen den Klick-Zähler
    clickCount++;
    // Und geben die Anzahl der im bisher leeren Element "ergebnis" aus -> Es erscheint auf der Website!
    document.getElementById('ergebnis').innerText = `Knopf ${clickCount} mal gedrückt!`;
});