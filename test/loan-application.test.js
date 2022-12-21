import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import { Router } from '@vaadin/router';
import '../loan-application.js';

describe('LoanApplication', () => {
    // Write test cases inside this block

    let el, dashboardel, dashboarmenu;
    before(async() => {
        el = await fixture(html `<loan-application></loan-application>`);
        dashboardel = await fixture(html `<dash-board></dash-board>`);
        dashboarmenu = await fixture(html `<dashboard-menu></dashboard-menu>`);
    });
    it('is accessible', () => {
        expect(el).to.be.accessible;
    });

    it('is dashboard accessible', () => {
        expect(dashboardel).to.be.accessible;
    });

    it("navigateToDetails - called Router's go() to navigate to  detail Page", () => {
        const spy = Sinon.spy(Router, 'go');
        dashboarmenu.navigateToDetails();
        expect(spy).to.have.called;
        expect(spy.firstCall.args[0]).to.equal('/details')
        spy.restore();
    });

});