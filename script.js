
function displayLinkToSpeciesMap(speciesCode){
    let linkButton = document.getElementById("linkToSpeciesMap");
    linkButton.style.display = "block";

    let linkAnchor = document.getElementById("anchorToSpeciesMap");
    let urlValue = linkAnchor.getAttribute("href");
    console.log(urlValue);

    // Note: The current month would be d.getMonth - 1 because the JS data is zero-based.
    // You want to go back one month. If it is the 5th of the month or earlier to the 1st then,
    // sightings on the last day of the previous month (or a few days earlier) would not be shown on the Species Map 
    // because the criteria would only be for the current month. Getting more data is better even though it may be a month past.
    // You can only use months as criteria on the Species Map.
    const d = new Date();
    let lastMonth = d.getMonth();    

    let urlStart = "https://ebird.org/map/";
    // The species code is coming in as an argument to this function.
    let urlMiddle = "?neg=true&env.minX=-82.68375908394206&env.minY=41.071905363975624&env.maxX=-80.92594658394206&env.maxY=41.705531369789014&zh=true&gp=false&ev=Z&excludeExX=false&excludeExAll=false&mr=on&"

    // You could use the current month as the end month.
    // Using the end month as 12 will always work because there won't be any sightings in the future.
    let urlMonths = "bmo=" + lastMonth + "&emo=12&yr=cur";   
    
    let fullURL = urlStart + speciesCode + urlMiddle + urlMonths;
    console.log(fullURL);

    linkAnchor.setAttribute("href", fullURL);
}


function reformatDateTime(dateAndTime){
    // yyyy-mm-dd hh:mm = format from eBird API data.
    let dTsplit = dateAndTime.split(" ");
    // console.log(dTsplit[0]);
    // console.log(dTsplit[1]);
    let d = dTsplit[0];
    let dArr = dTsplit[0].split("-");
    let newDate = dArr[1] + "-" + dArr[2]+ "-" + dArr[0];
    // console.log(newDate);
    
    let t = dTsplit[1];
    let hrMin = dTsplit[1].split(":");
    // console.log(hrMin[0]);
    // console.log(hrMin[1]);    
    let hr = hrMin[0];
    let min = hrMin[1];
    
    // Convert 24 hour time to 12 hour time:
    let amPm = "AM";
    
    if(hr >= 12){
        amPm = "PM";
        if(hr > 12){
            hr = hr - 12;
        }
    }

    hrMin = hr + ":" + min + " " + amPm;
    // console.log(hrMin);

    return newDate + " " + hrMin;


}


function addDataDiv(data){
        // Get the data from what was retrieved from the API:
        for(let i = 0; i < data.length; i++){
            let howMany = data[i].howMany; // This could be undefined. Make that an "X".
            
            if(howMany === undefined){
                howMany = "X";
            }

            let locName = data[i].locName;  // Location
            let dateAndTime = data[i].obsDt; // Date and time.

            let dAndT = reformatDateTime(dateAndTime);
            // console.log(dAndT);

            let linkToChecklist = "https://ebird.org/checklist/" + data[i].subId;
            let fullLink = "<a href='" + linkToChecklist + "' target=_blank>" + "Go to checklist &#8599;" + "</a><br><br>";

            // Add the data to the Data List:
            // let testBirdData = dateAndTime + "<br> " + locName;
            let testBirdData = dAndT + "<br> " + locName + "<br>" + howMany + " reported";
    
            // Create a new element for the data/time and location:
            let newDiv = document.createElement("div");
            newDiv.innerHTML = testBirdData;
            newDiv.className = "birdChecklistData";

            // Get the parent element where you want to append the new div
            let birdData = document.getElementById("dataList");

            // Append the new div to the parent element
            birdData.appendChild(newDiv);

            // Create a new element for the link to the checklist:
            newDiv = document.createElement("div");
            newDiv.innerHTML = fullLink;
            newDiv.className = "birdChecklistLink";

            // Get the parent element where you want to append the new div
            birdData = document.getElementById("dataList");

            // Append the new div to the parent element
            birdData.appendChild(newDiv);   

        }

}


function getCountySelection(){
    // https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/

    let selectCounty = document.querySelector('#county');
    return selectCounty.value;

}


async function fetchData(speciesCode){
    try{
        const ebirdApiToken = "mbigvnchmkhr";   // My eBird access code for the API.
        const regionCode = getCountySelection();

        console.log("species code: " + speciesCode);
        console.log("region code: " + regionCode);

        // Days back: 2 or 6?
        let daysBack = 2;
        let days = document.getElementsByName("daysBack");
 
        for (i = 0; i < days.length; i++) {
            if (days[i].checked){
                daysBack = days[i].value;
            }
        }

        // console.log("I got here. Days back = " + daysBack)

        // Limited to 2 days ago (includes today).
        // const apiUrl = "https://api.ebird.org/v2/data/obs/" + regionCode + "/recent/" + speciesCode + "?back=2";
        // const apiUrl = "https://api.ebird.org/v2/data/obs/" + regionCode + "/recent/" + speciesCode + "?back=" + daysBack;
        // The last part of this apiUrl is from a fix from a person in the FB eBird Community Group. 
        // There was a glossy ibis being reported at the Chippewa Inlet Trail South in Medina County.
        // It wasn't being picked up by this code. There was a sora there that was being retreived.
        // This may be that rare birds are hidden in certain areas. I could not get the ibis in the Explore Species Map or the Hot Spot page. 
        // But, I knew Deb Sweeney had the bird. So, I looked for that checklist. Apparently, rare birds do appear in the individual checklists.
        const apiUrl = "https://api.ebird.org/v2/data/obs/" + regionCode + "/recent/" + speciesCode + "?back=" + daysBack + "&includeProvisional=1";

        console.log(apiUrl);

        const requestOptions = {
            method: "GET",
            headers: {
                "X-eBirdApiToken": ebirdApiToken
            },
        };

        const response = await fetch(apiUrl, requestOptions);

        if(!response.ok){
            throw new Error("Could not fetch resource.");
        }
        else{
            const data = await response.json();
            // console.log(data);
            if(data.length === 0){
                // console.log("No data was retrieved for this species in that county for the past two days.");

                let noDataFound = document.getElementById("message");
                noDataFound.innerHTML = "No data was retrieved for this species in that county for the past two days.";
                noDataFound.style.display = "block";

            }
            else{
                displayLinkToSpeciesMap(speciesCode);  // Display the button to the link to the Species Map only if there are recent sightings.

                addDataDiv(data);
            }
        }
    }
    catch(error){
        console.error(error);
    }
}

// This functions is called when a user clicks a bird name.
// It clears everything under the input group and adds the clicked bird name as a title.
function clearAllCreateTitle(birdCode, idx){
    // Clear the message div and the bird name list div "buttons".
    clearMessage();
    clearBirdNameList();

    // Display the Back to Bird Name List button:
    let backToNames = document.getElementById("backToBirdNames");
    backToNames.style.display = "block";

    // Display the name in the title div element.
    let birdNameTitle = document.getElementById("dataTitle");
    birdNameTitle.innerHTML = ohioBirdNames[idx];
    birdNameTitle.style.display = "block";


    // Disable the radio buttons.
    var radios = document.getElementsByName("daysBack");

    for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = true;
    } 

    // Disable the county drop down list.
    document.getElementById("county").disabled = true;


    // Call the fetch data function:
    fetchData(birdCode);

}


// This function adds a bird name under the input group by creating a div element with the name. 
// It also adds an on-click attribute to the bird name to get recent sightings data.
function addBirdName(birdNameFound, idx){
    let birdList = document.getElementById("birdNameList");
    let newDiv = document.createElement('div');
    let birdCode = ohioBirdCodes[idx];

    newDiv.innerHTML = birdNameFound;
    newDiv.className ="birdNameListItem";
    // newDiv.setAttribute("onclick", "clearAllCreateTitle('" + birdNameFound + "'," + "'" + birdCode + "')");
    // The onclick event is a problem with bird names with single quotes like "Bonaparte's gull". 
    // Just send the code and the idx, and retrieve the name later.
    newDiv.setAttribute("onclick", "clearAllCreateTitle('" + birdCode + "'," + "'" + idx + "')");

    // Add the new div with the bird name:
    birdList.appendChild(newDiv);

}

// This function checks the entry against the Ohio bird name array. 
// The entry need only be a partial match of characters. 
function validateEntry(){
    let entry = document.getElementById("birdNameInput").value.toLowerCase();
    // The code needs to trim spaces at the beginning and end of the input entry or the input entry will not be seen as valid. 
    // This method returns a new string with whitespace removed from both ends, without modifying the original string. 
    // But, you can put it back into the original variable.
    entry = entry.trim();
    console.log("]" + entry + "[");


    if(entry === ""){
        console.log("Please make an entry.");   
        // Don't do anything if nothing is entered.
        // The text in the text entry box shows "Please enter a bird name.""
        
    }
    else{
        let found = false;

        for(let i = 0; i < ohioBirdNames.length; i++){
            if(ohioBirdNames[i].toLowerCase().includes(entry)){
                found = true;
                // console.log("validateEntry function: " + ohioBirdNames[i]);
                // Send the bird name and the index. The index will be used to retrieve the six letter code from the array of codes. 
                addBirdName(ohioBirdNames[i], i); 
            }
        }

        if(!found){
            let messageDiv = document.getElementById("message");
            messageDiv.innerHTML = "- No bird name was found. -";
            messageDiv.style.display = "block";
        }
        else{ // A bird name was found using the entry. 
            // Disable county, 
            // disable name input and 
            // hide Search button.
            // document.getElementById("county").disabled = true; // This should be enabled when a valid name is found and a list is generated.
            document.getElementById("birdNameInput").disabled = true;
            document.getElementById("searchForBirds").style.display = "none";

        }

    }

}

// Because clicking the Search button and Start Over button need different actions, 
// it was best to separate the clear functions and use event listeners. 

// This function hides the button to open the eBird Explore Species Map zoomed in to the Cuyahoga County area.
function hideSpeciesMapButton(){
    let linkButton = document.getElementById("linkToSpeciesMap");
    linkButton.style.display = "none";

}


// This function resets the placeholder text in the input text box. 
function clearInputBox(){
    let inputBox = document.getElementById("birdNameInput");
    inputBox.value = "";
    inputBox.placeholder = "Please enter a bird name." ;

}

// This function clears the div element where messages are displayed. 
function clearMessage(){
    let messageDiv = document.getElementById("message")
    messageDiv.innerHTML = "";
    messageDiv.style.display = "none";
}

// This function clears the list of bird names retrieved.
function clearBirdNameList(){
    document.getElementById("birdNameList").innerHTML = "";

}

// This function clears the title of the bird selected.
function clearDataListTitle(){
    document.getElementById("dataTitle").innerHTML = "";
    document.getElementById("dataTitle").style.display = "none";
    
}

// This function clears the list of checklist data.
function clearDataList(){
    document.getElementById("dataList").innerHTML = "";
}


function enableEntryFields(){
    // Enable county, 
    // Enable name input and 
    // Show Search button.
    document.getElementById("county").disabled = false;
    document.getElementById("birdNameInput").disabled = false;
    document.getElementById("searchForBirds").style.display = "block"; 

    // Enable the radio buttons.
    var radios = document.getElementsByName("daysBack");

    for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = false;
    } 

    let backToBirdNamesButton = document.getElementById("backToBirdNames")
    backToBirdNamesButton.style.display = "none";

}

function backToBirdNamesButtonClicked(){
    let backToBirdNamesButton = document.getElementById("backToBirdNames")
    backToBirdNamesButton.style.display = "none";

    // Enable the radio buttons.
    var radios = document.getElementsByName("daysBack");

    for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = false;
    } 

    // Enable the county drop down list:
    document.getElementById("county").disabled = false;

}


function showHideStartOverButton(){

    let starOverButton = document.getElementById("startOver");

    // console.log(this.innerHTML);
    // The element clicked is passed to the function as "this".
    // Apparently, you don't need the ".value", just the "innerHTML" part.
    // https://stackoverflow.com/questions/12024483/how-to-pass-parameter-to-function-using-in-addeventlistener
    let buttonClicked = this.innerHTML;

    if(buttonClicked === "Search"){
        starOverButton.style.display = "block";
    }
    else{
        if(buttonClicked === "Start Over"){
            starOverButton.style.display = "none";
        }
    }

}


const searchButton = document.getElementById("searchForBirds");
    // Clear the message div. Clear the bird name list. Validate the entry. 
    searchButton.addEventListener("click", clearMessage);
    searchButton.addEventListener("click", clearBirdNameList);
    searchButton.addEventListener("click", validateEntry);
    searchButton.addEventListener("click", clearDataListTitle);
    searchButton.addEventListener("click", clearDataList);
    searchButton.addEventListener("click", showHideStartOverButton);
    



const startOverButton = document.getElementById("startOver");
    // Clear the input box and reset the placeholder. Clear the message div. Clear the bird name list.
    startOverButton.addEventListener("click", clearInputBox);
    startOverButton.addEventListener("click", clearMessage);
    startOverButton.addEventListener("click", clearBirdNameList);
    startOverButton.addEventListener("click", clearDataListTitle);
    startOverButton.addEventListener("click", clearDataList);
    startOverButton.addEventListener("click", enableEntryFields);
    startOverButton.addEventListener("click", showHideStartOverButton);
    startOverButton.addEventListener("click", hideSpeciesMapButton);
         
           

const backToBirdNamesButton = document.getElementById("backToBirdNames");
    // Clear the message div. Clear the bird name list. Validate the entry. 
    backToBirdNamesButton.addEventListener("click", clearMessage);
    backToBirdNamesButton.addEventListener("click", clearBirdNameList);
    backToBirdNamesButton.addEventListener("click", validateEntry);
    backToBirdNamesButton.addEventListener("click", clearDataListTitle);
    backToBirdNamesButton.addEventListener("click", clearDataList);
    backToBirdNamesButton.addEventListener("click", backToBirdNamesButtonClicked);
    backToBirdNamesButton.addEventListener("click", hideSpeciesMapButton);



/* NOTE:

External JavaScript files must be deferred to after the page has loaded with event listeners.
This is because the buttons (any elements) are not loaded/created when the files are loaded. 
If not, the elements do not exist, the JS code cannot find them to attached a event listener and an error results. 

<script src="script_03.js" defer></script>  
<script src="ohio_bird_codes_script.js" defer></script>    
<script src="ohio_bird_names_script.js" defer></script> 

*/