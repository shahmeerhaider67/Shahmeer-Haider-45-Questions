// Initialize your list of guests
var guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print a message about inviting only two people
console.log("I can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last person from the list
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
// Print a message to the two remaining guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("You're still invited, ".concat(guest, "!"));
}
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list
console.log("My guest list is now empty:", guests);
