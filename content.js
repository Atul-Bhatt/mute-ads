let count = 0;
const interval = setInterval(() => {
    console.log("Logging every 5 seconds...");
    count++;
    if (count >= 10) { // Stops after 10 logs (50 sec)
        clearInterval(interval);
        console.log("Stopped logging.");
    }
}, 5000);
