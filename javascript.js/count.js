//COUNTER PROGRAM

  const decreaseBtn = document.getElementById("decreaseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const countLabel = document.getElementById("countiLabel");
  let count =0;
  increaseBtn.onclick = function(){
    count++;
    countiLabel.textContent =count;
  }
decreaseBtn.onclick = function () {
    count--;
    countiLabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countiLabel.textContent = count;
}


  
