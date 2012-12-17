(function () {
	
	var sequence = [1, 1, 2],
	user_sequence = [];
	
	// random = Math.floor(Math.random() * 4) + 1;
	
	document.getElementById("js_start").onclick = function (event) {
		
		startGame();
		event.stopPropagation();
		return false;
	};
	
	
	startGame = function  () {
		
		var len =  sequence.length,
		i = 0;
		
		
		var getColor = function (i) {
			switch (i) {
				case 1: 
					return "js_green"; break
				case 2: 
					return "js_red"; break
				case 3: 
					return "js_yellow"; break
				case 4: 
					return "js_blue"; break
			}
		}
		
		var displayColor = function() {
			
			var color = document.getElementById(getColor(sequence[i]));
		    color.className = color.className + " on";		 
	        

			setTimeout(function () {
				color.className = color.className.replace(/( on)+/g,'');
			}, 700);			

	        i++;
	        
	        if (i < len) {
	        	setTimeout(displayColor, 1000);
	        }
	    };

		displayColor();
		
		
		document.getElementById("js_green").onclick = function (event) {
			
			user_sequence.push(1);
			validate()
			event.stopPropagation();
			return false;
		} 
		
		document.getElementById("js_red").onclick = function (event) {
			
			user_sequence.push(2);
			validate()
			event.stopPropagation();
			return false;
		}
		
		function validate() {
			var len_user = user_sequence.length;
			
			if (len_user < len) {
				return true;
			} else {
			
				var a1 = sequence.toString(), 
				a2 = user_sequence.toString();
			
				if (a1 != a2) {
					alert("ta errado saporra");
				} else {
					return true;
				}
			}  
		}	
				
		
		
			
	}
	
	
	
	


})();
