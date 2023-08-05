import { MyDatabaseClassic } from "./db/my-database-classic";

console.log("-----CLASS SINGLETON-----");
const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: "Josh", age: 25 });
myDatabaseClassic.add({ name: "Julie", age: 20 });
myDatabaseClassic.add({ name: "Andrew", age: 21 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export {};
