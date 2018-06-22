/**
 * GettyImages test spec02.js: no PageObjects implemented yet: this will be used for SignInPageObject.js
 */
describe('Protractor GettyImages spec02', function() {
	
	it('Open GettyImages website', function() {
		
		browser.get('https://www.gettyimages.com/');
		
		element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)")).click();
		
		element(by.id("new_session_username")).sendKeys("swales@wales.com");
		
		element(by.model("new_session['password']")).sendKeys("password1");
		
		element(by.id("sign_in")).click().then(function() {
			browser.sleep(5000);
		})
		
//		browser.actions().mouseMove(element(by.css("nav[itemscope='itemscope']")).element(by.css("div[class='ups-menu-item']:nth-child(2)")).sendKeys("Entertainment")).perform();
//		
//		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		
		
//		browser.actions().mouseMove(element(by.css("nav[itemscope='itemscope']")).element(by.css("div:nth-child(2)")).sendKeys("Entertainment")).perform();

	})
	
	
})
