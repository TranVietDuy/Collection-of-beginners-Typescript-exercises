const ColorList : string[] = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];

export function decodedResistorValue(colors: string[]) {
  if (colors.length < 3) {
  throw new Error('At least three colors need to be present')}
  const firstString = colors[0]
  const secondString = colors[1]
  const thirdString = colors[2]
  const firstNumber = ColorList.indexOf(firstString)
  const secondNumber = ColorList.indexOf(secondString)
  const thirdNumber = ColorList.indexOf(thirdString)

  const numberInString: string = 
  `${firstNumber}${secondNumber}${"0".repeat(Number(thirdNumber))}`

  const numberInNumber : number = Number(numberInString)
   if (numberInNumber % 1000 === 0) {
     return `${numberInNumber / 1000} kiloohms`
   } else {
     return `${numberInString} ohms`
   }
}
console.log(decodedResistorValue(['orange', 'orange', 'black']))