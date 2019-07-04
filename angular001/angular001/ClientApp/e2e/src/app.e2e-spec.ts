// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('angular001 App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display application title: angular001', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('angular001');
    });
});
