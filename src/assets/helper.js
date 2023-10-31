export function getData(string) {
   let data = localStorage.getItem(string);
   if (data === null) {
     return [];
   } else {
     return JSON.parse(data);
   }
 }

export function formatString(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

export const appSideMenuList = [
  {id:1, title:'category-1'},
  {id:2, title:'category-2'},
  {id:3, title:'category-3'},
  {id:4, title:'category-4'},
  {id:5, title:'category-5'},
  {id:6, title:'category-6'},
  {id:7, title:'category-7'},
]