function allTruthy(...arr) {
    for(let i = 0; i < arr.length; i++) {
      if(!arr[i]) {
        console.log(false);
      }
    }
    console.log(true) ;
}

allTruthy(true, true, true)

allTruthy(true, false, true) 

allTruthy(5, 4, 3, 2, 1, 0)
