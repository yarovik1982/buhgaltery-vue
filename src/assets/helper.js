export function getData(string) {
   let data = localStorage.getItem(string);
   if (data === null) {
     return [];
   } else {
     return JSON.parse(data);
   }
 }

export function setCamelCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

export function setCapitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const appSideMenuList = [
  {id:1, title:'Основные'},
  {id:2, title:'category-2'},
  {id:3, title:'category-3'},
  {id:4, title:'category-4'},
  {id:5, title:'category-5'},
  {id:6, title:'category-6'},
  {id:7, title:'category-7'},
]

export const metaParams = {
  metaObjects:{
    "guide":{enName:"guide", ruName:"справочник"},
    "report":{enName:"report", ruName:"отчет"},
    "document":{enName:"document", ruName:"документ"},
  }
}

export function cyrillicToLatin(text) {
  const cyrillic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  const latin = "abvgdeejzijklmnoprstufhccss'y'euaABVGDEEJZIJKLMNOPRSTUFHCCSS'Y'EUAY";
  const conversion = {};

  for (let i = 0; i < cyrillic.length; i++) {
      conversion[cyrillic[i]] = latin[i];
  }

  return text.split('').map(function(char) {
      return conversion[char] || char;
  }).join('');
}