// Importar las dependencias necesarias
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config'); // Importar la configuración desde config.js

// Crear una nueva instancia del cliente de WhatsApp
const client = new Client();

// Evento para recibir el código QR y autenticar el cliente
client.on('qr', (qr) => {
    console.log('Escanea este código QR con tu teléfono para iniciar sesión:');
    qrcode.generate(qr, { small: true });
});

// Evento para cuando el cliente se autentique correctamente
client.on('authenticated', (session) => {
    console.log('Cliente autenticado correctamente');
    // Guardar la sesión para reconectar automáticamente en el futuro
    // Puedes guardar la sesión en una base de datos u otro almacenamiento según tus necesidades
});

// Evento para cuando el cliente se conecte correctamente
client.on('ready', () => {
    console.log('Cliente conectado y listo para recibir mensajes');
});

// Evento para recibir mensajes entrantes
client.on('message', async (message) => {
    // Implementación de la lógica para manejar los mensajes entrantes
    // Aquí puedes agregar la lógica para responder a comandos, procesar la entrada del usuario, etc.
});

// Iniciar sesión en WhatsApp
client.initialize();

// Créditos
console.log('\x1b[32m%s\x1b[0m', '=====================================');
console.log('\x1b[32m%s\x1b[0m', `         ${"MasterMisteryBot-MD".toUpperCase()} - Bienvenido al Bot MasterMistery-MD`);
console.log('\x1b[32m%s\x1b[0m', '=====================================');
console.log('\x1b[32m%s\x1b[0m', `Número de teléfono del creador: ${"+528441589604"}`);
console.log('\x1b[32m%s\x1b[0m', `Creador: ${"Chris-MasterMysteryAnonimo"}`);
console.log('\x1b[32m%s\x1b[0m', `GitHub: ${"MasterMisteryAnonimo"}`);
