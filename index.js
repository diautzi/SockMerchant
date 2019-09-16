function sockMerchant(n, ar) {
    let count = 0;
    ar = ar.sort();
    for ( let i=0; i< n; i++) {
      if (ar[i] === ar[i+1]){
        count+=1;
        i++
      }
    }
  return count;
}
