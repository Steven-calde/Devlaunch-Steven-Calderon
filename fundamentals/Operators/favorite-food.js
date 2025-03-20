/*

Escribe una pregunta simple en javascript que examine las preferencias culinarias
de tres personas: Maria, Pepe y Malvern. El programa analiza tres condiciones:

Comparte Maria la misma comida favorita que tanto Pepe como Malvern?
La comida favorita de Maria coincide ya sea con la de Pepe o con la de Malvern?
La preferencia de Maria es diferente tanto con la de Pepe como con la de Malvern?

 Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones,
 ejemplo: Si la comida favorita de Maria es la pizza, la de Pepe es el pollo y el de Malvern el pescado

 Los resultados de estas comparaciones se muestran luego, ofreciendo informacion sobre las similitudes
 y diferencias en las preferencias culinarias de los tres individuos

 La salida del programa sera:

 Does Maria share the same favorite food as both Pepe and Malvern?: False
 Does Maria's favorite food match either Pepe's or Malvern's? : False
 Does Maria's preference differ from both Pepe and Malvern's? : True

*/

const prompt= require('prompt-sync')()

const favoriteFoodMaria = prompt('Whats the favorite food of Maria? ')
const favoriteFoodPepe = prompt('Whats the favorite food of Pepe? ')
const favoriteFoodMalvern = prompt('Whats the favorite food of Malvern ')

const isMariaAndPepeSameFavoriteFood = favoriteFoodMaria == favoriteFoodPepe
const isMariaAndMalvernSameFavoriteFood = favoriteFoodMaria == favoriteFoodMalvern

const allMatch = isMariaAndPepeSameFavoriteFood && isMariaAndPepeSameFavoriteFood
const someMatch= isMariaAndMalvernSameFavoriteFood||isMariaAndMalvernSameFavoriteFood
const noMatch= !isMariaAndMalvernSameFavoriteFood || !isMariaAndMalvernSameFavoriteFood



console.log(`
    
Does Maria share the same favorite food as both Pepe and Malvern?: ${allMatch}
Does Maria's favorite food match either Pepe's or Malvern's? ${someMatch}
Does Maria's preference differ from both Pepe and Malvern's? ${noMatch}
    
    
    `)