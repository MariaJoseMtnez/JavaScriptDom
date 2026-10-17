
//const usuarioAdmin = usuarios.find(user => usuarios.admin ===true)

const usuarios = [
    { id: 1, nombre: "Ana", admin: false },
    { id: 2, nombre: "Luis", admin: false },
    { id: 3, nombre: "Marta", admin: true },
    { id: 4, nombre: "Pablo", admin: true }
];


function esAdmin(user){
    return user.admin===true;
}

const userAdmin=usuarios.find(esAdmin)

function localizarPorId(user){
    return user.id===idBuscado
}
let userId=usuarios.find(localizarPorId(4))