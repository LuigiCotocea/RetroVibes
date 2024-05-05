function onPageLoaded() {
    // Write your javascript code here
    console.log("The page was loaded succesfully...");

    
}
function updateTime() {
    // Get the current local time of the user's PC
    const localTime = new Date();
    
    // Check if the current time is during daylight saving time
    const isDST = localTime.getTimezoneOffset() !== new Date(localTime.getFullYear(), 0, 1).getTimezoneOffset();
    
    // If it's daylight saving time, adjust the local time
    if (isDST) {
        localTime.setHours(localTime.getHours() + 0);
    }
    
    // Define an array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Format the time without "at"
    const formattedTime = `${localTime.getFullYear()} ${monthNames[localTime.getMonth()]} ${localTime.getDate()}, ${localTime.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true})}`;
    
    // Update the placeholder with the current time
    document.querySelector('.timeplaceholder').textContent = formattedTime;
}

// Call updateTime function initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);










