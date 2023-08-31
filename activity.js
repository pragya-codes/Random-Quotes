const generate = () => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4)
			if (this.status === 200) {
				console.log(this.responseText);
				const toObj = JSON.parse(this.responseText);
				// console.log(toObj, typeof toObj);
				// const toStr = JSON.stringify(toObj);
				// console.log(toStr, typeof toStr);
				const randomIndex = Math.floor(Math.random() * toObj.length);
				// console.log(toObj[randomIndex].text);
				const author = (a) => {
					const x = a;
					const y = x.split(' ').slice(0, 1).join(' '); //to get the first word from the string converted to array using split.
					return y;
				};
				document.getElementById('btn').className = 'btn';
				document.getElementById('btn').innerText =
					`${toObj[randomIndex].text} - by ` +
					author(toObj[randomIndex].author);
			}
	};

	xhr.open('GET', 'https://type.fit/api/quotes');
	xhr.send();
};
document.getElementById('btn').addEventListener('click', generate);
