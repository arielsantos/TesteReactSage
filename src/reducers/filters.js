import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
  
    case 'SORT_BY_DATA_NASCIMENTO':
      return {
        ...state,
        sortBy: 'dataNascimento'
      };
    case 'SET_DATA_INICIAL':
      return {
        ...state,
        startDate: action.dataInicial
      };
    case 'SET_DATA_FINAL':
      return {
        ...state,
        endDate: action.dataFinal
      };
    default:
      return state;
  }
};
