/**
 * Configuration file
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
//  specs: ['SignIn.js'],
//  specs: ['spec01.js'],
  specs: ['Register.js'],
  
  onPrepare :function()
	{
		browser.driver.manage().window().maximize();
	}
};
