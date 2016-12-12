import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './layout/App';
import {Home} from './pages/home/home';
import {Decks} from './pages/decks/decks';
import {Cards} from './pages/cards/cards';
import {ArenaPicker} from './pages/arena-picker/arena-picker';
import {Expansions} from './pages/expansions/expansions';
import {Adventures} from './pages/adventures/adventures';
import {CreateDeck} from './pages/create-deck/create-deck';
import {Forum} from './pages/forum/forum';
import {Tournaments} from './pages/tournaments/tournaments';
import {Streams} from './pages/streams/streams';

import {DeckWarlock} from './pages/decks/deck_warlock';
import {DeckDruid} from './pages/decks/deck_druid';

import {PickedClass} from './pages/arena-picker/picked-class';

import './styles/index.css';
import './styles/mobile.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/"                   component={App}>
        <IndexRoute                     component={Home} />
        <Route path="strona-glowna"     component={Home} />
        <Route path="talie-kart"        component={Decks}>
          <Route path="czarnoksieznik"  component={DeckWarlock} />
          <Route path="druid"           component={DeckDruid} />
        </Route>
        <Route path="karty"             component={Cards}>
          <Route path="/karta/:idKarty" component={Cards} />
        </Route>
        <Route path="arena-picker"      component={ArenaPicker}>
          <Route path="czarnoksieznik"  component={PickedClass} />
          <Route path="druid"           component={PickedClass} />
          <Route path="kaplan"          component={PickedClass} />
          <Route path="lotr"            component={PickedClass} />
          <Route path="lowca"           component={PickedClass} />
          <Route path="mag"             component={PickedClass} />
          <Route path="paladyn"         component={PickedClass} />
          <Route path="szaman"          component={PickedClass} />
          <Route path="wojownik"        component={PickedClass} />
        </Route>
        <Route path="dodatki"           component={Expansions} />
        <Route path="przygody"          component={Adventures} />
        <Route path="stworz-talie-kart" component={CreateDeck} />
        <Route path="forum"             component={Forum} />
        <Route path="turnieje"          component={Tournaments} />
        <Route path="streamerzy"        component={Streams} />
      </Route>
    </Router>

), document.getElementById('root'));