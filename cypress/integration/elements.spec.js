/// <reference types="cypress" />

describe('Trabalhe com elementos básicos', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })
    it('Text', () =>{

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () =>{

        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltou!').click()
        cy.get('#resultado').should('have.text','Status: Nao cadastrado')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Text')
        cy.get('#formNome').should('have.value', 'Cypress Text')

        cy.get('#elementosForm\\:sugestoes')
        .type('textarea')
        .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('????')
    
        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')
    
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto',{delay:100})
            .should('have.value','acerto')

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length',2)
    })

    it.only('Checkbox', () =>{
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true})
        
        cy.get('#formComidaPizza').should('not.be.checked')
        
    })

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value','2graucomp')
    })

})