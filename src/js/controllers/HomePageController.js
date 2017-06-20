import { BaseController } from 'express-common-controller';

class HomePageController extends BaseController {
  index() {
    this.render('Hello World');
  }
}

export default HomePageController;
