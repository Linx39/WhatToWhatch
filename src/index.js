import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import films from './mocks/films';

ReactDOM.render(
    <App
      movies={films}
    />,
    document.querySelector(`#root`)
);
