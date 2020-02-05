import React from 'react';
//Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class PessoaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: props.pessoa ? props.pessoa.nome : '',
      // note: props.expense ? props.expense.note : '',
      // amount: props.expense ? (props.expense.amount / 100).toString() : '',
      // createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      // calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const nome = e.target.value;
    this.setState(() => ({ nome }));
  };
  // onNoteChange = (e) => {
  //   const note = e.target.value;
  //   this.setState(() => ({ note }));
  // };
  // onAmountChange = (e) => {
  //   const amount = e.target.value;

  //   if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
  //     this.setState(() => ({ amount }));
  //   }
  // };
  // onDateChange = (createdAt) => {
  //   if (createdAt) {
  //     this.setState(() => ({ createdAt }));
  //   }
  // };
  // onFocusChange = ({ focused }) => {
  //   this.setState(() => ({ calendarFocused: focused }));
  // };
  // onSubmit = (e) => {
  //   e.preventDefault();

  //   if (!this.state.nome) {
  //     this.setState(() => ({ error: 'O nome é obrigatório.' }));
  //   } else {
  //     this.setState(() => ({ error: '' }));
  //     this.props.onSubmit({
  //       nome: this.state.nome
  //       // amount: parseFloat(this.state.amount, 10) * 100,
  //       // createdAt: this.state.createdAt.valueOf(),
  //       // note: this.state.note
  //     });
  //   }
  // };
  render() {
    return (
      <React.Fragment>
       <Typography variant="h6" gutterBottom>
        Cadastrar Pessoa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="nome" label="Nome" fullWidth />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField required id="CPF" label="CPF" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="dataNascimeno" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
    )
  }
}

