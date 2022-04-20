// getting all required elements
//const searchWrapper = document.querySelector(".search-input");
const inputBox = document.getElementById("header-search-input");
const searchResultsDiv = document.getElementById("search-results");
//const suggBox = searchWrapper.querySelector(".autocom-box");
const resultsList = document.getElementById('recent-list');
//const icon = searchWrapper.querySelector(".icon");
//let linkTag = searchWrapper.querySelector("a");
let webLink;
fetch("/assets/suggestions.json")
  .then(response => response.json())
  .then(json => {
      var suggestionsJson = json;
      console.log(suggestionsJson['Announcement Bar']);
  });

let suggestions = [
    "Announcement Bar",
    "Collection Page",
    "Cart Page",
    "Tutorial Videos",
    "Theme Installation",
    "Header",
    "Sections",
    "Footer",
    "Search Page & Search Popup",
    "Changelog",
    "Newsletter",
    "Home Page"
]
let _suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
       /* icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }*/
        const matches = suggestions.filter(s => s.toLocaleLowerCase().includes(userData.toLocaleLowerCase()));

        if(matches.length > 0){
            searchResultsDiv.style.minHeight = '50px';
        }
        var _matched = suggestions.find(element => {
            if (element.includes()) {
              return true;
            }
          });
       console.log(matches);
        /*emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }*/
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

