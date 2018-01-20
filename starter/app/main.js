import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import './style.css';

import 'hammerjs/hammer.js';
import 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
import ko from 'knockout/build/output/knockout-latest.js';

$(".button-collapse").sideNav();

const viewModel = {
  message: 'Hello, Maksimko!',
};

ko.applyBindings(viewModel);
