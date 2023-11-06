//#Q15
// Define a list of people to invite to dinner
const invitees: string[] = ["MAN", "JAN", "KHAN"];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt: string = invitees.pop() || "";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newInvitee: string = "ALI";
invitees.push(newInvitee);

// Print new invitation messages to each person who is still on the list
for (const invitee of invitees) {
    console.log(`Dear ${invitee}, I would like to invite you to a dinner event. Please let me know if you can make it.`);
}
