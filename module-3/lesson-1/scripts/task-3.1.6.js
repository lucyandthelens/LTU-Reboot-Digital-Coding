var Bill_Total = 30.25;

var One_Percent = Bill_Total / 100;

var Tip_Percent = 25;

var Tip_Amount = One_Percent * Tip_Percent;

var Total = Bill_Total + Tip_Amount;

alert(Total);

var Message = "Your bill cost £" + Bill_Total + ", You tipped " + Tip_Percent + "% Which equals £" + Tip_Amount + ", Bringing your total bill to £" +(Total);

console.log (Message)

