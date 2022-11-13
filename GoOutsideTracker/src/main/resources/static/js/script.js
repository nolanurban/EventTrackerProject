window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	initialize(); // our starter function
	loadAllActivities();
	submitFormMakeNewDailyObj();
});

function initialize() {
	// Set up event listeners
	console.log('Now initializing');
	loadAllDaily();
	
}

function loadAllDaily() {

let xhr = new XMLHttpRequest();
xhr.open('get', '/api/daily', true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				let dailyData = JSON.parse(xhr.responseText);
				displayAllDaily(dailyData)
				}
			else {
				console.log("error getting daily list");
			}
		}
	}
xhr.send();
}

function displayAllDaily(data) {
	let maindiv = document.getElementById("allDays");
	let table = document.createElement('table');
	maindiv.appendChild(table);
	let th0 = document.createElement('th');
	th0.textContent = 'Number';
	table.appendChild(th0);
	let th1 = document.createElement('th');
	th1.textContent = 'User';
	table.appendChild(th1);
	let th2 = document.createElement('th');
	th2.textContent = 'Activity';
	table.appendChild(th2);
	let th3 = document.createElement('th');
	th3.textContent = 'Description';
	table.appendChild(th3);
	let th4 = document.createElement('th');
	th4.textContent = 'Date';
	table.appendChild(th4);


	
		let count = 1;
	for (let d of data) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		tr.addEventListener('click', function(event) {
			alert("somebody clicked a row");
		});

		let td0 = document.createElement('td');
		td0.textContent = count;
		td0.addEventListener('click', function(event) { alert("somebody clicked a number");});
				tr.appendChild(td0);
		let td1 = document.createElement('td');
		td1.textContent = d.user.username;
				tr.appendChild(td1);
		let td2 = document.createElement('td');
		td2.textContent = d.activity.name;
				tr.appendChild(td2);
		let td3 = document.createElement('td');
		td3.textContent = d.description;
				tr.appendChild(td3);
		let td4 = document.createElement('td');
		td4.textContent = d.date;
				tr.appendChild(td4);
				console.log('got to the click function');
	
		count++;
	

	}
	fetchUser();
}

function loadAllActivities() {
let xhr = new XMLHttpRequest();
xhr.open('get', '/api/activities/showall', true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				let activityData = JSON.parse(xhr.responseText);
				dropDownActivityMenu(activityData)
				}
			else {
				console.log("error getting activity list");
			}
		}
	}
xhr.send();
}

function dropDownActivityMenu(data) {
let drop = document.getElementById("dropDown");
let s = document.createElement('select');
s.setAttribute("id", "selectActivity")
drop.appendChild(s);
for (d of data) {
	let o = document.createElement('option');
	o.textContent = d.name;
	o.value = d.id;
	s.appendChild(o);
	}
	
}

function createNewDay() {
let xhr = new XMLHttpRequest();
xhr.open('get', '/api/activities/showall', true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				let activityData = JSON.parse(xhr.responseText);
				dropDownActivityMenu(activityData)
				}
			else {
				console.log("error getting activity list");
			}
		}
	}
xhr.send();
}

/* built to retrieve a user ID but will hardcode id of 1 */
function fetchUser() {
let xhr = new XMLHttpRequest();
xhr.open('get', `/api/finduser/1`, true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				hideUserData(JSON.parse(xhr.responseText));
				console.log('passing user data to hideUserData');
				}
			else {
				console.log("error getting activity list");
			}
		}
	}
xhr.send();	
}

function hideUserData(data) {
	let form1 = document.getElementById("addNewDay");
	let hiddenInput = document.createElement('input');
	hiddenInput.id = "userId";
	hiddenInput.type = "hidden";
	hiddenInput.name = "userid";
	hiddenInput.value = data.id;
	form1.appendChild(hiddenInput);
	let hiddenInput1 = document.createElement('input');
	hiddenInput1.id = "userName";
	hiddenInput1.type = "hidden";
	hiddenInput1.name = "username";
	hiddenInput1.value = data.username;
	form1.appendChild(hiddenInput1);

	let hiddenInput2 = document.createElement('input');
	hiddenInput2.id = "passWord";
	hiddenInput2.type = "hidden";
	hiddenInput2.name = "password";
	hiddenInput2.value = data.password;
	form1.appendChild(hiddenInput2);

	console.log(hiddenInput);
		console.log(hiddenInput1);
			console.log(hiddenInput2);
}

function submitFormMakeNewDailyObj() {
	let button = document.getElementById("myButton");
	console.log(button);
	button.addEventListener('click', function (e) { 
		
		let addNewDay = document.getElementById("addNewDay");
		console.log(addNewDay);
		let description = document.getElementById("description");
		console.log(description);
		if (description.value === '') alert('Cannot submit without description.');
		//if (form.date === '') alert('Must have a date');
		let date = document.getElementById("date");
		let imageUrl = document.getElementById("imageurl");
		console.log(date.value);
		if (date.value === '') date = Date.now();
		console.log(date);
		let select = document.getElementById("selectActivity");
		console.log(select.value);
		console.log(select.options[select.selectedIndex].text);
		let activity = {
			id: select.value,
			name: select.options[select.selectedIndex].text
			};
		let uid = document.getElementById("userId");
		let uu = document.getElementById("userName");
		let up = document.getElementById("passWord");
		
		let user = {
			id: uid.value,
			username: uu.value,
			password: up.value
		}
		console.log(uid.value + " " + uu.value + " " + up.value);	
		
		setNewDailyObj(description.value, imageUrl.value, date.value, user, activity);
	});
	console.log("this happened");
}

function setNewDailyObj(desc, img, day, u, a) {
	let jObj = {
		description: desc,
		imageUrl: img,
		date: day,
		user : { id: u.id, username: u.username, password: u.password },
		activity : { id: a.id, name: a.name }
	};
	console.log("attempting to create new daily entry");
	createNewEntry(JSON.stringify(jObj));
}
function createNewEntry(dataObj) {
	console.log(dataObj);
	let xhr = new XMLHttpRequest();
xhr.open('post', `/api/daily/newactivity`, true);
xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				console.log("new daily entity added.")
				}
			else {
				console.log("error posting object");
			}
		}
	}
xhr.send(dataObj);	
}