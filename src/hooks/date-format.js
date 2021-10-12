export const formatDate = (input) => {
  const months = ["Jan", "Feb", "Mar", "Apr", 
                  "May", "Jun", "Jul", "Aug", 
                  "Sep", "Oct", "Nov", "Dec"];
  
  const datePart = input.match(/\d+/g)
  const year = datePart[0]
  const month = months[Number(datePart[1])-1]
  // Remove 0 before the day date if there is any. E.g. 07 Sep 2001 -> 7 Sep 2001
  const day = datePart[2][0] === '0' ? datePart[2].substring(1) : datePart[2]
  
  return day+' '+month+' '+year;
};