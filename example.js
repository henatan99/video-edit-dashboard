const hashTags = [0, 1, 2, 3, 4, 5 , 6]
const target = 2;
const newHashTags = [...hashTags.slice(0, target), ...hashTags.slice(target + 1)];

console.log(newHashTags);