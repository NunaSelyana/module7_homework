const obj = {
	name: 'chrismas tree',
	color: 'green'
}
const stroka = 'color'
const hasString = (obj, stroka) => {
	return stroka in obj;
}
console.log(hasString(obj, stroka));