//#Q32
let currentUsers: string[] = ["ABDUL", "HURRAIRA", "AKBAR", "SULTAN", "ASAD"];
let newUsers: string[] = ["JAVAID", "OKASHA", "SHAHMEER", "UMER", "HAMZAH"];

for (let newUser of newUsers) {
  const lowercaseNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const isUsernameTaken = currentUsers.some((user) => user.toLowerCase() === lowercaseNewUser);

  if (isUsernameTaken) {
    console.log(`Sorry, '${newUser}' is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations! '${newUser}' is available.`);
    currentUsers.push(newUser); // Add the new username to the list of current users
  }
}
