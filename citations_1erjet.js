//création des variables
var debut = ["Y a pas à dire, ", "Mon père, il n'était pas ébouriffé, ", "C’est vrai ce qu’on dit, ",
 "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe, ", "Sur le principe, ", "Oui, je sais, ",
 "Au bout d'un moment, ", "On se fait couper les deux bras, ", "La prochaine fois que vous faites venir un barde, ", "Oh, mais c'est pas vrai, ",
 "Merlin, i'sait déjà pas monter des blancs en neige, ", "Mais comment voulez-vous que j'vous prouve que j'suis moi, ", "De toutes façons, ",
 "Rangez moi ça, débile, "];

var milieu = [" dès qu'il y a du dessert, ", " déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, ",
 " vous êtes le fils d’un démon et d’une pucelle ? ", " ah non, ça c’est que nous, parce qu’il faut être capable de passer pour des cons en un temps record. ",
 " la Table ronde, ", " j'ai arbitré un peu sec, ", " il est vraiment druide, c'mec-là, ", " on revient vous voir et 5 minutes après on retourne se mettre sur la gueule, ",
 " je lui ouvre le bide de là à là, j'lui sors les boyaux et je file sa langue à bouffer aux chiens, ", " une heure que j'crapahute dans tout le château avec ma bougie, ",
 " alors préparer une potion de polymorphie… ", " ça devient débile, ", " c'est ma mère, ", " la table ronde, "];

var fin = ["le repas est tout de suite plus chaleureux !", "voilà ! Allez, au lit !", "vous avez plus pris de la pucelle.",
 "ah non, là-dessus on a une avance considérable.", "c'est pas obligatoire.", "mais en même temps…", "ou ça fait quinze ans qu'il me prend pour un con ?",
 "mettez-vous à la place des ennemis, c'est désespérant.", "c'est clair, ça ?", "ça va bien, maintenant !", "permettez-moi d'avoir des doutes.",
 "à la fin !", "j'vais pas la faire tabasser par la garde.", "c'est pas la fête de l'artisanat !"];

var randomDebut = debut.splice(Math.random()*debut.length|0,1)[0];// prend aléatoirement une citation dans le tableau debut
var randomMilieu = milieu.splice(Math.random()*milieu.length|0,1)[0];// prend aléatoirement une citation dans le tableau milieu
var randomFin = fin.splice(Math.random()*fin.length|0,1)[0];// prend aléatoirement une citation dans le tableau fin


var Citation = {
  init: function (randomDebut, randomMilieu, randomFin) {
  this.randomDebut = randomDebut;
  this.randomMilieu = randomMilieu;
  this.randomFin = randomFin;
},

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.randomDebut + " " + this.randomMilieu+ " " +
            this.randomFin;
        return description;
    },
};

var citation1 = Object.create(Citation);
citation1.init(randomDebut, randomMilieu, randomFin);

var citation2 = Object.create(Citation);
citation2.init(randomDebut, randomMilieu, randomFin);

var citation3 = Object.create(Citation);
citation3.init(randomDebut, randomMilieu, randomFin);

var citation4 = Object.create(Citation);
citation4.init(randomDebut, randomMilieu, randomFin);

var citation5 = Object.create(Citation);
citation5.init(randomDebut, randomMilieu, randomFin);

console.log("Bienvenue dans le générateur de citation !");
var proposition; // variable proposition => 5 choix possibles
while (proposition !== "0") {
    console.log("1 : Générer 1 citation : "); // voir case "1"
    console.log("2 : Générer 2 citations : "); // voir case "2"
    console.log("3 : Générer 3 citations : ");
    console.log("4 : Générer 4 citations : ");
    console.log("5 : Générer 5 citations : ");
    console.log("0 : Quitter"); //voir case "0"
    var proposition = prompt("Choisissez une option : ");

    switch (proposition) {
      case "1": // afficher 1 citation
        console.log("Voici la citation souhaité : "); // affiche le message si proposition 1
        var Citation = Object.create(Citation); // création de Citation{
        var citation1 = Object.create(Citation);
        citation1.init(randomDebut, randomMilieu, randomFin);
        console.log(citation1.decrire());
        break; // retour à la fenêtre de proposition

      case "2": // Afficher 2 citations
        console.log("Voici les citations souhaités : "); // affiche le message si proposition 2
        var randomDebut = debut.splice(Math.random()*debut.length|0,1)[0];
        var randomMilieu = milieu.splice(Math.random()*milieu.length|0,1)[0];
        var randomFin = fin.splice(Math.random()*fin.length|0,1)[0];
        var Citation = Object.create(Citation); // création de Citation
        var citation2 = Object.create(Citation);
        citation2.init(randomDebut, randomMilieu, randomFin);
        console.log(citation1.decrire());
        console.log(citation2.decrire());
        break; // retour à la fenêtre de proposition

      case "0": // quitter le programme si 0
        console.log("Au revoir !")
        break;
      }
    }
