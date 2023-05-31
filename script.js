function rot13(encodedString) {
  // Create an array to store the decoded characters
  const decodedArray = [];

  // Loop through each character in the encoded string
  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];

    // Check if the character is an uppercase letter
    if (char.match(/[A-Z]/)) {
      // Get the ASCII code of the character
      let ascii = encodedString.charCodeAt(i);

      // Apply the ROT13 shift (add 13 to the ASCII code)
      ascii += 13;

      // Handle wraparound if the shift goes beyond 'Z'
      if (ascii > 90) {
        ascii -= 26;
      }

      // Convert the ASCII code back to a character
      const decodedChar = String.fromCharCode(ascii);

      // Add the decoded character to the array
      decodedArray.push(decodedChar);
    } else {
      // Add non-alphabetic characters to the array as is
      decodedArray.push(char);
    }
  }

  // Join the decoded characters into a string and return it
  return decodedArray.join('');
}
