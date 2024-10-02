const projects = [
    { name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { name: 'Proyecto 2', description: 'Descripción del proyecto 2' }
];

const projectContainer = document.createElement('div');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h2>${project.name}</h2><p>${project.description}</p>`;
    projectContainer.appendChild(projectItem);
});

document.body.appendChild(projectContainer);
