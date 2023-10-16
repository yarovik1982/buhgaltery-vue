export function getData(string) {
   let data = localStorage.getItem(string);
   if (data === null) {
     return [];
   } else {
     return JSON.parse(data);
   }
 }
 