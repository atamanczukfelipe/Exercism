/* type Color = 'black'|'brown'|'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'grey'|'white';
type ColorCode = number;

const MAXCOLORS =2;

export class decodedValue{
  private colors: Color[];

  private color_code: Record<Color,ColorCode> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  constructor(colors: Color[]){
    this.colors = colors;
    if (this.colors.length < MAXCOLORS) {
      throw new Error("At least two colors needed");
    }
  }

  value = ():number => parseInt(this.color_code[this.colors[0]]+''+this.color_code[this.colors[1]])
} */

export function decodedValue(colourArray: Array<string>) {
  const colorAr =[
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  const firstNumber = colorAr.indexOf(colourArray[0],0);
  const secondNumber = colorAr.indexOf(colourArray[1],0);
  return (firstNumber*10+secondNumber);
  //throw new Error('Remove this statement and implement this function')
};
