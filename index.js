function handleRequestEmail() {
    const btn = document.getElementById('sendRequestBtn');
    
    // 1. Trigger your email sending logic here
    sendEmailNotification();

    // 2. Disable the button immediately
    btn.disabled = true;
    let cooldown = 5;
    btn.innerText = `Resend in ${cooldown}s`;

    // 3. Start the 5-second countdown timer
    const timer = setInterval(() => {
        cooldown--;
        if (cooldown > 0) {
            btn.innerText = `Resend in ${cooldown}s`;
        } else {
            clearInterval(timer);
            btn.disabled = false;
            btn.innerText = 'Send Request to Admin';
        }
    }, 1000);
}

function sendEmailNotification() {
    // Example using EmailJS or a fetch call to your backend/Firebase function
    console.log("Request email sent to admin!");
    
    /* 
    fetch('service_i9c65cp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            message: "A user is requesting admin approval.",
            timestamp: new Date().toISOString()
        })
    });
    */
}