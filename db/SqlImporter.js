const fs = require('node:fs');

SqlImporter =  function(configParam) {
	this.defaultConfig = {
		dataFilename : "mysqldata.dat"
	}
	this.dataSpecification = null;
	this.config = configParam ? configParam : this.defaultConfig;
}

SqlImporter.prototype.parse = function() {
	thisObject = this;
	fs.readFile(this.config.dataFilename, 'utf8', (err, data) => {
	  if (err) {
	  	console.log("LOADED DATA ERROR")
	    console.error(err);
	    return;
	  }
	  	thisObject.dataSpecification = data
		thisObject.hasLoaded = true;
		const tableDefs = this.dataSpecification.split(");");

		console.log(tableDefs[2]);
//	  	return data;
	});
}



const sqlImporter = new SqlImporter();
sqlImporter.parse();



/*
CREATE TABLE locations (
        location_id INT (11) AUTO_INCREMENT PRIMARY KEY,
        street_address VARCHAR (40) DEFAULT NULL,
        postal_code VARCHAR (12) DEFAULT NULL,
        city VARCHAR (30) NOT NULL,
        state_province VARCHAR (25) DEFAULT NULL,
        country_id CHAR (2) NOT NULL,
        FOREIGN KEY (country_id) REFERENCES countries (country_id) ON DELETE CASCADE ON UPDATE CASCADE
);
*/