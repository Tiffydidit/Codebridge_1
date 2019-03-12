/*SLIDESHOW CODE*/
		var currentPic = 0; //declaring and intializing a global variable.

		let showImg = (n) => { /* declaring a function and giving it "instructions"*/

			var pics = document.getElementsByClassName("slide"); /* assigning pics to an array/ telling function to get images and put them in this array named pics */

			if(n > pics.length - 1) {currentPic = 0} /* conditional that resets pic to index0 if the index is greater than 4*/
			
			if(n < 0) {currentPic = pics.length - 1} /* conditional that resets pic to index4 if the index is less than 0*/

				let i = 0;
				while (i < pics.length){
					pics[i].style.display = "none";
					i++;
				} /* creating loop the turns all images off while i is less than 5 i.e. numbers 0 - 4 */

			pics[currentPic].style.display = "block"; /*calling the pic at index0 in the array called "pics" to display block after turning off all pics*/

		}
		let Next = (n) => {
			showImg(currentPic += n); /* calling showImg as the statement for the function "Next" that will be called onclick and telling it to +1 || -1 */
		}
		showImg(0); /*call function to display index0*/


		/*CLEAR FORM CODE*/
		function clearMe(){

			var name = document.getElementById('name').value='';
			var girl = document.getElementById('fgg').value='';
			var age = document.getElementById('age').value='';
			var mail = document.getElementById('mail').value='';
			var ccake = document.getElementById('ccake').value='';
			


		}
