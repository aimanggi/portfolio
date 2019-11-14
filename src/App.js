import React from 'react';
import Router from './route/Router';

// base framework
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// third party
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/v4-shims.min.css';
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/swiper/js/swiper';
import '../node_modules/swiper/css/swiper.min.css';

// base framework
import 'jquery';
import 'bootstrap';

// Custom css
import './assets/scss/style.scss';

function App() {
  return (
    <Router />
  );
}

export default App;
