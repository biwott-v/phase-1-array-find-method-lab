// code your solution here
function superbowlWin(record){
    let value = record.find((element) => element.result==="W");
    if (value){
        return value.year;
    }    
  return value;
}

