
This project accesses the eBird API for recent sightings in four counties in Ohio.
The user can choose between finding checklists for today and the past two days or the past 6 days.
It allows the user to search by entering a partial name or a full name of a bird. 

I wanted to create something that I could use on my phone to quickly check to see if a species was recently seen. I do like the eBird website's Explore Species Map. But, it takes a long time to enter criteria. There are a number of steps. You must narrow down to the month. You can't narrow down to a few days. It searches for every checklist in the world. Then, you must tap on a tiny marker to get a list of sightings. Then, you must select a sightng to see the checklist. I want to look for sightings in the four counties nearby quickly. 

If a species has been reported recently, my project will show the date, time, location and number reported. It will also provide a link to the checklist. That's exactly what I want/need.

It should be noted that this eBird API endpoint only retrieves the most recent observation for a location.

8/9/2024 - I added a button that is a link to the eBird Explore - Species Map for the species selected. The webpage opens with the map zoomed to Cuyahoga County with markers/sightings for the previous month and the current month. The Species Map criteria can only be set to months not specific days so, I thought using the previous month as a starting place was a good idea. If a search is made during the first week of a month, and the criteria for the map was only the current month, the search would miss sightings for the previous week because it was the previous month. 

