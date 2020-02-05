import React from 'react';
import { connect } from 'react-redux';
 import PessoaListItem from './PessoaListItem';
 import selectPessoas from '../selectors/pessoas';

const PessoaList = (props) => (
  <div>
    <h1>Pessoa 1List</h1>
    {props.Pessoas.map((Pessoa) => {
      return <PessoaListItem key={Pessoa.id} {...Pessoa} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    Pessoas: selectPessoas(state.pessoas, state.filters)
  };
};

export default connect(mapStateToProps)(PessoaList);
 