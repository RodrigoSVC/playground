/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.*/

function getAdmins(map){
    let admins = [];
    for (const [key, value] of map) {
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}

const userRoles = new Map();
userRoles.set('Rodrigo', 'Admin');
userRoles.set('Joao','Admin');
userRoles.set('Yngrid','Admin');
userRoles.set('Juao', 'User');
userRoles.set('Joaquim', 'User');

console.log(getAdmins(userRoles));

