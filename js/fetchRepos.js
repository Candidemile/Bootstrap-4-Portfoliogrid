// ** fetchRepos
// a function to get information about the repos in my GitHub profile
// returns array of object, each object represents repo

async function test() {
  const url = 'https://api.github.com/users/candidemile/repos';
  const response = await fetch(url);
  return response.json()
};