/// <reference types="cypress" />
describe('tables', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/system-under-test/tables.html');
    })

    it("verify number of columns", () => {
        cy.get('thead th').should('have.length', 5);
    })

    it("verify headers", () => {
        const headerNames = ['ID', 'Name', 'Age', 'Edit', 'Delete'];
        cy.get('thead th').each(($header, index) => {
            cy.wrap($header).invoke('text').should('eq', headerNames[index]);
        })
    })

    it("verify number of rows", () => {
        cy.get('table tr').should('have.length', 6);
        cy.get('tbody>tr').should('have.length', 5);
    })

    it("verify data in the first row", () => {
        const expectedData = {
            id: '1',
            name: 'John',
            age: '30',
        }
        cy.get('tbody>tr').first().find('td').each(($cell, index) => {
            if (index < 3) {
                cy.wrap($cell).invoke('text').should('eq', Object.values(expectedData)[index]);
            }
        })
    })

    it.only("verify sorting by age", () => {
        /*
        1. Отримати значення перед сортуванням - done
        2. Відсортувати всередені тесту, отриманні значення - це будуть expected result - done
        3. Застосувати сортування на сторінці, отримати нові значення - це будуть actual result
        4. Порівняти expected та actual results
        */
        let ageNumbersBeforeSorting = [];
        let ageNumbersExpectedSorted = [];
        let ageNumbersActualSorted = [];

        cy.get('tbody tr').each(($row) => {
            cy.wrap($row).find('td').eq(2).invoke('text').then((text) => {
                cy.log(text);
                ageNumbersBeforeSorting.push(text);
            })
        }).then(() => {
            cy.log('All numbers ' + ageNumbersBeforeSorting.join(','));
            ageNumbersExpectedSorted = ageNumbersBeforeSorting.sort();
            cy.log('All numbers filtered ' + ageNumbersExpectedSorted.join(','));
        })

        cy.contains('Age').click();

        cy.get('tbody tr').each(($row) => {
            cy.wrap($row).find('td').eq(2).invoke('text').then((text) => {
                cy.log(text);
                ageNumbersActualSorted.push(text);
            })
        }).then(() => {
            cy.log('All numbers filtered 2:' + ageNumbersActualSorted.join(','));
            cy.wrap(ageNumbersExpectedSorted).should('deep.equal', ageNumbersActualSorted)
        })


    })
})

