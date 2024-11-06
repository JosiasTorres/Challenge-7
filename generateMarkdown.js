// generateMarkdown.js

// Función que devuelve el badge de la licencia basada en la elección
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// Función que devuelve el link de la licencia
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  return `\n- [Licencia](#licencia)\n`;
}

// Función que devuelve la sección de licencia del README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## Licencia\nEste proyecto está licenciado bajo la licencia ${license}.`;
}

// Función para generar el markdown completo del README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Descripción
${data.description}

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
${renderLicenseLink(data.license)}
- [Contribuciones](#contribuciones)
- [Pruebas](#pruebas)
- [Preguntas](#preguntas)

## Instalación
${data.installation}

## Uso
${data.usage}

${renderLicenseSection(data.license)}

## Contribuciones
${data.contributing}

## Pruebas
${data.tests}

## Preguntas
Para más información, visita mi [perfil de GitHub](https://github.com/${data.github}) o envíame un correo a ${data.email}.
`;
}

// Exportar la función para que pueda ser utilizada en index.js
export default generateMarkdown;
