/*
@include shutdownOldProcessesOfThisScript.txt
@BackgroundProcess
@RunInCloud
*/


/* This code is far from finished */

HumanStatus = function(person){
	this.person = person;
	if (! person){
		alert("Missing user");
	}

	//Dummy data - Remove when running Reel
	let personStatuses = {
		"isAlive" : true,
		"isAwake" : false,
		"isWounded": false,
		"isTired": true,
		"isDrunk": true
	}
	alert(this.person.statuses);

	if (! this.person.statuses) {
		this.person.statuses = personStatuses 
	}

	for (var key in this.person.statuses){
		alert(key);
		console.log("key:" + this.person.statuses[key]);
	}
}
HumanStatus.prototype.status = function(status) {
	if (this.person.status) {
		return {
			"isAlive" : this.person.statuses.isAlive,
			"isAwake" : this.person.statuses.isAwake,
			"isWounded": this.person.statuses.isWounded,
			"isTired": this.person.statuses.isTired,
			"isDrunk": this.person.statuses.isDrunk,
			}
		}
	}
let humanStatus = new HumanStatus("Matt");


alert(humanStatus.status("isAlive"));

