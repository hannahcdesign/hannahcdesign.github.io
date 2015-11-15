	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-90
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

	$(window).load(function() {
		var navPosition = $('#project-content-nav').offset().top-50;
		$(window).on('scroll', function() {
			if($('body').scrollTop() > navPosition) {                
				$('#project-content-nav').css({
					position: 'fixed',
					top: 50
				});
			} else {
				$('#project-content-nav').css({
					position: 'static'
				});
			}
		});        
	});

// Password protection
function passWord() {
var _0xb61c=["\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x74\x68\x65\x20\x70\x61\x73\x73\x77\x6F\x72\x64","\x20","\x67\x6F","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x68\x61\x6E\x6E\x61\x68","\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x65\x6E\x74\x65\x72\x65\x64\x20\x61\x6E\x20\x69\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x70\x61\x73\x73\x77\x6F\x72\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E","\x70\x61\x73\x73\x77\x6F\x72\x64"];var testV=1;var pass1=prompt(_0xb61c[0],_0xb61c[1]);while(testV<5){if(!pass1){history[_0xb61c[2]](-1)};if(pass1[_0xb61c[3]]()==_0xb61c[4]){break };testV+=1;var pass1=prompt(_0xb61c[5],_0xb61c[0]);};if(pass1[_0xb61c[3]]()!=_0xb61c[6]&testV==5){history[_0xb61c[2]](-1)};return _0xb61c[1];
}

// Password protection script example
function passWord_example() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password',' ');
	while (testV < 3) {
		if (!pass1) 
			history.go(-1);
		if (pass1.toLowerCase() == "javascriptobfuscator") {
			alert('You Got it Right!');
			window.open('projects/pages/partyassistant.html');
			break;
		} 
		testV+=1;
		var pass1 = 
		prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
	}
	if (pass1.toLowerCase()!="password" & testV ==3) 
		history.go(-1);
	return " ";
}