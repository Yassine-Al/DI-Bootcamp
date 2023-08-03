function estAnagramme(ch1, ch2) {
   
    ch1 = ch1.replace(/\s/g, '');
    ch2 = ch2.replace(/\s/g, '');
  
    
    if (ch1.length !== ch2.length) {
      return false;
    }
  

    const tableauCh1 = Array.from(ch1.toLowerCase());
    const tableauCh2 = Array.from(ch2.toLowerCase());
  
    
    tableauCh1.sort();
    tableauCh2.sort();
    for (let i = 0; i < tableauCh1.length; i++) {
      if (tableauCh1[i] !== tableauCh2[i]) { 
        return false;
      }
    }
  
    return true;
}
  
  
const ch1 = "Astronomer";
const ch2 = "Moon starer";
const resultat = estAnagramme(ch1, ch2);
console.log(resultat); 