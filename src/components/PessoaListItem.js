import React from 'react';
import { Link } from 'react-router-dom';

const PessoaListItem = ({ id, nome, cpf, dataNascimento }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{nome}</h3>
    </Link>
    {/* <p>{amount} - {createdAt}</p> */}
  </div>
);

export default PessoaListItem;
