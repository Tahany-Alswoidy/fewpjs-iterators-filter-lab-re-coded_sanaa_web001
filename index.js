// Code your solution here
function findMatching(drivers,matcher){
  return drivers.filter(driver=>driver.toLowerCase(driver)===matcher.toLowerCase(matcher));
}
function fuzzyMatch(drivers,matcher){
  return drivers.filter(driver=>driver.subsrting(0,matcher.length-1).toLowerCase(0,matcher.length-1)===matcher.toLowerCase(matcher));
}