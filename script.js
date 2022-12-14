//Define constants and variables

const searchButton = document.getElementById("searchButton");
let formInput = document.getElementById("search");
let textField = document.getElementById('search');
let nameText = document.getElementById("name");
let reposText = document.getElementById("repos");
let followersText = document.getElementById("followers");
let followingText = document.getElementById("following");
let joinedText = document.getElementById("joined");
let locationText = document.getElementById("location");
let bioText =  document.getElementById("bio");
let blogText = document.getElementById("blog");
let loginText = document.getElementById("login");
let avatarText = document.getElementById("avatar");
let avatarImg = document.getElementById("avatar");
let userNotFoundText = document.getElementById("textError");
let twitterText = document.getElementById("twitter");
let companyText = document.getElementById("company");

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


/**
 * Check if the username exists 
 */


async function checkUserName(input) {

    const url = "https://api.github.com/users/" + input;
    console.log("The URL is: " + url );

    try {
        const response2 = await fetch(url, {cache: "no-cache"});
        const result = await response2.json();

    if (response2.ok) {
        console.log("result:", result);
        
        // let avatar = result.avatar_url;
        let avatar = result.avatar_url;
        
        
        console.log("avatar url: " + avatar);

        let repos = result.public_repos;
        console.log ("Repos " + repos);

        let followers = result.followers;
        console.log("Followers: " + followers);

        let following = result.following;
        console.log("Following: " + following);

        let name = result.name;
        if (name == null) {
            name = "N/A"
        }
        console.log("Name: " + name);

        let login = result.login;
        console.log("Login: " + login);

        let blog = result.blog;
        if ((blog == null) || (blog == "")) {
            blog = "N/A"
        }
        console.log("Blog: " + blog);

        let location = result.location;
        if ((location == null) || (location == "")) {
            location = "N/A";
        }
        console.log("location " + location);
        
        let twitter = result.twitter_username;
        if (twitter == null) {
            twitter = "N/A";
        }
        console.log("Twitter: " + twitter)

        let company = result.company;
        if ((company == null) || (company == undefined) || (company == "")) {
            company = "N/A";
        }
        console.log ("Company: " + company);

        let joined = result.created_at;
        let joinedDate = new Date(joined);
        let day = joinedDate.getDate();
        let year = joinedDate.getFullYear();
        // let month = joinedDate.getMonth();

        
        let month = new Date(joinedDate); // yyyy-mm-dd

        let monthText = month.toLocaleString('default', { month: 'long' });

        let dateText = "Joined: " + day + " " + monthText + " " + year;
        
        // console.log("Joined date " + joinedDate);
        // console.log("Joined: " + dateText);
        
        let bio = result.bio;
        
        if ((bio == null) || (bio == "")) {
            bio = "This profile has no bio";
        }
        console.log("Bio: " + bio);

        populateData(name,repos,followers,following,dateText,location,blog,bio,login,avatar,twitter,company);
        
    }

    if (!response2.ok) {
        console.log("User not found")
        userNotFoundText.innerHTML = "User not found";
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
function populateData(name,repos,followers,following,joined,location, blog,bio,login,avatar,twitter,company) {

    
    nameText.innerHTML = name;
    reposText.innerHTML = repos;
    followersText.innerHTML = followers;
    followingText.innerHTML = following;
    joinedText.innerHTML = joined;
    locationText.innerHTML = location;
    blogText.innerHTML = blog;
    bioText.innerHTML = bio;
    loginText.innerHTML = login;
    twitterText.innerHTML = twitter;
    companyText.innerHTML = company;
    
    avatarImg.src = avatar;

    console.log("avatarImg " + avatarImg);


    // result.appendChild(document.createElement('img')).src = 'catcoin.png';

}

/**
 *  Change the backgroud color, text color, and text and icon on mouse click
 */

function toggleDarkLight() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");

    var swapText = document.getElementById("dark-mode");
    if (swapText.innerHTML === "Dark mode") {
        swapText.innerHTML = "Light mode";
        }
    else {
        swapText.innerHTML = "Dark mode";
    }
    

    var swapImage = document.getElementById("dark-mode-img");

    if (swapImage.src === "assets/icon-moon.svg"){
        swapImage.src = "assets/icon-sun.svg";
        console.log("From dark to light");
    } 
    else if 
        (swapImage.src === "assets/icon-sun.svg"){
            swapImage.src = "assets/icon-moon.svg";
            console.log("From light to dark");
        }
        
    
    
    else
    
    {
        swapImage.src = "assets/icon-sun.svg";   
        console.log("Default");
    }
    
}

  