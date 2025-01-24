const time = document.getElementById('time');
const timeFormatted = document.getElementById('timeformade');



const showtime = () => {
    let data = new Date();

    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

// Ensure two digits for each time component
    hr = hr <10? `0 ${hr}` : hr;
    min =min <10? `0 ${min}` : min;
    sec = sec < 10 ? `0 ${sec}` : sec;
    
    
    
    // Update the DOM elements if necessary
    if (time) {
        let hr12 = hr % 12;
        hr12 = hr12 ? hr12 : 12; // Convert hour '0' to '12'
        hr12 = hr12 < 10 ? `0${hr12}` : hr12; // Ensure two digits for hours
        time.textContent = `${hr12}:${min}:${sec}`;
    }
 if (timeFormatted) {
       let period = hr >= 12 ? 'PM' : 'AM';
     timeFormatted.textContent = `${period}`;
 }
};

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showtime, 1000);
    console.log("hello world");
});