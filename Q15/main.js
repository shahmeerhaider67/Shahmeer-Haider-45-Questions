// Define a list of people to invite to dinner
var invitees = ["MAN", "JAN", "KHAN"];
// Print the name of the guest who can't make it
var guestWhoCantMakeIt = invitees.pop() || "";
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newInvitee = "ALI";
invitees.push(newInvitee);
// Print new invitation messages to each person who is still on the list
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var invitee = invitees_1[_i];
    console.log("Dear ".concat(invitee, ", I would like to invite you to a dinner event. Please let me know if you can make it."));
}
