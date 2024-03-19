const express = require('express');
const userController = require('../assets/controllers/userController');
const templateController = require('../assets/controllers/templateController');
const app = express.Router();
const multiparty = require('connect-multiparty');
const path = require('path');
const ruta = path.join(__dirname, '../..', 'Public');


const md = multiparty({});
app.get('/usuarios', userController.getUsuario);
app.post('/usuarios/crear', md, userController.createUsuario);
app.post('/templates/crear', md, templateController.createTemplate);
app.post('/usuarios/login', md, userController.loginUsuario);
app.get('/login', (req, res) => {
    res.sendFile(path.join(ruta, 'login.html'));
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(ruta, 'CrearCuenta.html'));
})

app.get('/registroTemplate', (req,res)=> {
    res.sendFile(path.join(ruta, 'template.html'))
})

app.get('/clienteTemplate',(req, res) =>{
    res.sendFile(path.join(ruta, 'template.html'))
})

app.post('/template/nombre', md, templateController.nombreTemplate);

app.post('/usuarios/nombre', md, userController.nombreUsuario);

app.get('/cliente', (req, res) => {
    res.sendFile(path.join(ruta, 'CrearCuenta.html'));

})

module.exports = app;