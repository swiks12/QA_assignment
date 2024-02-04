///<reference types="cypress"/>
describe('template spec', () => {
  const credentials=[
    {
       username: 'standard_user',
     password: 'secret_sauce' 
    },
    { 
      username: 'standard_user',
     password: 'swikriti' 
    },
    {
      username:'swikriti',password:'secret_sauce'
    },
    {
      username:'swikriti',password:'swikriti'
    },
  ];

  credentials.forEach((credential, index) => {
    it(`should successfully login with set ${index + 1}`, () => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('[data-test="username"]').type(credential.username);
      cy.get('[data-test="password"]').type(credential.password);
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  });
});
