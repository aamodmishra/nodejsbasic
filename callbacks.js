
function processUserInput(name, callback) {
    console.log(`Processing input for: ${name}`);
    
    // Simulate some work...
    setTimeout(() => {
        // Execute the callback after 2 seconds
        callback(name); 
    }, 2000);
    
    console.log("Input processing initiated. Waiting for callback...");
}

// The callback function
function sayGoodbye(username) {
    console.log(`\n--- Callback Executed ---`);
    console.log(`Goodbye, ${username}! Your request is complete.`);
}

// Pass 'sayGoodbye' function as a callback
processUserInput("Alex", sayGoodbye); 

