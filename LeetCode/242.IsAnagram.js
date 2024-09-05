function isAnagram(s, t) {
  const sSort = s.split('').sort().join('');
  const tSort = t.split('').sort().join('');

  return sSort === tSort;
}

const s = 'anagram';
const t = 'nagaram';

console.log(isAnagram(s, t));
