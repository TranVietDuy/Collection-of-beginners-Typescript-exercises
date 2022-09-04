// type planet = 'earth' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
// type planetAge = { [key in planet]: number };
// const planetAge: planetAge = {
//   earth: 1,
//   mercury: 0.2408467,
//   venus: 0.61519726,
//   mars: 1.8808158,
//   jupiter: 11.862615,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   neptune: 164.79132,
// };

// export function age(planet: string, seconds: number): number {
//  return Math.round((seconds / 31557600 / planetAge[planet as planet]) * 100) / 100;
// }
const planetAge: { [planet: string]: number } = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}
export function age(planet: string, seconds: number): number {
  return Math.round((seconds / 31557600 / planetAge[ planet]) * 100) / 100;
}