function DrinkOrder (size,drink) {

    let drink = DrinkName. toLowerCase ();

    let messageTemplate = 'You have ordered';

switch (drink) { 
    case 'tea' :
console.log ( `{$messageTemplate} ${size} ${drink}`) ; 
break;
case 'coffee':
    console.log (`{$messageTemplate}  ${size} ${drink}`) ;
    break
    case 'hotChocolate' :
    console.log (` {$messageTemplate} ${size} ${drink}`) ;
    break
default:
    console.log ('error');
    break;
}


}


DrinkOrder ('Medium','HotChocolate');