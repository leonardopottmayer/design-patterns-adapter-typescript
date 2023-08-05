import { Car } from "../interfaces/car";

export const MyDatabaseFunction = (function () {
  const cars: Car[] = [];

  return {
    add(car: Car): void {
      cars.push(car);
    },

    remove(index: number): void {
      cars.splice(index, 1);
    },

    show(): void {
      for (const car of cars) {
        console.log(car);
      }
    },
  };
})();
