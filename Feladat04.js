const { connections } = require("mongoose");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://peti:nIn9@cluster0.tdvt1s4.mongodb.net/t12";

async function feladat04() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás");

        const db = client.db("FifaAdatbazis");
        const collection = db.collection("Fifa");


        const szurtAdat = await collection.find({}).sort({
            helyezes: 1
        }).limit(3).toArray();

        console.log("Lekérdezett adatok:", szurtAdat);


        client.close();
    }
    catch (err) {
        console.error("Hiba történt a csatlakozás vagy a lekérdezés közben:", err)
    }
}

feladat04();