import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon, { stub } from 'sinon';
import { Router } from '@vaadin/router';

describe('Loan EMI details', () => {
    // Write test cases inside this block
    let el;
    before(async() => {
        el = await fixture(html `<loanemi-details></loanemi-details>`);
    });

    it("_toBasicDetails() - called Router's go() to navigate to Basic Details Page", () => {
        const spy = Sinon.spy(Router, 'go');
        el._toBasicDetails();
        expect(spy).to.have.called;
        expect(spy.firstCall.args[0]).to.equal('/details')
        spy.restore();
    });

    it("_toCustomer() - called Router's go() to navigate to Customer Page", () => {
        const spy = Sinon.spy(Router, 'go');
        el._toCustomer();
        expect(spy).to.have.called;
        expect(spy.firstCall.args[0]).to.equal('/customer')
        spy.restore();
    });
});