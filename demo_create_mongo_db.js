/**
 * Created by Khang Nguyen on 05/05/2018.
 * khang.nguyen@banvien.com
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	//1. Create collection(as table)
	/*dbo.createCollection("customers", function(err, res) {
		if (err) throw err;
		console.log("Collection created!");
		db.close();
	});*/

	//2. Insert one into table
	/*var myobj = { name: "Company Inc", address: "Highway 37" };
	dbo.collection("customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	});*/

	//3. Insert many into table
	/*var myobj = [
		{ name: 'John', address: 'Highway 71'},
		{ name: 'Peter', address: 'Lowstreet 4'},
		{ name: 'Amy', address: 'Apple st 652'},
		{ name: 'Hannah', address: 'Mountain 21'},
		{ name: 'Michael', address: 'Valley 345'},
		{ name: 'Sandy', address: 'Ocean blvd 2'},
		{ name: 'Betty', address: 'Green Grass 1'},
		{ name: 'Richard', address: 'Sky st 331'},
		{ name: 'Susan', address: 'One way 98'},
		{ name: 'Vicky', address: 'Yellow Garden 2'},
		{ name: 'Ben', address: 'Park Lane 38'},
		{ name: 'William', address: 'Central st 954'},
		{ name: 'Chuck', address: 'Main Road 989'},
		{ name: 'Viola', address: 'Sideway 1633'}
	];
	dbo.collection("customers").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});*/

	//4. Find One: The findOne() method returns the first occurrence in the selection.
	/*dbo.collection("customers").findOne({}, function(err, result) {
		if (err) throw err;
		console.log(result.name);
		db.close();
	});*/

	//5. Find All: The find() method returns all occurrences in the selection.
	/*dbo.collection("customers").find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});*/

	//6. Find Some:
	/*dbo.collection("customers").find({name: "Vicky"}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});*/

	//7. Query
	//var query = { address: "Park Lane 38" };
	/*var query = { address: /^S/ };
	dbo.collection("customers").find(query).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});*/

	//8. Sort
	/*var mysort = { name: -1 }; //1: ascending, -1: descending
	dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});*/

	//9. Delete
	/*var myquery = { address: 'Mountain 21' };
	dbo.collection("customers").deleteOne(myquery, function(err, obj) {
		if (err) throw err;
		console.log("1 document deleted");
		db.close();
	});*/

	//10. Update
	/*var myquery = { address: "Valley 345" };
	var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
	dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
		if (err) throw err;
		console.log("1 document updated");
		db.close();
	});*/

	//11. Limit
	dbo.collection("customers").find().limit(5).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});

});