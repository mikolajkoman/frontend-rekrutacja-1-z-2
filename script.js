
$(document).ready(function () {
	var form = document.querySelector("#convertForm"),
		exAmountC = form.eurAmountC,		// button						
		plnAmount,							// ilość plnów
		exRate,						// kurs wymiany
		exAmount;
	

	exAmountC.addEventListener("click", function (e) {
		var exAmount = form.eurAmount.value;	// wpisana ilość do wymiany
			e.preventDefault();
		if (exAmount !== "") {
			// Odczytanie bieżącej daty i czasu, i rozbicie ich na składowe
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var hour = date.getHours();
			var minutes = date.getMinutes();
			var sec = date.getSeconds();
			 
			// Dodanie zera na początku minut i sekund jeżeli trzeba
			if (minutes < 10)
			    minutes = '0' + minutes;
			if (sec < 10)
			    sec = '0' + sec;
			 
			// Utworzenie odpowiednio sformatowanej daty i czasu
			var dateAndTime = year + ' ' + month + ' ' + day 
			    + ', ' + hour + ':' + minutes + ':' + sec;
			 
			function getRandom(min, max) {
				return Math.random().toFixed(4)* max;
			}

			var	random = getRandom(0, 100),
				exRate = 4.2 * (1+(random * 50)/1000),
				exRate = exRate.toFixed(4),
				plnAmount = (exAmount * exRate);
				plnAmount = plnAmount.toFixed(4);


			var article = document.querySelector(".result"),
				div =  document.createElement("div"),
				divHeader =  document.createElement("header"),
				divHeaderText = document.createTextNode("Current exchange rate: " + exRate ),
				divP =  document.createElement( "p"),
				divPText = document.createTextNode( plnAmount),	
				divPSpan =  document.createElement( "span"),
				divPSpanText = document.createTextNode("pln amount"),	
				divFooter =  document.createElement("footer"),
				divFooterText = document.createTextNode(dateAndTime);

			article.insertBefore(div, article.querySelector("div:nth-child(2)"));
				div.appendChild(divHeader);
					divHeader.appendChild(divHeaderText);
				div.appendChild(divP);
					divP.appendChild(divPSpan);
						divPSpan.appendChild(divPSpanText);
					divP.appendChild(divPText);
				div.appendChild(divFooter);
					divFooter.appendChild(divFooterText);

		}
		else{
			
			alert("Enter amount");
			e.preventDefault();
		}

	}) ;
 });
