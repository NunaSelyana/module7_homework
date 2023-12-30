let person = {
	name: 'Anna',
	age: 25
}
function anna(person) {
	for (const [key, value] of Object.entries(person)) {
  	console.log(`${key} ${value}`);
  }
}

anna(person)