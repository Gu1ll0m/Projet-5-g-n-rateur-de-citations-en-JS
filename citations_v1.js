// version avec 3 variables

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

 //=======================================================================================//

//console.log('troisVariables is called'); // pour test
// Création de la variable Citation avec 3 variables
  var Citation = {
    init: function (randomDebut, randomMilieu, randomFin) { //initialisation
     this.randomDebut = randomDebut;
     this.randomMilieu = randomMilieu;
     this.randomFin = randomFin;
   },
   // Renvoie la description de Citation3
   decrire: function () { // description de Citation
         return (this.randomDebut + " " + this.randomMilieu+ " " +this.randomFin);
   },
 };

 // return un entier aléatoire entre 1 et max
 function generate_random(max){
   return Math.floor((Math.random() * max) + 1);
 }

 // génère 'max' citation(s)
 // return un tableau avec dans chaque case une citation unique
 function generate_citation(max){
 	var tab = []; //on créé un tableau
 	for (var i = 0; i < max; i++) { // boucle for avec initialisation à 0, la boucle fonctionne jusqu'au chiffre random (condition)
 		var citation = Object.create(Citation); // création de l'objet Citation
 		citation.init(debut[generate_random(13)], milieu[[generate_random(13)]], fin[[generate_random(13)]]); // initialise l' Objet Citation avec un début, un milieu et une fin
 		tab[i] = citation; // incrémente le tableau de notre citation
 	}
 	return tab; // retourne le tableau, donc la citation
 }


// fenêtre choix
 console.log("Bienvenue dans le générateur de citation !");
 var proposition; // variable proposition => 5 choix possibles
 while (proposition !== "0") {
     console.log("1 : Générer 1 citation : ");
     console.log("2 : Générer 2 citations : ");
     console.log("3 : Générer 3 citations : ");
     console.log("4 : Générer 4 citations : ");
     console.log("5 : Générer 5 citations : ");
     console.log("0 : Quitter");
     var proposition = prompt("Choisissez une option : "); // la variable proposition est égal au choix de l'utilisateur

 		if(proposition!=0){ // si proposition est différent de 0
 			var tableau_citation = generate_citation(proposition); // on créé un tableau
 			for (var i = 0; i < proposition; i++) { // boucle for avec initialisation à 0, la boucle fonctionne tant que i est inférieur à la proposition
 				var citation = tableau_citation[i];
 				console.log("Voici la citation "+(i+1)+": "); // message quantifiant la citation
 				console.log(citation.decrire()); // message qui décrit la citation
 			}

 		} else { // si proposition est égal à 0
 			console.log("Au revoir !") // message indiquant que le programme est terminé
 			break; // quitte le programme
 		}
 }
 
