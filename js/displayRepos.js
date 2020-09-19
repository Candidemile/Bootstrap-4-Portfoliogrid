// import {
//   fetchRepos
// } from './fetchRepos';

// ** Function to display GitHub Projects from GitHub API response
function display() {
  console.info('Rendering card-grid in My Projects section');
  // get template for card
  const template = document.getElementById('card-template');
  // get card-grid
  const cardGrid = document.getElementById('card-grid');
  // get array of projects data
  let array = [1, ]
  // display projects
  array.forEach(elem => {
    let card = template.content.cloneNode(true);
    cardGrid.appendChild(card);
  })
}

display();