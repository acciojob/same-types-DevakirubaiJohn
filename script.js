function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }
  else if (typeof value1 === typeof value2) {
    return true;
  }
  else {
    return false;
  }
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert strings to their respective types
value1 = isNaN(value1) ? NaN : Number(value1);
value2 = isNaN(value2) ? NaN : Number(value2);

alert(isSameType(value1, value2));
