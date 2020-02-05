// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  
  // SORT_BY_DATE
  export const sortByDataNascimento = () => ({
    type: 'SORT_BY_DATA_NASCIMENTO'
  });
  
  
  // SET_START_DATE
  export const setDataInicial = (dataInicial) => ({
    type: 'SET_DATA_INICIAL',
    dataInicial
  });
  
  // SET_END_DATE
  export const setDataFinal = (dataFinal) => ({
    type: 'SET_DATA_FINAL',
    dataFinal
  });
  