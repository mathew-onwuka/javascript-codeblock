// 1. Substring & Slice
const str = "Nigeria is awesome"; // - Given const str = "Nigeria is awesome";
let extractStr = str.substring(0, 7); // - Extract "Nigeria" using substring(). 
let extractAwesome = str.slice(11, 18); // - Extract "awesome" using slice().
let extract_is = str.slice(8, 10); // - Get "is" using slice().
console.log(extractStr);
console.log(extractAwesome);
console.log(extract_is);

// 2. Split
const names = "John,Jane,Doe"; // - Given const names = "John,Jane,Doe";
let split_comma = names.split(","); // - Split into an array using comma ,.
let joinSpace = split_comma.join(" "); // - Join with space instead: "John Jane Doe".
const path = "/user/home/docs"; // - Given const path = "/user/home/docs";
let splitPath = path.split("/");// - Split by / → ["", "user", "home", "docs"]
let getHome = splitPath[2];// - Get "home" using split & index.
console.log(split_comma);
console.log(joinSpace);
console.log(splitPath);
console.log(getHome);

// 3. Mix
const email = "user@example.com"; // - Given const email = "user@example.com";
let getUser = email.split("@");// - Get username (user) using split().
let username = getUser[0];
let check_email = email.endsWith(".com");// - Check if it's a .com domain using endsWith().
let replace_at = email.replace("@", "AT");// - Replace @ with AT using replace()
console.log(getUser);
console.log(username);
console.log(check_email);
console.log(replace_at);