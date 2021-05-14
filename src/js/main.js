// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

let add = (nb1,nb2) =>{
    console.log(nb1+nb2);
}

add(5,8);

let sous = (nb3,nb4) =>{
    console.log(nb3-nb4);
}

sous(8,4);

let mul = (nb5,nb6) =>{
    console.log(nb5*nb6);
}

mul(25,88);

let div = (nb7,nb8) =>{
    console.log(nb7/nb8);
}

div(98,55);

let modulo = (a,b) =>{
    console.log(a%b);
}

modulo(45,4);

let square = (e) =>{
    console.log(Math.sqrt(e));
}

square(52);


console.log(Math.sqrt(58));
console.log(Math.round(Math.sqrt(58)));
console.log(Math.floor(Math.sqrt(58)));
console.log(Math.ceil(Math.sqrt(58)));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// let capitalize = (chaine) =>{
//     return chaine.charAt(0).toUppercase()+chaine.substr(0,2).toLowercase();
// }

// console.log(capitalize("bliOhd"));

let prenom = "Nasila";

console.log(prenom.substr(1,3)); //asi

// / EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

let calcul = (nb1, operator, nb2) =>{
    switch(operator){
        case "+":
            return nb1+nb2;
        case "-":
            return nb1-nb2;
        case "*":
            return nb1*nb2;
        case "/":
            return nb1/nb2;
        default:
            return "veuillez entrer un op valide";            
               
    }
}

console.log(calcul(parseInt(prompt("choisis un chiffre")), prompt("un opérateur"), parseInt(prompt("encore un chiffre"))));



