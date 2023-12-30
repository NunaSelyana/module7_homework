function ElectricalAppliance(name, power) {
	this.name = name;
	this.power = power;
	
}

ElectricalAppliance.prototype.turnOn = function() {
	console.log(this.name + ' is connected');
	
}

const phytoLamp = new ElectricalAppliance('phyto lamp', 50);
const tv = new ElectricalAppliance('tv', 1200);

phytoLamp.turnOn();
console.log(phytoLamp);

tv.turnOn();
console.log(tv);