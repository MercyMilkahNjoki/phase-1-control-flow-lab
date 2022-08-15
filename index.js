
function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return 'This one is on me!'
  }
  else if (someValue > 2000 && someValue<=2500){
      return 'I will gladly take your thirty bucks.'
  }
  else
    return 'No can do.'
  }
// scuberGreetingForFeet(199);
// scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  return (city === "NYC"? 'Ok, sounds good.':'No go.')
}
console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
     return 'Bye.';
  }
}