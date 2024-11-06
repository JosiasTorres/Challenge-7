// index.js

// Importar los paquetes necesarios
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// Array de preguntas para la entrada del usuario
const questions = [
  { name: 'title', message: '¿Cuál es el título del proyecto?' },
  { name: 'description', message: 'Escribe una breve descripción del proyecto:' },
  { name: 'installation', message: 'Instrucciones de instalación:' },
  { name: 'usage', message: '¿Cómo se usa el proyecto?' },
  { name: 'license', message: 'Selecciona una licencia:', type: 'list', choices: ['MIT', 'GPL', 'Apache 2.0', 'BSD', 'None'] },
  { name: 'contributing', message: '¿Cómo contribuir al proyecto?' },
  { name: 'tests', message: 'Instrucciones de pruebas:' },
  { name: 'github', message: '¿Cuál es tu nombre de usuario de GitHub?' },
  { name: 'email', message: '¿Cuál es tu dirección de correo electrónico?' },
];

// Función para escribir el archivo README
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log('README.md generado con éxito!');
}

// Función para inicializar la app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Llamada para inicializar la app
init();
