//#Q17
// Initialize your list of guests
let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print a message about inviting only two people
console.log("I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove the last person from the list
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

// Print a message to the two remaining guests
for (const guest of guests) {
    console.log(`You're still invited, ${guest}!`);
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log("My guest list is now empty:", guests);
