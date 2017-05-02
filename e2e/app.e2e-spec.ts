import { AngularLessonsPage } from './app.po';

describe('angular-lessons App', function() {
  let page: AngularLessonsPage;

  beforeEach(() => {
    page = new AngularLessonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
