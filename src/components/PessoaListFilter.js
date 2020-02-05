import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDataNascimento, setDataInicial, setDataFinal } from '../actions/filters';
import { setDataInicial, setDataFinal } from '../actions/filters';

class PessoaListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setDataInicial(startDate));
    this.props.dispatch(setDataFinal(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'dataNascimento') {
              this.props.dispatch(sortByDataNascimento());
            }
          }}
        >
          <option value="dataNascimento">Date</option>
          <option value="nome">Nome</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.dataInicial}
          endDate={this.props.filters.dataFinal}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
