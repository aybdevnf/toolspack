let lowerLetters = "";
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i).toLowerCase();
  lowerLetters += letter;
}
let upperLetters = "";
for (let i = 0; i < lowerLetters.length; i++) {
  upperLetters += lowerLetters[i].toUpperCase();
}
const symbols = '&@[]{}!?_+-()';
const numbers = '0123456789';
let charset = "";
export class PasswordGenerator{
  propertiesNum = 0;
  password = '';
  constructor({upperCase, lowerCase, symbols, numbers}, length){
    this.choices = {upperCase, lowerCase, symbols, numbers};
    this.length = length;
  }
  generate(){
    charset = "";
    if(this.choices.upperCase){
      charset += upperLetters;
    }
    if(this.choices.lowerCase){
      charset += lowerLetters;
    }
    if(this.choices.numbers){
      charset += numbers;
    }
    if(this.choices.symbols){
      charset += symbols;
    }
    for (let i = 0,n = charset.length ;i < this.length; i++) {
      this.password += charset.charAt(Math.random() * n);
    }
    return this.password;
  }
}