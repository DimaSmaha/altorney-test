const homePage = require('../pageobjects/home.page');
const joinPage = require('../pageobjects/join.page');
const registerPage = require('../pageobjects/register.page');

describe('Altorney tests', () => {
 const password = "Qwerty123$"

  it('should register with valid credentials', async () => {
    await homePage.open();
    await homePage.clickJoinBtn();
    await joinPage.clickReviewerBtn();
    await registerPage.setFirstNameInputValue(registerPage.generateName());
    await registerPage.setLastNameInputValue(registerPage.generateName());
    await registerPage.setEmailInputValue(registerPage.generateName()+"@gmail.com");
    await registerPage.setPasswordInputValue(password);
    await registerPage.settConfirmPasswordInputValue(password);
    await registerPage.clickAgreeChb();
    await registerPage.clickSubmitBtn();
    await expect(browser).toHaveUrlContaining('https://test.altorney.com/register/success');    //Checks if we really successfully registered
  });

  it('should show error while you didnt pressed agree checkbox', async () => {
    await homePage.open();
    await homePage.clickJoinBtn();
    await joinPage.clickReviewerBtn();
    await registerPage.setFirstNameInputValue(registerPage.generateName());
    await registerPage.setLastNameInputValue(registerPage.generateName());
    await registerPage.setEmailInputValue(registerPage.generateName()+"@gmail.com");
    await registerPage.setPasswordInputValue(password);
    await registerPage.settConfirmPasswordInputValue(password);
    await registerPage.clickSubmitBtn();
    await expect(registerPage.getErrorLabel).toBeDisplayed();     //Checks that error was shown
  });
});


