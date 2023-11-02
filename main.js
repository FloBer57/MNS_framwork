/* NE PAS MODIFIER CETTE LIGNE */ let NumeroExercice=1;let NumeroPhase=1;color="text-success";

/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/

/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/
/* Affecter à la variable "user" déclarée ci-dessous votre Prénom et votre NOM */
let user="FlorentBERNAR";
/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/



/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h1>Evaluation de <strong>"+user+"</strong><h1>");
/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h2>Phase "+NumeroPhase+" : <span class='"+color+"'>Les bases</span><h2>");



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Lire &amp; Afficher</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/

/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Lire une valeur avec le message : "Entrez un nombre entier strictement positif" et mémoriser le résultat dans une variable au nom explicite : varNum
// - Lire une valeur avec le message : "Entrez une chaine de caractères" et mémoriser le résultat dans une variable au nom explicite : varStr
// - Afficher le contenu de varNum et varStr

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let varNum = lire("Veuillez rentrer un nombre strictement positif.")
varNum = varNum
let varStr = lire("Veuillez rentrer une chaine de cartères")

afficher ((varNum)," ",varStr)

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Addition</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une nouvelle variable numérique, lui affecter une valeur, lui additionner varNum et afficher le résultat

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/


let varTemp = 3
varCalc = varTemp + (varNum)
afficher (varCalc)


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Concaténation</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une nouvelle variable chaine de caractère, lui affecter une valeur, lui concaténer varStr et afficher le résultat

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let str_deux = "bonjour"
let str_calc = str_deux +""+ varStr
afficher (str_calc)
/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Condition IF</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Si varNum est strictement supérieur à 100, afficher "varNum est strictement supérieur à 100", sinon afficher "varNum est inférieur ou égal à 100"

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/
if (varNum > 100) {
    afficher ("varNum est strictement supérieur à 100")
}
else {
    afficher ("varNum est inférieur ou égal à 100")
}


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Boucle FOR</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Afficher tous les entiers de 0 à varNum à l'aide d'une boucle FOR

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

for (let i=0;i<=varNum;i++) {
    afficher(i)
}

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Boucle WHILE</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Afficher tous les entiers de 0 à varNum à l'aide d'une boucle WHILE

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

n = 0

while (n < varNum) {
    afficher (n);
    n++;
}


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Tableau</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une variable de type tableau contenant des valeurs de votre choix
// - Afficher le tableau

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let liste = [0,1,2,3]

afficher (liste)


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Tableau à deux dimensions</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une variable de type tableau contenant des tableaux contenant eux-mêmes des valeurs de votre choix
// - Afficher le tableau

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let liste_deux = [[1,2,3,4],[1,2,3,4]]
afficher (liste_deux)

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Routine</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une fonction qui prend en paramètre une valeur numérique et qui retourne son carré
// - Appeler cette fonction avec varNum et afficher son résultat

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

function carre(oui) {
    let result = oui * oui;
    return result ;
}

afficher (carre(varNum))


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ NumeroPhase++;NumeroExercice=1;color="text-warning";
/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h2>Phase "+NumeroPhase+" : <span class='"+color+"'>Niveau intermédiaire</span><h2>");




/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Tableau</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une variable de type tableau contenant des valeurs de votre choix
// - Afficher le tableau
// - Puis afficher individuellement le contenu de chacune des cases

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let tab = [1,2,3,4,5,6,7,8,9,10]
afficher (tab)
for (i=0;i<taille(tab);i++){
    afficher(tab[i]);
}


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Tableau à deux dimensions</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Déclarer une variable de type tableau contenant des tableaux contenant eux-mêmes des valeurs de votre choix
// - Afficher le tableau
// - Puis afficher individuellement le contenu de chacune des cases

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let tab_deux = [[1,2,3,4],[5,6,7,8]]
afficher (tab_deux)

for (i=0;i<taille(tab_deux);i++){
    for (j=0;j<taille(tab_deux[i]);j++){
        afficher(tab_deux[i][j]);
    }
}

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Nombre aléatoire</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Utiliser la fonction aleatoire() pour générer un nombre compris entre 10 et 20
// - Afficher le nombre obtenu
// - Afficher tous les entiers compris entre 10 et le nombre obtenu par ordre décroissant

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let alea = aleatoire(10,20)
afficher (alea)

for (i=alea;i>=10;i--){
    afficher(i)
}

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Tableau aléatoire</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Créer une fonction qui génère un tableau de taille aléatoire (comprise entre 5 et 10) contenant des valeurs aléatoires (comprises en 0 et 100)
// - Appeler la fonction et afficher le résultat

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let tab_alea = []


let numTabAlea = aleatoire(5,10)

for(i=0; i<= numTabAlea;i++){
    let numAlea = aleatoire(0,100)
    tab_alea.push(numAlea);
}

afficher (tab_alea)


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Fusion de tableaux + conversion chaine de caractères + calcul total</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Créer deux tableaux à l'aide de la fonction de l'exercice précédent.
// - Générer une chaine de caractères contenant toutes les valeurs du premier tableau et toutes les valeurs du deuxième tableau
// - Calculer la somme de tous les entiers contenus dans les deux tableaux
// - Afficher les deux tableaux, la chaine de caractères et le total

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let tableau_alea = []
let tableau_alea_deux = []
let tableaux = []

for(i=0; i<= numTabAlea;i++){
    let num_Alea = aleatoire(0,100);
    let num_Alea_Deux = aleatoire(0,100);
    tableau_alea.push(num_Alea);
    tableau_alea_deux.push(num_Alea_Deux);
}

for (i=0;i < taille(tableau_alea);i++){
    tableaux.push(tableau_alea[i]);
}

for (i=0;i<taille(tableau_alea_deux);i++){
    tableaux.push(tableau_alea_deux[i]);
}

/* J'ai réussi ici à avoir toutes mes valeurs dans un seul et même tableau. Mtn je dois trouver comment les transformer en chaine de carac. */

let tableauxString = tableaux.toString();

/* Cela permet d'avoir toutes mes valeurs de mon tableaux en "string" d'ou le toString sans avoir à modifié le premier. */
let score = 0

for (i=0;i<taille(tableaux);i++){
    score = score + tableaux[i]
}

/* Reponse finale : */
afficher (tableau_alea)
afficher (tableau_alea_deux)
afficher (tableauxString)
afficher (score)

/* J'EN SUIS A MTN */

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ NumeroPhase++;NumeroExercice=1;color="text-danger";
/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h2>Phase "+NumeroPhase+" : <span class='"+color+"'>Niveau challenge</span> (bonus)<h2>");





/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Morse</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - A l'aide des tableaux fournis ci-dessous, créer une fonction qui déchiffre un message codé en morse
// - Utiliser cette fonction pour décoder le contenu dans la variable "message";
// - Créer une fonction pour chiffrer un message en morse
// - Bonus : Trouver une alternative avec un seul et unique tableau (associatif)
equivalentMorse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
equivalentAlphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
message=[".-..","."," ","--","---",".-.","...","."," ",".","...","-"," ","..-","-.","."," ",".","...",".--.",".","-.-.","."," ","-..","."," ","--.",".-.",".-","-.","-..","..."," ","--",".-","--","--","..","..-.",".",".-.",".","..."," ","--",".-",".-.","..","-.","..."," ",".--.",".-",".-.","..-.",".-","..","-",".","--",".","-.","-"," ",".-.",".","-.-.","---","-.","-.",".-","..","...","...",".-","-...",".-..","."," ",".-"," ","...",".","..."," ","-..",".","..-.",".","-.","...",".","..."," ",".","-"," ","...",".","..."," ","--","---","..-","...","-",".-","-.-.","....",".","..."," ","--",".-","..","..."," ","-.-.",".-"," ","-."," ",".-"," ",".-.","..",".","-."," ",".-"," ","...-","---","..",".-."];

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/


for (i=0;i<taille(message);i++){
    for (j=0;j<taille(message);j++){
        if (message[i] == equivalentMorse[j]){
            afficher (equivalentAlphabet[j]);
        }
}   }

text = ["B","O","N","J","O","U","R"];

function codeMorse(param) {
    for (i=0;i<taille(param);i++){
        for (j=0;j<taille(equivalentAlphabet);j++){
            if (param[i]== equivalentAlphabet[j]){
                afficher (equivalentMorse[j]);
            }
    }   }    
}

codeMorse(text)


/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Invasion</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - A l'aide du tableau "invasion" fourni ci-dessous, créer un nouveau tableau de dimensions égales
// - Le contenu de chaque case du nouveau dépend du contenu de la case équivalente (même "i" et même "j") du tableau "invasion" :
//  	- si le nombre de la case du tableau "invasion" est pair et est compris entre 500 et 700, alors la case du nouveau tableau doit contenir la chaine de caractères "&#11035;"
//  	- sinon elle doit contenir la chaine de caractère "<span style='opacity:.15;'>&#11036;</span>"
// - Afficher le nouveau tableau
invasion=[[321,340,982,906,343,621,110,483,374,974],[785,751,139,215,139,536,604,664,981,786],[722,189,783,211,676,636,138,549,286,959],[788,610,894,526,610,658,542,696,930,196],[912,324,594,652,549,592,682,837,644,679],[936,695,243,508,656,656,668,203,518,797],[781,311,249,524,618,538,602,992,331,635],[318,248,338,536,618,614,584,673,610,978],[885,487,648,502,160,540,686,352,532,493],[714,672,108,686,606,622,506,638,815,132],[764,765,661,841,546,554,615,533,431,728],[857,738,728,541,950,526,618,648,714,271],[390,235,917,249,215,351,717,798,264,178],[495,281,161,249,401,439,298,760,834,234],[895,474,759,917,531,636,598,678,761,436],[456,775,332,782,502,628,996,738,295,627],[349,570,400,632,616,680,666,676,457,533],[101,246,682,692,968,662,634,767,554,811],[897,768,264,510,532,658,576,804,618,369],[992,884,380,658,526,672,500,824,170,168],[832,178,759,618,624,554,608,615,624,113],[796,181,650,602,421,582,576,774,696,268],[731,516,187,580,674,616,600,680,655,759],[938,735,599,269,634,514,977,453,685,406],[110,807,927,931,780,622,564,612,134,885],[726,324,995,326,761,603,411,284,165,567]];

/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let new_invasion = []

for (i=0;i<taille(invasion);i++){
    for (j=0;j<taille(invasion[i]);j++){
        if (invasion[i][j] <= 700 && invasion[i][j] >= 500) {
            new_invasion.push("&#11035;");
        }
        else {
            new_invasion.push("<span style='opacity:.15;'>&#11036;</span>");
        }
    }  
}

afficher(new_invasion)


/* for (i=0;i<taille(tab_deux);i++){
   for (j=0;j<taille(tab_deux[i]);j++){
       afficher(tab_deux[i][j]);
   }
}/*

/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/



/* NE PAS MODIFIER CETTE LIGNE */ afficher("<h3><span class='"+color+"'>#"+(NumeroPhase)+"-"+(NumeroExercice++)+"</span> : <small><em>Calculatrice binaire</em></small></h3>");
/*#####################################################################*\
|------------------------------------------  EXERCICE  ---------------------------------------------------|
\*#####################################################################*/
/*------------  ENONCE DE L'EXERCICE  -------------------------------------------------------------------*/

// - Créer une fonction qui prend en paramètre une chaine de caractères composée de 0 et de 1
// - Pour convertir un nombre binaire en décimal, il faut multiplier le dernier chiffre par 2^0=1, l'avant-dernier chiffre par 2^1=2, l'avant-avant-dernier chiffre par de 2^2=4 et ainsi de suite, et additionner tous les résultats.
// - Exemple : "1011" = 1*2^0 + 1*2^1 + 0*2^2 + 1*2^3 = 1 + 2 + 0 + 8 = 11.
// - Appeler la fonction avec la valeur "101010" en paramètre et afficher le résultat.
// - Bonus : Créer la fonction inverse, qui prend en paramètre une valeur décimale et qui la convertit en binaire.
// - Bonus : Généraliser ces fonctions pour convertir n'importe quel nombre de n'importe quelle base : binaire (base 2), décimal (base 10), hexadécimal (base 16)...) en décimal, et inversement.
// - Rappel : 
//  	- les nombres décimaux (en base 10) sont composés des chiffres suivant : 0,1,2,3,4,5,6,7,8,9
//  	- les nombres binaires (en base 2) sont composés des chiffres suivant : 0,1
//  	- les nombres hexadécimaux (en base 16) sont composés des chiffres suivant : 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
//  	- les nombres en base N sont composés des chiffres 0 à (N-1)
/*------------  DEBUT DU CODE DE L'EXERCICE  ------------------------------------------------------------*/

let number_DecToBin = lire("Veuillez rentrer le nombre décimal à mettre en binaire")

function decimalToBinaire(number) {
    let accumulation = "";
    let div;
    let modulo;
    afficher("Voici le nombre décimal pour le nombre binaire ",number)
    while (div != 0 ) {
        div = Math.floor(number/2);
        modulo = number % 2;
        number = div ;
        accumulation = modulo.toString() + accumulation;
        afficher(accumulation);
    }
}


decimalToBinaire(number_DecToBin);


let number_BinToDec = lire("Veuillez rentrer le nombre binaire à mettre en décimal")

function binaireToDecimal(number) {
    let result = 0;
    let longeur = taille(number);

    afficher ("Voici le nombre binaire pour le nombre décimal ", number_BinToDec)
    for (i=0;i<= longeur;i++){
        result = Math.pow()
        }
        afficher(result)
    }


function binaireToDecimal(nombre) {
    // Initialise le résultat de la conversion
    let decimal = 0;
    // Convertit le nombre entier en chaîne de caractères
    let chaine = nombre.toString();
    // Parcourt la chaîne de caractères de droite à gauche
    for (let i = 0; i < chaine.length; i++) {
      // Convertit le chiffre courant en nombre
      let chiffre = parseInt(chaine[chaine.length - 1 - i], base);
      // Calcule la puissance de la base correspondant à la position du chiffre
      let puissance = Math.pow(2, i);
      // Ajoute le produit du chiffre et de la puissance au résultat
      decimal += chiffre * puissance;
    }
    // Retourne le résultat
    return decimal;
  }

//  A MODFIIER
binaireToDecimal(101010);
/*------------  FIN DU CODE DE L'EXERCICE  --------------------------------------------------------------*/

