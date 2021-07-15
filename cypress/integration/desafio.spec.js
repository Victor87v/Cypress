/// <reference types="cypress" />


describe('Trabalhe com elementos básicos', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Desafio', () => {
        cy.get('#formNome')
            .type('Victor')
            .should('have.value', 'Victor')
        cy.get('[data-cy=dataSobrenome]')
            .type('Valente')
            .should('have.value', 'Valente')
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formCadastrar')
            .click()
        cy.get('#resultado > :nth-child(1)')
            .type('Cadastrado!')
            .should('have.value' ,'Cadastrado!')
    })


})