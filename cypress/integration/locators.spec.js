/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Trabalhe com elementos básicos', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Usando jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
    })
})