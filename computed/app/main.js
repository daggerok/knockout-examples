// yarn add -E material-design-icons
// import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import './style.css';

import 'hammerjs/hammer.js';
import 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
import ko from 'knockout/build/output/knockout-latest.js';

$(".button-collapse").sideNav();

const viewModel = {

  message: ko.observable('Hello, Maksimko!'),

  suffix: 'really..',

  inUpperCase: function inUpperCase() {
    const newValue = this.message().toUpperCase();
    this.message(newValue);
  },

  getSuffixed: function getSuffixed() {
    return `${this.message()} ${this.suffix}`;
  }
};

viewModel.suffixed = ko.computed(viewModel.getSuffixed, viewModel);
ko.applyBindings(viewModel);
