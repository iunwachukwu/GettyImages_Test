/**
 * GettyImages test signIn.js will use SignInPageObject.js
 */
describe('Protractor GettyImages SignIn.js', function() {
	
	var obj = require("./SignInPageObject.js");
	
	beforeEach(function() {
		obj.getURL();
	});
	
	it('Sign in to GettyImages', function() {
		
		obj.signinHomeButton.click();
		
		obj.username.sendKeys("swales@wales.com");
		
		obj.password.sendKeys("password1");
		
		obj.signin.click().then(function() {
			browser.sleep(5000);
		})
		
	})
	
	afterEach(function() {
		console.log("Test is completed");
	});
})
