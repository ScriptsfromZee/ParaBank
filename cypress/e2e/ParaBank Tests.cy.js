/// <reference types="cypress" />

describe('ParaBank Test', () => {
  let credentials
  let buttons
  let payee
  let user1
  let user2
  let billPayment
  beforeEach(() => {
    cy.fixture('locators').then((data) => {
      credentials = data.credentials;
      buttons = data.buttons
      payee = data.payee
      user1 = data.user1
      user2 = data.user2
      billPayment = data.billPayment
    });
  });

  it('User 1 Sign Up', () => {
    cy.visit("/parabank/register.htm");
    cy.log("Navigated to ParaBank Site");
    
    // Each time you rerun the sign up tests, new account details are created. You can also just change personal details 
    // Fill out User 1's registration form
    cy.get(credentials.firstName).type(user1.firstName);
    cy.get(credentials.lastName).type(user1.lastName)
    cy.get(credentials.userStreet).type(user1.userStreet);
    cy.get(credentials.userCity).type(user1.userCity);
    cy.get(credentials.userState).type(user1.userState);
    cy.get(credentials.userZipcode).type(user1.userZipcode);
    cy.get(credentials.phoneNumber).type(user1.phoneNumber);
    cy.get(credentials.userSsn).type(user1.userSsn);
    cy.get(credentials.userName).type(user1.userName);
    cy.get(credentials.userPassword).type(credentials.userPasswordValue);
    cy.get(credentials.userPassword2).type(credentials.userPasswordValue);
    
    // Submit registration
    cy.get(buttons.register).click();
  });

  it('User 1 Log In', () => {
    cy.visit('/parabank/index.htm');

    // Log in with User 1's credentials
    cy.get(credentials.loginUsername).type(user1.userName);
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
    // Submit login
    cy.get(buttons.login).click();
  });

  it('User 2 Sign Up', () => {
    cy.visit('/parabank/register.htm');
    cy.log("Navigated to ParaBank site");
    // Fill out User 2's registration form
    cy.get(credentials.firstName).type(user2.firstName);
    cy.get(credentials.lastName).type(user2.lastName);
    cy.get(credentials.userStreet).type(user2.userStreet);
    cy.get(credentials.userCity).type(user2.userCity);
    cy.get(credentials.userState).type(user2.userState);
    cy.get(credentials.userZipcode).type(user2.userZipcode);
    cy.get(credentials.phoneNumber).type(user2.phoneNumber);
    cy.get(credentials.userSsn).type(user2.userSsn);
    cy.get(credentials.userName).type(user2.userName);
    cy.get(credentials.userPassword).type(credentials.userPasswordValue)
    cy.get(credentials.userPassword2).type(credentials.userPasswordValue);
    
    // Submit registration
    cy.get(buttons.register).click();
  });

  it("User 1 Pays Bill", () => {
    // Log in as User 1
    cy.visit("/parabank/index.htm");
    cy.get(credentials.loginUsername).type(user1.userName);
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
    // Submit login
    cy.get(buttons.login).click();

    // Navigate to bill payment
    cy.get(buttons.payBill).click();

    // Fill out bill payment form
    cy.get(payee.name).type(billPayment.name);
    cy.get(payee.address).type(billPayment.address);
    cy.get(payee.city).type(billPayment.city);
    cy.get(payee.state).type(billPayment.state);
    cy.get(payee.zipcode).type(billPayment.zipcode);
    cy.get(payee.phoneNumber).type(billPayment.phoneNumber);
    cy.get(payee.accountNumber).type(billPayment.accountNumber);
    cy.get(payee.verifyAccount).type(billPayment.verifyAccount);
    cy.get(payee.amount).type(billPayment.amount);

   // Submit payment
   cy.get(buttons.sendPayment).click();
   
   // Return to overview
   cy.get(buttons.overView).click();
  });

  it("User 1 Updates Contact Info", () => {
   // Log in as User 1
   cy.visit('/parabank/index.htm');
   cy.get(credentials.loginUsername).type(user1.userName);
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
   // Submit login
   cy.get(buttons.login).click();

   // Navigate to update profile
   cy.get(buttons.updateProfile).click();
   cy.wait(3000)

   // Update zip code
   const newZipCode = "500602";
   cy.get(credentials.newUserZipcode).clear().type(newZipCode)
   cy.contains('have been added to the system').should('be.visible')

   // Submit profile update and logout
   cy.get(buttons.updateProfile).click();
   cy.get(buttons.logOut).click()
  });

  it("User 1 Requests Loan", () => {
   // Log in as User 1
   cy.visit("/parabank/index.htm");
   cy.get(credentials.loginUsername).type(user1.userName);
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
   // Submit login
   cy.get(buttons.login).click();

   // Navigate to loan request page
   cy.get(buttons.requestLoan).click();

   // Fill out loan request form
   const loanAmount = 500;
   const downPayment = 0;
   
   // Enter loan details
   cy.get("#amount").type(loanAmount);
   cy.get("#downPayment").type(downPayment);

   // Submit loan request and logout
   cy.get(buttons.applyNow).click()
   cy.contains('Congratulations, your loan has been approved.').should('be.visible')
   cy.get(buttons.logOut).click();
   
  });

  it("User 2 Sends Message to Customer Care", () => {
    // Log in as User 2
    cy.visit('/parabank/index.htm');
    cy.get(credentials.loginUsername).type(user2.userName);
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    cy.get(buttons.login).click();
    // Navigate to contact page
   cy.get(buttons.feedBack).eq(1).click();
   cy.get(credentials.name).type(user2.firstName + " " + user2.lastName)
   cy.get(credentials.userEmail).type(user2.userName + "@gmail.com")
   cy.get(credentials.phone).type(user2.phoneNumber)
   cy.get(buttons.feedBackArea).type(credentials.userfeedBack)
   cy.get(buttons.submitButton).should('be.visible').click()
  });
});
