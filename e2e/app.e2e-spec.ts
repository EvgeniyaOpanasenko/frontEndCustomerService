import { CustomerServicePage } from './app.po';

describe('customer-service App', () => {
  let page: CustomerServicePage;

  beforeEach(() => {
    page = new CustomerServicePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
