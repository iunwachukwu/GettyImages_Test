/**
 *  GettyImages test spec03.js: no PageObjects implemented yet: this will be used for SignOutPageObject.js
 */
describe('Protractor GettyImages spec03', function() {
	
	it('Open GettyImages website', function() {
		
		browser.get('https://www.gettyimages.com/');
		
		element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)")).click();
		
		element(by.model("new_session['username']")).sendKeys("jjones@jones.com");
		
		element(by.model("new_session['password']")).sendKeys("password1");
		
		element(by.id("sign_in")).click().then(function() {
			browser.sleep(5000);
		})
		
		element.all(element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)"))).get(8).click();
		
		

	})
	
	
	
//		element(by.model("userInputQuery")).sendKeys("river");
//		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("LONDON")).perform();
//		
//		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	
})
