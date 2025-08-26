
// Usage:
const thisBeing = new BeThis();
const beThisInstance = new BeThis(thisBeing);

const haikuManifest = `Digital winds blow,
Monopolies challenged here,
Code sets spirits free.`;

beThisInstance.adjustStateBasedOnInput('ADD', { key: 'latestHaiku', value: haikuManifest });

console.log(thisBeInstance.getState('latestHaiku'));