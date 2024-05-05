function onPageLoaded() {
    // Write your javascript code here
    console.log("The page was loaded succesfully...");

    
}
function updateTime() {
    // Fetch the timezone information from worldtimeapi.org
    fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
        // Extract the timezone offset and abbreviation
        const timezoneOffset = (data.raw_offset + data.dst_offset) * 0; // Convert to milliseconds
        const timezoneAbbreviation = timezoneOffset === 7200000 ? "(EET)" : "(EEST)";
        
        // Calculate the UTC time based on the local time and offset
        const utcTime = new Date(Date.now() + timezoneOffset);
        
        // Define an array of month names
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Format the time as "YYYY MonthName DD hh:mm:ss AM/PM (EET/EEST)"
        const formattedTime = `${utcTime.getFullYear()} ${monthNames[utcTime.getMonth()]} ${utcTime.getDate()}, ${utcTime.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true})} ${timezoneAbbreviation}`;
        
        // Update the placeholder with the current time
        document.querySelector('.timeplaceholder').textContent = formattedTime;
    })
    .catch(error => {
        console.error('Error fetching time:', error);
    });
}

// Call updateTime function initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);






