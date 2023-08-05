import { MyDatabaseFunction } from "./db/my-database-function";

console.log("-----FUNCTION SINGLETON-----");
MyDatabaseFunction.add({ name: "Volkswagen Jetta", year: 2023 });
MyDatabaseFunction.add({ name: "Honda Civic", year: 2021 });
MyDatabaseFunction.add({ name: "Porshe GT3", year: 2016 });
MyDatabaseFunction.show();

export {};
