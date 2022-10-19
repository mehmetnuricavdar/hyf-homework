// Age-ify (A future age calculator)

const yearOfBirth = 1988;
let yearFuture = 2050;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);



// Goodboy-Oldboy (A dog age calculator)


const dogYearOfBirth = 2020;
let dogYearFuture = 2030;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanYear = dogYear / 7;
let shouldShowResultInDogYears = true;

// it depends to "true" or "false"

if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`
  );
}
