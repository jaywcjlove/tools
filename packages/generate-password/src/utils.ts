export function validatePassword(password: string) {
  // Create an array and push all possible values that you want in password
  var matchedCase = new Array();
  matchedCase.push('[$@$!%*#?&]'); // Special Charector
  matchedCase.push('[A-Z]'); // Uppercase Alpabates
  matchedCase.push('[0-9]'); // Numbers
  matchedCase.push('[a-z]'); // Lowercase Alphabates

  // Check the conditions
  let ctr = 0;
  for (let i = 0; i < matchedCase.length; i++) {
    if (new RegExp(matchedCase[i]).test(password)) {
      ctr++;
    }
  }
  // Display it
  let color = '';
  let strength = '';
  switch (ctr) {
    case 0:
    case 1:
      // Suggestion: use minimum 32 symbols pass with lowercase and uppercase letters, numbers and special characters
      strength = "It's easy to crack!";
      color = 'gray';
      break;
    case 2:
      // Suggestion: use minimum 32 symbols pass with lowercase and uppercase letters, numbers and special characters
      strength = "Very Weak! It's easy to crack!";
      color = 'red';
      break;
    case 3:
      // Suggestion: use minimum 32 symbols pass with lowercase and uppercase letters, numbers and special characters
      strength = 'Medium level. Enter more symbols!';
      color = 'orange';
      break;
    case 4:
      strength = "Strong :) Now it's safe!";
      color = 'green';
      break;
  }
  return {
    strength,
    color,
  };
}

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMERIC = '0123456789';
const SPECIAL_CHARACTER = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

export function generatePassword(
  len: number = 8,
  lowerCase: boolean = true,
  upperCase: boolean = true,
  numeric: boolean = true,
  special: boolean = true,
) {
  let password = '';
  if (!lowerCase && !upperCase && !numeric && !special) {
    return password;
  }
  while (password.length < len) {
    const entity1 = Math.ceil(LOWERCASE.length * Math.random() * Math.random()) - 1;
    const entity2 = Math.ceil(NUMERIC.length * Math.random() * Math.random()) - 1;
    const entity3 = Math.ceil(SPECIAL_CHARACTER.length * Math.random() * Math.random()) - 1;
    const entity4 = Math.ceil(UPPERCASE.length * Math.random() * Math.random()) - 1;
    if (lowerCase && password.length < len) {
      password += LOWERCASE.charAt(entity1);
    }
    if (upperCase && password.length < len) {
      password += UPPERCASE.charAt(entity4);
    }
    if (numeric && password.length < len) {
      password += NUMERIC.charAt(entity2);
    }
    if (special && password.length < len) {
      password += SPECIAL_CHARACTER.charAt(entity3);
    }
  }
  return password.trim();
}
