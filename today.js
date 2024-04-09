const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
const year = today.getFullYear();

// Si le jour est inférieur à 10, on ajoute un zéro devant
if (day < 10) {
    day = '0' + day;
}

// Si le mois est inférieur à 10, on ajoute un zéro devant
if (month < 10) {
    month = '0' + month;
}

console.log("Nous sommes le : " + day + "/" + month + "/" + year);

