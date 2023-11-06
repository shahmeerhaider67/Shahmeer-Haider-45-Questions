// Define a list of people to invite to dinner
var invitees = ["Elon Musk", "Jackma", "Mark Zuckerburg", "Mukesh Ambani"];
// Print the name of the guest who can't make it
var guestWhoCantMakeIt = invitees.pop() || "";
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newInvitee = "Nikola Tesla";
invitees.push(newInvitee);
// Add three more guests to the dinner invitation list
invitees.push("Galileo Galilei", "Isaac Newton", "Albert Einstein");
// Print a message about the bigger dinner table
console.log("Good news! We've found a bigger dinner table, so more guests are welcome.");
// Add a new guest to the beginning of the array
invitees.unshift("Thomas Edison");
// Add a new guest to the middle of the array
var middleIndex = Math.floor(invitees.length / 2);
invitees.splice(middleIndex, 0, "Winston Churchill");
// Use push() to add one new guest to the end of the list
invitees.push("Amelia Clarke");
// Print new invitation messages to each person in the list
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var invitee = invitees_1[_i];
    console.log("Dear ".concat(invitee, ", I would like to invite you to a dinner event. Please let me know if you can make it."));
}
