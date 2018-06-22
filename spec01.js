/**
 * GettyImages test spec01.js: no PageObjects implemented yet: this will be used for RegisterPageObject.js
 */
describe('Protractor GettyImages spec01.js', function() {
	
	
	it('Open GettyImages website', function() {
		
		browser.get('https://www.gettyimages.com/');
		
		element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)")).click();
		
		element(by.css("section[class='option-picker']")).element(by.css("section:nth-child(2)")).click();
		
		element(by.model("register['firstName']")).sendKeys("Bart").click();
		
		element(by.model("register['lastName']")).sendKeys("Brett").click();
		
		element(by.name("register[organization_type]")).element(by.css("Optgroup[label='Agencies']")).element(by.css("option:nth-child(4)")).click();
		
		element(by.model("register['organizationName']")).sendKeys("Pizza Hut").click();
		
		element(by.name("register[job_title]")).element(by.css("Optgroup[label='Client Management']")).element(by.css("option:nth-child(3)")).click();
		
		element(by.name("register[email]")).sendKeys("bbrett@brett.com");
		
		element(by.name("register[telephone]")).sendKeys("818-435-2514");
		
		element(by.name("register[password]")).sendKeys("password1");
		
		element(by.id("register-button")).click().then(function() {
			browser.sleep(5000)
		});

	})
	
	
})
