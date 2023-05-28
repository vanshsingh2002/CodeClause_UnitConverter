let celcius=document.querySelector('#celcius')
let farenheit=document.querySelector('#farenheit')
let kelvin=document.querySelector('#kelvin')
let ivalue=document.getElementById('ivalue')
let tSi=document.getElementById('values')

function getValue(){
  if(tSi.value=="celcius"){
    celcius.value=Math.round(ivalue.value).toFixed(2);
    farenheit.value=((ivalue.value*9/5)+32).toFixed(2);
    kelvin.value=(Number(ivalue.value)+ 273.15)
  }
  else if(tSi.value=="farenheit"){
    farenheit.value=Math.round(ivalue.value).toFixed(2);
    celcius.value=((ivalue.value -32) * 5/9).toFixed(2);
    kelvin.value=(ivalue.value - 32 * 5/9 + 273.15 ).toFixed(2);
  }
  else if(tSi.value=="kelvin"){
    kelvin.value=Math.round(ivalue.value).toFixed(2);
    farenheit.value=((ivalue.value - 273.15) * 9/5 + 32).toFixed(2);
    celcius.value=(ivalue.value - 273.15).toFixed(2);
  }
}


// for length calculations
let btn=document.getElementById("cBtn");
    let Si=document.getElementById("values");
    let iValue=document.querySelector('#ivalue');
    let cm=document.querySelector('#cm');
    let mm=document.querySelector('#mm');
    let feet=document.querySelector('#feet');
    let inch=document.querySelector('#inch');
    let yard=document.querySelector('#yard');
    let meter=document.querySelector('#meter');
    let km=document.querySelector('#km');
    let nMiles=document.querySelector('#nMiles');
    
      function getValue(){
      if(Si.value=="cm"){
       cm.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*10).toFixed(3);
       feet.value=(iValue.value/30.48).toFixed(3);
       inch.value=(iValue.value/2.54).toFixed(3);
       yard.value=(iValue.value/91.4).toFixed(3);
       meter.value=(iValue.value/100).toFixed(2);
       km.value=(iValue.value/100000).toFixed(6);
       nMiles.value=(iValue.value/185200).toFixed(7);
      }
      else if(Si.value=="NMiles"){
       nMiles.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*1852000).toFixed(2)
       feet.value=(iValue.value*6075).toFixed(2)
       inch.value=(iValue.value*72910).toFixed(2)
       yard.value=(iValue.value*2025).toFixed(2)
       meter.value=(iValue.value*1852).toFixed(2)
       km.value=(iValue.value*1.852).toFixed(4)
       cm.value=(iValue.value*185200).toFixed(3)
      }
      else if(Si.value=="Kilometer"){
       km.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*1000000).toFixed(3)
       feet.value=(iValue.value*3281).toFixed(3)
       inch.value=(iValue.value*39370).toFixed(3)
       yard.value=(iValue.value*1094).toFixed(3)
       meter.value=(iValue.value*1000).toFixed(3)
       nMiles.value=(iValue.value/1.852).toFixed(3);
       cm.value=(iValue.value*100000).toFixed(3)
      }
      else if(Si.value=="meter"){
       meter.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*1000).toFixed(3)
       feet.value=(iValue.value*3.281).toFixed(3)
       inch.value=(iValue.value*39.37).toFixed(3)
       yard.value=(iValue.value*1.094).toFixed(3)
       nMiles.value=(iValue.value/1852).toFixed(6)
       km.value=(iValue.value/1000).toFixed(6)
       cm.value=(iValue.value*100).toFixed(3)
      }
      else if(Si.value=="feet"){
       feet.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*304.8).toFixed(4)
       nMiles.value=(iValue.value/6076).toFixed(4)
       inch.value=(iValue.value*12).toFixed(4)
       yard.value=(iValue.value/3).toFixed(4)
       meter.value=(iValue.value*3.821).toFixed(4)
       km.value=(iValue.value/3281).toFixed(6)
       cm.value=(iValue.value*30.48).toFixed(4)
      }
      else if(Si.value=="Yard"){
       yard.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*914.4).toFixed(3)
       feet.value=(iValue.value*3).toFixed(2)
       inch.value=(iValue.value*36).toFixed(3)
       nMiles.value=(iValue.value/2025).toFixed(6)
       meter.value=(iValue.value/1.094).toFixed(3)
       km.value=(iValue.value/1094).toFixed(6)
       cm.value=(iValue.value*91.44).toFixed(4)
      }
      else if(Si.value=="inch"){
       inch.value= Math.round(iValue.value).toFixed(2);
       mm.value=(iValue.value*25.4).toFixed(3)
       feet.value=(iValue.value/12).toFixed(2)
       yard.value=(iValue.value/36).toFixed(3)
       nMiles.value=(iValue.value/72910).toFixed(6)
       meter.value=(iValue.value/39.37).toFixed(3)
       km.value=(iValue.value/39370).toFixed(6)
       cm.value=(iValue.value*2.54).toFixed(4)
      }
      else if(Si.value=="mm"){
       mm.value= Math.round(iValue.value).toFixed(2);
       nMiles.value=(iValue.value/1.852e+6).toFixed(6)
       feet.value=(iValue.value/304.8).toFixed(4)
       inch.value=(iValue.value/25.4).toFixed(4)
       yard.value=(iValue.value/914.4).toFixed(6)
       meter.value=(iValue.value/1000).toFixed(4)
       km.value=(iValue.value/1e+6).toFixed(6)
       cm.value=(iValue.value/10).toFixed(4)
      }
    }