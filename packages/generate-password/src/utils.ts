import { validate } from '@wcj/generate-password';

export function validatePassword(password: string) {
  let ctr = validate(password);
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
