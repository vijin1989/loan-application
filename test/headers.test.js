import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {

    // Write test cases inside this block
    it('check header content', async() => {
        const el = await fixture(html ` <loan-header></loan-header> `);
        await expect(el).to.be.accessible();
        const selector = el.shadowRoot.querySelector('p')
        expect(selector.textContent).to.equal('Apply Loan');

    });


});