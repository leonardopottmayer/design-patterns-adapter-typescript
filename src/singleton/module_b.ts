import { MyDatabaseModule } from "./db/my-database-module";

console.log("-----MODULE SINGLETON-----");
MyDatabaseModule.add({ name: "Pen", price: 22.56 });
MyDatabaseModule.add({ name: "Apple", price: 19.95 });
MyDatabaseModule.add({ name: "Pineaple", price: 15.12 });
MyDatabaseModule.show();

export {};
