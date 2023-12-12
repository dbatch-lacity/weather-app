export function validateZipCode(zipCode: string): boolean {
  //5 digits
  if (zipCode.length != 5) {
    return false
  }
  //number
  //no other characters besides numbers
  if (isNaN(Number(zipCode))) {
    return false;
  }
  const numInput = Number(zipCode);
  //no spaces
  //no leading zeros
  if (numInput % 1 != 0 || numInput <= 0 || numInput.toString().length != 5) {
    return false;
  }
  return true
}
