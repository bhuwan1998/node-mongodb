const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = "conFusion"; 

MongoClient.connect(url,(err, client) => {
    assert.strictEqual(err, null); // check if there is an error 

    console.log('Connected correctly to the server'); 

    const db = client.db(dbname);
    const collection = db.collection('dishes');
    
    collection.insertOne({"name":"Uthappizza", "description":"test"}, (err, result) => {
        assert.strictEqual(err, null); 
        console.log('After Insert:\n');
        console.log(result.ops); //how many operations were carried out successfully 
        collection.find({}).toArray((err, docs) => {
            // JSON array object 
            assert.strictEqual(err, null); 
            console.log("Found:\n"); 
            console.log(docs); // indicate this might have been in the collection 
            db.dropCollection('dishes', (err, result) =>{
                assert.strictEqual(err, null); 

                client.close();
            });
        });
    });
    // insert one document in this collection 
    // first argument is the document 
});