export const chromosomeObj: { [key: string]: string[] } = {
  'Lily White': ['LL', 'Ll', 'll'],
  Cappuccino: ['CC', 'Cc', 'cc'],
  Axanthic: ['AA', 'Aa', 'aa'],
};

function chromosomeCalculator(male: string | null, female: string | null) {
  if (male === null || female === null) return [];

  const chromosomeMale = chromosomeObj[male];
  const chromosomeFemale = chromosomeObj[female];

  const result = chromosomeMale
    .map((x) => {
      return chromosomeFemale.map((y) => {
        return x + y;
      });
    })
    .reduce((acc, cur) => acc.concat(cur));

  return result;
}

export default chromosomeCalculator;
