function arrayExamples() {
	const animal = "Cat";
	const animal1 = "Dog";
	const animal2 = "Kangoroo";
	const animal3 = "Sloth";
	const animal4 = "Cricket";

	let myArray = [animal, animal1, animal2, animal3, animal4];

	for (let i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}
}

function trafficLights(light) {
	let greenYel = "Go Go Go!";
	let yellowYel = "Be Careful";
	let redYel = "STOP!";
	let nonTrafficYel = "It's no a traffic light color!";

	if (light === "red") {
		return redYel;
	} else if (light === "yellow") {
		return yellowYel;
	} else if (light === "green") {
		return greenYel;
	} else {
		return nonTrafficYel;
	}
}

function tryArrayObject() {
	let users_data = [
		{
			user_name: "Rai Wirawan",
			age: 18,
			isEducated: true,
			occupation: "Software Engineer",
			hobbies: {
				hobby1: "Billiard",
				hobby2: "Badminton",
				hobby3: "Tennis",
			},
		},
		{
			user_name: "Wijaya Killa",
			age: 34,
			isEducated: true,
			occupations: {
				occupation1: "Director",
				occupation2: "Videographer",
				occupation3: "Photographer",
			},
			hobbies: {
				hobby1: "Billiard",
				hobby2: "Badminton",
				hobby3: "Tennis",
				hobby4: "Football",
			},
		},
		{
			user_name: "Bangkit Adnyana",
			age: 10,
			isEducated: true,
			occupations: "Elementary School's Student",
			hobbies: {
				hobby1: "Billiard",
				hobby2: "Badminton",
				hobby3: "Football",
			},
		},
	];

	return users_data[2].hobbies;
}

function JavaScriptAlert(alertInner, promptVar, confirmVar) {
	if (promptVar != "" && confirmVar != "") {
		alert(`${alertInner} ${promptVar}!`);
		confirmVar;
	} else if (promptVar != "") {
		alert(`${alertInner} ${promptVar}!`);
	} else {
		alert(alertInner);
	}
}

function promptMaker(promptText) {
	let prompt1 = prompt(promptText);
	return prompt1;
}

function confirmMaker(confirmText) {
	let confirm1 = confirm(confirmText);
	return confirm1;
}

function arrayPusher(array_name, value_for_push) {
	array_name.push(value_for_push);
}

const new_array = [];

arrayPusher(
	new_array,
	{
		username: "Orland Gryss",
		title: "Shooter of Albion",
		role: "Marksman",
		class: "Archer",
		power: 112,
		isLoggedIn: true,
	},
	{
		username: "Brunss Denn",
		title: "Warrior of Conrad",
		role: "Fighter",
		class: "Warrior",
		power: 134,
		isLoggedIn: true,
	},
	{
		username: "Charles Dynan",
		title: "Archmage of Chronos",
		role: "Magician",
		class: "Warrior",
		power: 150,
		isLoggedIn: true,
	}
);
