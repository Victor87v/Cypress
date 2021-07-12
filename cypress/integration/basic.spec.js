/// <reference types="cypress" />

describe('Cyoress Básico',() => {
    it.only('Visitar uma página e fazer uma assertiva no título', () =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        // const title = cy.title()
        // console.log(title)
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

        let syncTitle

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            cy.wrap($el).type(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })

    it('Procurar interagir com um elemento', ()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    
    })
    
})