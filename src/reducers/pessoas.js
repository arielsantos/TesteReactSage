const pessoasReducerDefaultState = [];

export default (state = pessoasReducerDefaultState, action) => {
    switch (action.type) {
      case 'ADD_PESSOA':
        return [
          ...state,
          action.pessoa
        ];
      case 'REMOVE_PESSOA':
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_PESSOA':
        return state.map((pessoa) => {
          if (pessoa.id === action.id) {
            return {
              ...pessoa,
              ...action.updates
            };
          } else {
            return pessoa;
          };
        });
      case 'SET_PESSOA':
        return action.pessoa;
      default:
        return state;
    }
  };
  