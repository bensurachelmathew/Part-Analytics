
function clockAngles(hour, minute) {
    hour=hour%12;
    let  minAngle = minute*6;//360/12*5 = 6
    let hourAngle=(hour*30)+(minute*0.5)//360/12=30 & 30/60=0.5
      if(minAngle > hourAngle) {
          return minAngle - hourAngle;
      }
      else {
          return hourAngle - minAngle;
      }
  }
  
  console.log(clockAngles(12,30));
  console.log(clockAngles(3,15));
