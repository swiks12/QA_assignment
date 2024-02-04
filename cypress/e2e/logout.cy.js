///<reference types="cypress"/>
describe('template spec', () => {
    it('successfull logging out', () => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.get('.bm-burger-button > button').click();
      cy.get('#logout_sidebar_link').click();
    });
  });

  