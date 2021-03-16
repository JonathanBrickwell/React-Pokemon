import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Pokedex from './components/pokedex/pokedex';

function App() {

  return (
          <div>
            <div className="container pokedex">
              <div className="row">
                <div className="col">
                  <h1 className="text-center">Pokedex</h1>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col">
                </div>
              </div>
                <Pokedex></Pokedex>
            </div>
          </div>
  );
}

export default App;
