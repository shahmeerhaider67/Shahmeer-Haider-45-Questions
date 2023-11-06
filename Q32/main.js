var currentUsers = ["ABDUL", "HURRAIRA", "AKBAR", "SULTAN", "ASAD"];
var newUsers = ["JAVAID", "OKASHA", "SHAHMEER", "UMER", "HAMZAH"];
var _loop_1 = function (newUser) {
    var lowercaseNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    var isUsernameTaken = currentUsers.some(function (user) { return user.toLowerCase() === lowercaseNewUser; });
    if (isUsernameTaken) {
        console.log("Sorry, '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! '".concat(newUser, "' is available."));
        currentUsers.push(newUser); // Add the new username to the list of current users
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
