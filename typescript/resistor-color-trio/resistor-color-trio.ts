export function decodedResistorValue(resistorColors: string[]):string {
  interface ResistorColors{
    [key: string]:string
  }

  const ResistorColorsMap: ResistorColors = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9'
  }

  let ohm = ' kiloohms';
  const totalValue = parseInt(`${ResistorColorsMap[resistorColors[0]]}${ResistorColorsMap[resistorColors[1]]}`) * 10 ** parseInt(`${ResistorColorsMap[resistorColors[2]]}`);
  if (totalValue <= 1000) {
    return totalValue + ' ohms';    
  }else{
    return (totalValue/1000)+ ohm;
  } 
}
