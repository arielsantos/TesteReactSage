// ADD_PESSOA
export const addPessoa = (
  {
    nome = '',
    cpf = '',
    dataNascimento = 0
  } = {}
) => ({
  type: 'ADD_PESSOA',
  pessoa: {    
    nome,
    cpf,
    dataNascimento,    
  }
});

// REMOVE_EXPENSE
export const removePessoa = ({ id } = {}) => ({
  type: 'REMOVE_PESSOA',
  id
});

// EDIT_EXPENSE
export const editPessoa = (id, updates) => ({
  type: 'EDIT_PESSOA',
  id,
  updates
});
