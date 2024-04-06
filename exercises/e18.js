/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  //console.log(data);
  const asteroidByYear = {};

  data.asteroids.forEach(asteroid => {
    const discoveryYear = asteroid.discoveryYear;
    if (discoveryYear) {
      asteroidByYear[discoveryYear] = (asteroidByYear[discoveryYear] || 0) +1;
    }
  });

  let greatestYear;
  let maxDiscovery = Number.MIN_SAFE_INTEGER;

  for (const year in asteroidByYear) {
    if (asteroidByYear[year] > maxDiscovery) {
      maxDiscovery = asteroidByYear[year];
      greatestYear = parseInt(year);
    }
  }
  return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
