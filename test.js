// const getAge = (num) => {
//    const baseYear = 1870
//    const currentYear = 2023
//    return currentYear - (baseYear + num)
// }
// console.log(getAge(99));

// const common = (a,b,c) => {
//    [a,b,c] = [a,b,c].map(el => el.reduce((sum, num) => (sum[num] = (sum[num] || 0) + 1,  sum), {}));
//    return[a,b,c]
// }
// console.log(common([1,1,1],[2,2,2],[3,3,3]));

// function setCapitalize(str){
//    return str.charAt(0).toUpperCase() + str.slice(1)
//  }
//  console.log(setCapitalize('vava'));
const metaParams = {
  metaObjects:{
    "guide":{enName:"guide", ruName:"справочник"},
    "report":{enName:"report", ruName:"отчет"},
    "document":{enName:"document", ruName:"документ"},
  },
}
function getParam (param){
  return param
}
console.log(getParam());//нужно вернуть "report"



function cyrillicToLatin(text) {
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

console.log(cyrillicToLatin("цыган встал на цыпочки и цыкнул на цыпленка")); // Выводит: Privet, mir!
