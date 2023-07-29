var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://peti:nIn9@cluster0.tdvt1s4.mongodb.net/t12";

async function feladat01() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("FifaAdatbazis");
        await db.createCollection("Fifa");
        console.log("A minta kolleció létre jött.");
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a csatlakozás során:",err);
    }
}

feladat01();