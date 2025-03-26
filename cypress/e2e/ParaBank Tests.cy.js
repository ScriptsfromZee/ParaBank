describe('ParaBank Test', () => {
  let credentials
  let buttons
  let payee
  beforeEach(() => {
    cy.fixture('locators').then((data) => {
      credentials = data.credentials;
      buttons = data.buttons
      payee = data.payee
    });
  });

  it('User 1 Sign Up', () => {
    cy.visit("/parabank/register.htm");
    cy.log("Navigated to ParaBank Site");
    
    // Each time you rerun the sign up tests, new account details are created
    // Fill out User 1's registration form
    cy.get(credentials.firstName).type('David');
    cy.get(credentials.lastName).type('Jones');
    cy.get(credentials.userStreet).type('Woji');
    cy.get(credentials.userCity).type('Port Harcourt');
    cy.get(credentials.userState).type('Rivers');
    cy.get(credentials.userZipcode).type('500101');
    cy.get(credentials.phoneNumber).type('08020548796');
    cy.get(credentials.userSsn).type('12345678');
    cy.get(credentials.userName).type('David');
    cy.get(credentials.userPassword).type(credentials.userPasswordValue);
    cy.get(credentials.userPassword2).type(credentials.userPasswordValue);
    
    // Submit registration
    cy.get(buttons.register).click();
  });

  it('User 1 Log In', () => {
    cy.visit('/parabank/index.htm');

    // Log in with User 1's credentials
    cy.get(credentials.loginUsername).type('David');
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
    // Submit login
    cy.get(buttons.login).click();
  });

  it('User 2 Sign Up', () => {
    cy.visit('/parabank/register.htm');
    cy.log("Navigated to ParaBank site");

    // Fill out User 2's registration form
    cy.get(credentials.firstName).type('Eke');
    cy.get(credentials.lastName).type('Jones');
    cy.get(credentials.userStreet).type('Woji');
    cy.get(credentials.userCity).type('Port Harcourt');
    cy.get(credentials.userState).type('Rivers');
    cy.get(credentials.userZipcode).type('500102');
    cy.get(credentials.phoneNumber).type('08020553796');
    cy.get(credentials.userSsn).type('12345378');
    cy.get(credentials.userName).type('Eke');
    cy.get(credentials.userPassword).type(credentials.userPasswordValue)
    cy.get(credentials.userPassword2).type(credentials.userPasswordValue);
    
    // Submit registration
    cy.get(buttons.register).click();
  });

  it("User 1 Pays Bill", () => {
    // Log in as User 1
    cy.visit("/parabank/index.htm");
    cy.get(credentials.loginUsername).type('David');
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
    // Submit login
    cy.get(buttons.login).click();

    // Navigate to bill payment
    cy.get(buttons.payBill).click();

    // Fill out bill payment form
    cy.get(payee.name).type("Ekemini Jones");
    cy.get(payee.address).type("5 Ago Palace Way");
   cy.get(payee.city).type("Sango");
   cy.get(payee.state).type("Lagos");
   cy.get(payee.zipcode).type("500102");
   cy.get(payee.phoneNumber).type("08020987645");
   cy.get(payee.accountNumber).type("13899");
   cy.get(payee.verifyAccount).type("13899");
   cy.get(payee.amount).type("225");

   // Submit payment
   cy.get(buttons.sendPayment).click();
   
   // Return to overview
   cy.get(buttons.overView).click();
  });

  it("User 1 Updates Contact Info", () => {
   // Log in as User 1
   cy.visit('/parabank/index.htm');
   cy.get(credentials.loginUsername).type('David');
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
   
   // Submit login
   cy.get(buttons.login).click();

   // Navigate to update profile
   cy.get(buttons.updateProfile).click();
   cy.wait(3000)

   // Update zip code
   const newZipCode = "500102";
   cy.get(credentials.newUserZipcode).clear().type(newZipCode); 

   // Submit profile update and logout
   cy.get(buttons.updateProfile).click();
   cy.get(buttons.logOut).click()
  });

  it("User 1 Requests Loan", () => {
   // Log in as User 1
   cy.visit("/parabank/index.htm");
   cy.get(credentials.loginUsername).type('David');
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
   cy.get(buttons.logOut).click();
   
  });
  it("User 2 Pays Bill", () => {
    // Log in as User 2
    cy.visit('/parabank/index.htm');
    cy.get(credentials.loginUsername).type('Eke');
    cy.get(credentials.loginPassword).type(credentials.userPasswordValue);
    
    cy.get(buttons.login).click();

    // Navigate to bill payment
    cy.get(buttons.payBill).click();

    // Fill out bill payment form
    cy.get(payee.name).type("Eke Jones");
    cy.get(payee.address).type("5 Lekki Avenue");
   cy.get(payee.city).type("Lekki");
   cy.get(payee.state).type("Lagos");
   cy.get(payee.zipcode).type("500101");
   cy.get(payee.phoneNumber).type("0802098767896");
   cy.get(payee.accountNumber).type("13788");
   cy.get(payee.verifyAccount).type("13788");
   cy.get(payee.amount).type("150");

   // Submit payment
   cy.get(buttons.sendPayment).click();
   
   // Return to overview
   cy.get(buttons.overView).click();

   //User 2 sends Message to Customer Care 
   cy.get(buttons.feedBack).eq(1).click();
   cy.get(credentials.name).type('Eke Jones')
   cy.get(credentials.userEmail).type('jofyoziydu@gufum.com')
   cy.get(credentials.phone).type('08020546796')
   cy.get(buttons.feedBackArea).type(credentials.userfeedBack)
   cy.get(buttons.submitButton).click()
  });
  
});
