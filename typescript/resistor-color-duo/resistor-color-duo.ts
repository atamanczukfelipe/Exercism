export function decodedValue(resistorColors: string[]):number {
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

  return Number(ResistorColorsMap[resistorColors[0]] + ResistorColorsMap[resistorColors[1]]);
}
