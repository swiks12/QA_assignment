///<reference types="cypress"/>
describe('template spec', () => {
    it('user should not login', () => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.')
      
    });
  });

  