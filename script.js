//your JS code here. If required.
function leapyear(year) {
	if((year%100!==0 || year%4===0 )|| year%400===0)
		return true;
	else
		false;
}
function daysOfAYea(year) {
	let isleap=leapyear(year);
	if(isleap)
	{
		return 366;
	}
	else{
		return 365;
	}
}