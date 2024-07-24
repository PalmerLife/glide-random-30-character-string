window.function = function(inputString) {
  const string = inputString.value;

  // Function to convert string to camelCase
  const toCamelCase = (str) => {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, ' ') // Replace special characters with spaces
      .split(' ')
      .map((word, index) => 
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  };

  // Generate a random number sequence to append
  const generateRandomSequence = (length) => {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const camelCaseString = toCamelCase(string);
  const requiredLength = 30;
  const randomSequenceLength = requiredLength - camelCaseString.length;

  if (randomSequenceLength <= 0) {
    return camelCaseString.slice(0, requiredLength);
  }

  const randomSequence = generateRandomSequence(randomSequenceLength);
  const finalString = camelCaseString + randomSequence;

  return finalString;
}