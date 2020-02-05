import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addPessoa } from './actions/pessoas';
import { setTextFilter }  from './actions/filters';
import getVisiblePessoas from './selectors/pessoas';

const store = configureStore();

store.dispatch(addPessoa({ nome: 'Walter', cpf: 4500 }));
store.dispatch(addPessoa({ nome: 'Bill', cpf: 1000 }));
//store.dispatch(addPessoa({ description: 'Rent', amount: 109500 }));

const state = store.getState();
// const visiblePessoas = getVisiblePessoas(state.pessoas, state.filters);
// console.log(visiblePessoas);

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
  ReactDOM.render(jsx, document.getElementById('app'));