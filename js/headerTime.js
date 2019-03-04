function setDateTime() {
			const datetime1 = new Date();
			const year = datetime1.getFullYear();
			const month = datetime1.getMonth() + 1;
			const day = datetime1.getDate();
			const hour = datetime1.getHours();
			const minute = datetime1.getMinutes();
			const second = datetime1.getSeconds();
			document.querySelector("#datetime").innerHTML = 
				day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
}
setInterval(setDateTime, 1000);