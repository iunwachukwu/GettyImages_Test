/**
 * SignInPageObject.js for SingIn.js
 */
function signin()
{
	this.signinHomeButton = element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)"));          
	this.username = element(by.id("new_session_username"));
	this.password = element(by.model("new_session['password']"));
	this.signin = element(by.id("sign_in"));
	
	// Methods
	this.getURL = function()
	{
		browser.get('https://www.gettyimages.com/');
	};

};

module.exports = new signin();
