describe('ParaBank Test', () => {

  it('User 1 Sign Up', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.log("Navigated to ParaBank site");

    // Fill out User 1's registration form
    cy.get('input[id="customer.firstName"]').type('David');
    cy.get('input[id="customer.lastName"]').type('Jones');
    cy.get('input[id="customer.address.street"]').type('Woji');
    cy.get('input[id="customer.address.city"]').type('Port Harcourt');
    cy.get('input[id="customer.address.state"]').type('Rivers');
    cy.get('input[id="customer.address.zipCode"]').type('500101');
    cy.get('input[id="customer.phoneNumber"]').type('08020548796');
    cy.get('input[id="customer.ssn"]').type('12345678');
    cy.get('input[id="customer.username"]').type('David');
    cy.get('input[id="customer.password"]').type('20December!');
    cy.get('input[id="repeatedPassword"]').type('20December!');
    
    // Submit registration
    cy.get('input[value="Register"]').click();
  });

  it('User 1 Log In', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Log in with User 1's credentials
    cy.get('input[name="username"]').type('David');
    cy.get('input[name="password"]').type('20December!');
    
    // Submit login
    cy.get('input[value="Log In"]').click();
  });

  it('User 2 Sign Up', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.log("Navigated to ParaBank site");

    // Fill out User 2's registration form
    cy.get('input[id="customer.firstName"]').type('Eke');
    cy.get('input[id="customer.lastName"]').type('Jones');
    cy.get('input[id="customer.address.street"]').type('Woji');
    cy.get('input[id="customer.address.city"]').type('Port Harcourt');
    cy.get('input[id="customer.address.state"]').type('Rivers');
    cy.get('input[id="customer.address.zipCode"]').type('500131');
    cy.get('input[id="customer.phoneNumber"]').type('08020546796');
    cy.get('input[id="customer.ssn"]').type('12345678');
    
    // Reuse username and password for simplicity
    cy.get('input[id="customer.username"]').type('EkeJones'); // Unique username
    cy.get('input[id="customer.password"]').type('20December!');
    cy.get('input[id="repeatedPassword"]').type('20December!');
    
    // Submit registration
    cy.get('input[value="Register"]').click();
  });

  it("User 1 Pays Bill", () => {
    // Log in as User 1
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("input[name='username']").type("David");
    cy.get("input[name='password']").type("20December!");
    
    // Submit login
    cy.get("input[value='Log In']").click();

    // Navigate to bill payment
    cy.get("a[href='billpay.htm']").click();

    // Fill out bill payment form
    cy.get("input[name='payee.name']").type("Eke Jones");
    cy.get("input[name='payee.address.street']").type("5 Ago Palace Way");
    
   // Fixed missing closing bracket for city input
   cy.get("input[name='payee.address.city']").type("Sango");
    
   // Continue filling out the form
   cy.get("input[name='payee.address.state']").type("Lagos");
   cy.get("input[name='payee.address.zipCode']").type("500102");
   cy.get("input[name='payee.phoneNumber']").type("08020987645");
   cy.get("input[name='payee.accountNumber']").type("17784");
   cy.get("input[name='verifyAccount']").type("17784");
   cy.get("input[name='amount']").type("225");

   // Submit payment
   cy.get("input[value='Send Payment']").click();
   
   // Return to overview
   cy.get("a[href='overview.htm']").click();
  });

  it("User 1 Updates Contact Info", () => {
   // Log in as User 1
   cy.visit("https://parabank.parasoft.com/parabank/index.htm");
   cy.get("input[name='username']").type("David");
   cy.get("input[name='password']").type("20December!");
   
   // Submit login
   cy.get("input[value='Log In']").click();

   // Navigate to update profile
   cy.get("a[href='updateprofile.htm']").click();
   cy.wait(3000); // Consider using a more dynamic wait

   // Update zip code
   const newZipCode = "500102";
   cy.get('#customer\\.address\\.zipCode').clear().type(newZipCode); 

   // Submit profile update and logout
   cy.get('[value="Update Profile"]').click();
   cy.get('a[href="logout.htm"]').click()
  });

  it("User 1 Requests Loan", () => {
   // Log in as User 1
   cy.visit("https://parabank.parasoft.com/parabank/index.htm");
   cy.get("input[name='username']").type("David");
   cy.get("input[name='password']").type("20December!");

   // Submit login
   cy.get("input[value='Log In']").click();

   // Navigate to loan request page
   cy.get("a[href='requestloan.htm']").click();

   // Fill out loan request form
   const loanAmount = "50";
   const downPayment = "0";
   
   // Enter loan details
   cy.get("#amount").type(loanAmount);
   cy.get("#downPayment").type(downPayment);

   // Submit loan request and logout
   cy.get("input[value='Apply Now']").click()
   cy.get('a[href="logout.htm"]').click();
   
  });
});
