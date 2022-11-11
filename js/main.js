function ExportToExcel(type, fn, dl) {
	const elt = document.getElementById('tbl_exporttable_to_xls')
	const wb = XLSX.utils.table_to_book(elt, { sheet: 'sheet1' })
	return dl
		? XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' })
		: XLSX.writeFile(wb, fn || 'MySheetName.' + (type || 'xlsx'))
}

const generateBtn = document.getElementById('generateBtn')
const table = document.querySelector('.table')
const input = document.querySelector('.input')

const cities = [
	'Abramowice Prywatne',
	'Abramowicee Prywatne',
	'Abramowice Prywatnee',
	'Abramowice Prywatnę',
	'ABRamowice Prywatne',
]
const names = [
	'Błażej',
	'Rafał',
	'Monika',
	'Zofia',
	'Tomasz',
	'Marcin',
	'Romuald',
	'Włodzimierz',
	'Krzysztof',
	'Adam',
	'Anita',
	'Antoni',
	'Antonina',
	'Marcel',
	'Andrzej',
	'Aneta',
	'Monika',
	'Marek',
	'Mariusz',
	'Katarzyna',
	'Kamil',
	'Maciej',
]
const lastNames = ['Nowicki', 'Turczyn']
const streets = [
	'ul. Słoneczna 17',
	'al. Słoneczna 17',
	'UL. Słoneczna 17',
	'Ul. Słoneczna 17',
	'ul. Şłoneczná 17',
	'al. SľonecznA 17',
	'ul. SłønėCZna 17',
	'ul. ŠŁöneczNa 17',
	'ul. Sļõnëcznā 17',
	'ul. SloNEcznā 17',
	'ul. SļønecznA 17',
	'ul. SłOņecznâ 17',
	'al. SĺoneczNA 17',
	'AL. Słoněczna 17',
	'Ul. SłonEczna 17',
	'AL. SłoNEczna 17',
	'al. Słonécznå 17',
	'ul. ŠLonecznå 17',
	'ul. ŠłoneCzna 17',
	'UL. Słonĕcznæ 17',
]
let numberProf = 1

const letters = [
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'X',
]

// ą à á â ã ä å æ ā ă
// Š Ş
// ñ ņ ň
// è é ê ë ē ė ě ĕ ə
// ĺ ļ ľ
// ô õ ö ø ő
// ç č
const newArray = []
const generate = () => {
	const inputValue = Number(input.value)

	for (let i = 1; i <= inputValue; i++) {
		const newRow = document.createElement('tr')
		const profile = document.createElement('td')
		const city = document.createElement('td')
		const name = document.createElement('td')
		const lastName = document.createElement('td')
		const street = document.createElement('td')
		const additional = document.createElement('td')
		const zip = document.createElement('td')
		const sameBilling = document.createElement('td')
		const bCity = document.createElement('td')
		const bName = document.createElement('td')
		const bLastName = document.createElement('td')
		const bStreet = document.createElement('td')
		const bAdditional = document.createElement('td')
		const bZip = document.createElement('td')
		const phoneNumber = document.createElement('td')
		const webHook = document.createElement('td')

		const randomCityNumber = Math.floor(Math.random() * cities.length)
		const nameNumber = Math.floor(Math.random() * names.length)
		const lastNameNumber = Math.floor(Math.random() * lastNames.length)
		const letterNumber1 = Math.floor(Math.random() * letters.length)
		const letterNumber2 = Math.floor(Math.random() * letters.length)
		const letterNumber3 = Math.floor(Math.random() * letters.length)
		const streetNumber = Math.floor(Math.random() * streets.length)
		const min = 300200100
		const max = 999999999
		const phoneRandom = Math.floor(Math.random() * (max - min + 1)) + min

		profile.textContent = `drop${numberProf++}`
		city.textContent = cities[randomCityNumber]
		name.textContent = names[nameNumber]
		lastName.textContent = lastNames[lastNameNumber]
		street.textContent = `${letters[letterNumber1]}${letters[letterNumber2]}${letters[letterNumber3]} ${streets[streetNumber]}`
		zip.textContent = '20-338'
		sameBilling.textContent = 'true'
		phoneNumber.textContent = phoneRandom

		const info = [
			profile,
			city,
			name,
			lastName,
			street,
			additional,
			zip,
			sameBilling,
			bCity,
			bName,
			bLastName,
			bStreet,
			bAdditional,
			bZip,
			phoneNumber,
			webHook,
		]

		newArray.push(newRow)
		info.forEach(i => {
			newRow.appendChild(i)
		})
	}

	// table.append(newRow)
	table.append(...newArray)

	console.log(newArray)
}

const check = () => {
    const error = document.querySelector('.error')
	if (input.value === '0' || input.value <= 0) {
		error.textContent = 'Musisz wpisać conajmniej jedno konto'
	} else if (input.value > 500) {
		error.textContent = 'Maksymalnie 500 kont'
	} else {
        error.textContent = ''
		generate()
        input.value = ''
	}
}

const inputDetector = (e) => {
    if(e.key === 'Enter'){
        check()
    }
}

generateBtn.addEventListener('click', check)
input.addEventListener('keydown', inputDetector)