function mergeSortedArrays(lists) {
  if (lists.length == 0) {
    return lists;
  } else if (lists.length === 1) {
    return lists[0];
  } else {
    let thisArr;
    let connectedArrays = [];
    for (let i = 0; i <= lists.length - 1; i++) {
      thisArr = lists[i];
      connectedArrays = [...connectedArrays, ...thisArr];
    }
    connectedArrays.sort();
    return connectedArrays;
  }
}
module.exports = mergeSortedArrays;
