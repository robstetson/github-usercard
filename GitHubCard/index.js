/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios.get('https://api.github.com/users/robstetson')
.then((response) => {
  container.appendChild(gitHubCard(response.data));
for(let i = 0; i < followersArray.length; i++){
  axios.get(`https://api.github.com/users/${followersArray[i]}`).then((response )=>{
    container.appendChild(gitHubCard(response.data))
  })
}
})
const followersArray = [ 
  'robstetson',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]
followersArray.map(function (user){
  axios.get('https://api.github.com/users/' + [user]).then((response)=> {
    const cardDiv = gitHubCard(response);
    const cardThing = document.querySelector('.cards');
    cardThing.appendChild(cardDiv);
  })
.catch(error => {
  console.log(error);
})
});
const container = document.querySelector('.cards');
function gitHubCard(object){
  const div1 = document.createElement('div');
  const img = document.createElement('img');
  const div2 = document.createElement('div');
  const h3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
    // const linkThing = document.createElement('a');
    const linkThingy = document.createElement('a');
  console.log(linkThingy);
  div1.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  username.classList.add('username');
  div1.appendChild(img); 
  div1.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(username);
  div2.appendChild(location);
  div2.appendChild(profile);
  profile.appendChild(linkThingy);
  // profile.append(linkThing);
  div2.appendChild(followers);
  div2.appendChild(following);
  div2.appendChild(bio);
  img.src = object.data.avatar_url;
  h3.textContent = object.data.name;
  username.textContent = object.login;
  location.textContent = `Location: ${object.data.location}`;
  // profile.textContent = 'Profile: ';
linkThingy.href = object.data.html_url;
linkThingy.textContent = `Profile: ${object.data.html_url}`;
  // linkThing.href = object.data.html_url;
  // linkThing.textContent = `${object.data.html_url}`;
  followers.textContent= `Followers: ${object.data.followers}`;
  following.textContent= `Following: ${object.data.following}`;
  bio.textContent= object.data.bio;
  return div1
  }
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3 (line 34).
*/
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
// img src = avarar_url
// h3 = name
// location = location
// a href = https://github.com/robstetson
// followers = followers
//following = following
//
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/






