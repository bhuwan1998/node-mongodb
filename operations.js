const assert = require('assert'); 

exports.insertDocument = (db, document, collection, callback ) => {
    const coll = db.collection(collection); 
    coll.insert(document, (err, result) => {
        assert.strictEqual(err, null); 
        console.log("Inserted " + result.result.n + 
        " documents into the collection " + collection);
        callback(result); 

    });

};

exports.findDocuments = (db, document, callback ) => {
        const coll = db.collection(collection); 
        coll.find({}).toArray((err, docs) => {
            assert.strictEqual(err, null);
            callback(docs); 
    
        });

};


exports.removeDocument = (db, document, collection, callback ) => {
    const coll = db.collection(collection); 
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        console.log("Removed the document ", document);
        // document is after a comma here because doc is a JSON object 
        callback(result);
    });
};

exports.updateDocument = (db, document, update, collection, callback ) => {
    const coll = db.collection(collection); 
    coll.updateOne(document, {$set: update}, null, (err, result) => {
        assert.strictEqual(err, null); 
        console.log("Updated the document with ", update); 
        // update contains the JSON object (BSON for mongo)
        callback(result);
    });
    // $set: update shows that $set will update with whatever update variable contains - could be a JSON object overwriting the previous information 

};