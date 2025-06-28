//your JS code here. If required.
function leapyear(year) {
	return ((year%100!==0 && year%4===0 )|| year%400===0)
}
function daysOfAYea(year) {
	let isleap=leapyear(year)
	return isleap?365:366;
}