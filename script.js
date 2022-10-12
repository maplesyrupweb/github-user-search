//Define constants and variables

const searchButton = document.getElementById("searchButton");
let formInput = document.getElementById("search");
let textField = document.getElementById('search');


/**
 *  Event listener for search button
 */

 searchButton.addEventListener("click",function(event) {
    event.preventDefault();
    let input = document.getElementById("search").value;
    if (input !== "") {
        console.log(input);
        checkName();
        checkUserName(input);
        
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
        
        // console.log("Result ID2:", id2);
        // let advice2 = result2.slip.advice;
        // console.log("Advice2:", advice2);
        // console.log("id2: ", id2, "advice2: ", advice2);
        // totalAdviceGiven++;
        // populateData2(id2, advice2);
        // console.log("Total advice2 " + totalAdviceGiven);

        
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



function populateData2(id2,advice2) {

    adviceNumber2.innerHTML = id2;
    adviceTxt2.innerHTML = advice2;

    
}
