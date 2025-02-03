
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});







fetch('data.json')
  .then(response => response.json()) // .json() should be a function call
  .then(data => {
    console.log(data);
    displayProjects(data.projects);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function displayProjects(projects) {
  const add = document.querySelector('.projects-div'); // Fix: Query selector should target the div correctly
  add.innerHTML = ''; // Clear existing content

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" >View Project</a>
    `;

    add.appendChild(projectCard);
  });
}
