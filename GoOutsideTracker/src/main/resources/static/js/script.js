window.addEventListener('load', function(e) {
	console.log('script.js loaded')

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
xhr.open('get', 'api/daily', true);
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
	let secondarydiv = document.getElementById("specificDay");
		secondarydiv.style.display = "none";
	let table = document.createElement('table');
	table.setAttribute("id", "mainTable");
	console.log("this is main div");
	console.log(maindiv);
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

    console.log('comes to initialize here *******');
    console.log(table);

	
		let count = 1;
	for (let d of data) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		tr.addEventListener('click', function(event) {
			getSpecificDay(d.id);
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
				/* we will build into this usig d.user.id to look up each daily activity 
				and give users the edit / delete function */
	
		count++;
	

	}
	fetchUser();
}

function getSpecificDay(id) {
let xhr = new XMLHttpRequest();
xhr.open('get', 'api/daily/' + id, true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				let activityData = JSON.parse(xhr.responseText);
				displaySpecificDay(activityData);
				}
			else {
				console.log("error getting activity list");
			}
		}
	}
xhr.send();
}

function displaySpecificDay(data) {
		let maindiv = document.getElementById("allDays");
		console.log('object recieved: ' + data.user.username);
		maindiv.style.display = "none";
		let secondarydiv = document.getElementById("specificDay");
		secondarydiv.style.display = "block";
		let table = document.createElement('table');
		table.id = 'secondaryTable';
		secondarydiv.appendChild(table);


		console.log(table);
		/* create header */
		let thead = document.createElement('thead');
		tr = document.createElement('tr');
		thead.appendChild(tr); /* new row */

		let th0 = document.createElement('th');
			th0.textContent = 'User';
		console.log('headers appending');
				thead.appendChild(th0);
		let th1 = document.createElement('th');
			th1.textContent = 'Activity';
				thead.appendChild(th1);
		let th2 = document.createElement('th');
			th2.textContent = 'Description';
				thead.appendChild(th2);
		let th3 = document.createElement('th');
			th3.textContent = 'Date';
				thead.appendChild(th3); 
		table.appendChild(thead);
		table.appendChild(tr);
		let tbody = document.createElement('tbody');
		console.log(tbody);
			let td0 = document.createElement('td'); /* create data row */
				td0.textContent = data.user.username;
					tbody.appendChild(td0);
			let td1 = document.createElement('td');
				td1.textContent = data.activity.name;
						tbody.appendChild(td1);
						console.log(td1);
			let td2 = document.createElement('td');
				td2.textContent = data.description;
						tbody.appendChild(td2);
			let td3 = document.createElement('td');
				td3.textContent = data.date;
						tbody.appendChild(td3);
			tbody.appendChild(tr);
		table.appendChild(tbody);
		
		/* lets create a footer for the update */
		
		let tfoot = document.createElement('tfoot');
		
			let tf0 = document.createElement('td');
						tfoot.appendChild(tf0);
			let tf1 = document.createElement('td');
				let drop = document.getElementById("selectActivity");
					tf1.appendChild(drop);
						tfoot.appendChild(tf1);
			let tf2 = document.createElement('td');
				let ip2 = document.createElement('input')
					ip2.size = 100;
					tf2.appendChild(ip2);
					
							tfoot.appendChild(tf2);

			let tf3 = document.createElement('td');
				let ip3 = document.createElement('input')
					ip3.type = "date";
					tf3.appendChild(ip3);
						
								tfoot.appendChild(tf3);

		
		
		table.appendChild(tfoot);
		
		/* edit button should update */
		let editButton = document.createElement('button');
		secondarydiv.appendChild(editButton);
		editButton.textContent = 'Edit Entry';
		editButton.addEventListener('click', function(e) {
			console.log("DROP DOWN: ");
			
			console.log(drop);
			
			console.log(drop.options[drop.selectedIndex].text);

			console.log('edit button working');
			console.log(ip2.value);
			if (ip3.value == null || ip3.value == '') {
					let today = new Date();
					ip3.value = today.toISOString().split('T')[0];
					}
			console.log(ip3.value);
				let jObj = {
					description: ip2.value,
					imageUrl: data.imageUrl,
					date: ip3.value,
					user : { id: data.user.id, username: data.user.username, password: data.user.password },
					activity : { id: drop.options[drop.selectedIndex].value, name: drop.options[drop.selectedIndex].text }
				};
				console.log(jObj);
				updateEntry(data.id, jObj);
				console.log('Update success?');
				
		});
		
		
		/* button work */
		
		
		let deleteButton = document.createElement('button');
		secondarydiv.appendChild(deleteButton);
		deleteButton.textContent = 'Delete Entry';
		deleteButton.addEventListener('click', function(e) { 
			console.log('delete button working');
			removeEntry(data.id);
			console.log(data.id + ' removed from database');
			});

		
		let backButton = document.createElement('button');
		backButton.textContent = 'Go back';
		backButton.addEventListener('click', function(e) {
			e.preventDefault();
			secondarydiv.style.display = "none";
			
			let removeTable = document.getElementById('secondaryTable');
			removeTable.parentNode.removeChild(removeTable);
			backButton.parentNode.removeChild(backButton);
			deleteButton.parentNode.removeChild(deleteButton);
			editButton.parentNode.removeChild(editButton);
			let main = document.getElementById('mainTable');
			maindiv.removeChild(main);
			initialize();
			loadAllActivities();
			submitFormMakeNewDailyObj();
			maindiv.style.display = "block";
		 });		
		 secondarydiv.appendChild(backButton);
	
}

function loadAllActivities() {
let xhr = new XMLHttpRequest();
xhr.open('get', 'api/activities/showall', true);
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
xhr.open('get', 'api/activities/showall', true);
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
xhr.open('get', `api/finduser/1`, true);
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
xhr.open('post', `api/daily/newactivity`, true);
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

function updateEntry(id, dataObj) {
	console.log(dataObj);
	let xhr = new XMLHttpRequest();
xhr.open('put', `api/daily/${id}`, true);
xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				console.log("daily entity updated.")
				}
			else {
				console.log("error updating object");
			}
		}
	}
xhr.send(JSON.stringify(dataObj));	
}
function removeEntry(id) {
	let xhr = new XMLHttpRequest();
xhr.open('delete', `api/daily/${id}`, true);
xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
xhr.onreadystatechange = function() {
	if (xhr.readyState == xhr.DONE) {
			if (xhr.status === 200) {
				console.log("Daily entry removed.")
				}
			else {
				console.log("error removing entry");
			}
		}
	}
xhr.send();	
}