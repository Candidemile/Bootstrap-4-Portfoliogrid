// ** fetchRepos
// a function to get information about the repos in my GitHub profile
// returns array of object, each object represents repo
let repos = async () => {
  const url = 'https://api.github.com/users/candidemile/repos';
  const response = await fetch(url);
  return await response.json()
};



// ** Function to display GitHub Projects from GitHub API response
function display(array) {
  console.info('Rendering card-grid in My Projects section');
  // get template for card
  const template = document.getElementById('card-template');
  // get card-grid
  const cardGrid = document.getElementById('card-grid');

  // display projects
  array.forEach(repo => {
    let card = template.content.cloneNode(true);
    card.querySelector('.name').textContent = repo.name;
    card.querySelector('.description').textContent = repo.description;
    let test;
    console.log(repo.clone_url);
    // set homepage link for repo
    repo.homepage ? card.querySelector('.fa-link').parentElement.href = repo.homepage : card.querySelector('.fa-link').remove();
    // set git link for repo
    repo.clone_url ? card.querySelector('.fa-github').parentElement.href = repo.clone_url : card.querySelector('.fa-github').remove();
    cardGrid.appendChild(card);
  })
}

// ** MAIN **
// Fetch array of repos form GitHub and feed it into render function
repos().then(res => {
  console.log(res);
  display(res)
});