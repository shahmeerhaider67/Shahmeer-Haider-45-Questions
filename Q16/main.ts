//#Q16
// Define a list of people to invite to dinner
const invitees: string[] = ["Elon Musk", "Jackma", "Mark Zuckerburg", "Mukesh Ambani"];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt: string = invitees.pop() || "";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newInvitee: string = "Nikola Tesla";
invitees.push(newInvitee);

// Add three more guests to the dinner invitation list
invitees.push("Galileo Galilei", "Isaac Newton", "Albert Einstein");

// Print a message about the bigger dinner table
console.log("Good news! We've found a bigger dinner table, so more guests are welcome.");

// Add a new guest to the beginning of the array
invitees.unshift("Thomas Edison");

// Add a new guest to the middle of the array
const middleIndex: number = Math.floor(invitees.length / 2);
invitees.splice(middleIndex, 0, "Winston Churchill");

// Use push() to add one new guest to the end of the list
invitees.push("Amelia Clarke");

// Print new invitation messages to each person in the list
for (const invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to a dinner event. Please let me know if you can make it.`);
}

