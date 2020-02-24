export function shuffle(arr) {
  const arra1 = [].concat(arr);

  let ctr = arra1.length; let temp; let
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    // eslint-disable-next-line no-plusplus
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    // eslint-disable-next-line no-param-reassign
    arra1[ctr] = arra1[index];
    // eslint-disable-next-line no-param-reassign
    arra1[index] = temp;
  }
  return arra1;
}
