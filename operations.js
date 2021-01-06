const assert = require('assert'); 

exports.insertDocument = (db, document, collection, callback ) => {
    const coll = db.collection(collection); 
    return coll.insert(document);
    
};

exports.findDocuments = (db, document, callback ) => {
        const coll = db.collection(collection); 
        return coll.find({}).toArray();

};


exports.removeDocument = (db, document, collection, callback ) => {
    const coll = db.collection(collection); 
    return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback ) => {
    const coll = db.collection(collection); 
    return coll.updateOne(document, {$set : update}, null);
    // $set: update shows that $set will update with whatever update variable contains - could be a JSON object overwriting the previous information 
};