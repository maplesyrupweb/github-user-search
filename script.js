//Define constants and variables

const searchButton = document.getElementById("searchButton");
let formInput = document.getElementById("search");
let textField = document.getElementById('search');

let nameText = document.getElementById("name");
let reposText = document.getElementById("repos");
let followersText = document.getElementById("followers");
let followingText = document.getElementById("following");
let joinedText = document.getElementById("joined");

//created_at: "2020-11-02T03:55:55Z"
/**
 *  Event listener for search button
 */

 searchButton.addEventListener("click",function(event) {
    event.preventDefault();
    let input = document.getElementById("search").value;
    if (input !== "") {
        console.log(input);
        checkName();
        checkUserName(input)
        
    }else {
        checkName();
    }
    
} )



async function checkUserName(input) {

    const url = "https://api.github.com/users/" + input;
    console.log("The URL is: " + url );

    try {
        const response2 = await fetch(url, {cache: "no-cache"});
        const result = await response2.json();

    if (response2.ok) {
        console.log("result:", result);
        
        let repos = result.public_repos;
        console.log ("Repos " + repos);

        let followers = result.followers;
        console.log("Followers: " + followers);

        let following = result.following;
        console.log("Following: " + following);

        let name = result.name;
        console.log("Name: " + name);

        let location = result.location;
        console.log("Location: " + location);

        let website = result.website;
        console.log("Website: " + website);

        let twitter = result.twitter_username;
        console.log("Twitter:" + twitter)

        let joined = result.created_at;
        let joinedDate = new Date(joined);
        let day = joinedDate.getDate();
        let year = joinedDate.getFullYear();
        // let month = joinedDate.getMonth();

        let month = new Date(joinedDate); // yyyy-mm-dd

        let monthText = month.toLocaleString('default', { month: 'long' });

        
        console.log("Joined date " + joinedDate);
        console.log("Joined: " + day + " " + monthText + " " + year);
        
        populateData(name,repos,followers,following);

        
    }

    } catch (error) {
        if (error) throw error;
        console.log("error", error);
    
    }
}

/**
 *  Validation
 */

function checkName() {

    if(textField.validity.valid) {
      document.getElementById('textError').innerHTML = "";
      textField.style.borderColor="";   
  }
    else if(textField.validity.valueMissing) {
    document.getElementById('textError').innerHTML = "Field can't be blank";      
    textField.style.borderColor = "#ffcc00";
  }
  }


/**
 * Get data from API and output to screen
 * 
 */
function populateData(name,repos,followers,following, joined) {

    nameText.innerHTML = name;
    reposText.innerHTML = repos;
    followersText.innerHTML = followers;
    followingText.innerHTML = following;
    joinedText.innerHTML = joined;

}
