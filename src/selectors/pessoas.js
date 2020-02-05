import moment from 'moment';


export default (pessoas, { text, sortBy, startDate, endDate }) => {
  return pessoas.filter((pessoa) => {
    // const createdAtMoment = moment(expense.createdAt);
    // const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = pessoa.nome.toLowerCase().includes(text.toLowerCase());

   // return startDateMatch && endDateMatch && textMatch;
   return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'dataNascimento') {
      return a.dataNascimento < b.dataNascimento ? 1 : -1;
    }
  });
};
