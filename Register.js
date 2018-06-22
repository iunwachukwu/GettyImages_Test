/**
 * GettyImages Test Register.js will use RegisterPageObject.js
 */
describe('GettyImages Register New User', function() {
	var obj = require("./RegisterPageObject.js");
	
	beforeEach(function() {
		obj.getURL();
	});
	
	
	it('Register a new user account', function() {
		
		obj.signinHomeButton.click().then(function() {
			browser.sleep(5000);
		});
		
		obj.registerButton.click();
		
		obj.firstName.sendKeys("Jess").click();
		
		obj.lastName.sendKeys("Frank").click();
		
		obj.orgType.click();
		
		obj.orgName.click();
		
		obj.jobTitle.click();
		
		obj.email.sendKeys("jfrank@frank.com");
		
		obj.phone.sendKeys("818-435-2514");
		
		obj.password.sendKeys("password1");
		
		obj.registerButton.click().then(function() {
			browser.sleep(5000)
		});
	})
	
	afterEach(function() {
		console.log("Test is completed");
	});
})
