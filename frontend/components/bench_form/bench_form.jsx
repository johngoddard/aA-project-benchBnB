import React from 'react';
import {withRouter} from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      description: '',
      num_seats: '',
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.handleChange = this.handleChange.bind(this);
  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createBench(this.state);
    this.props.router.push("/");
  }

  handleChange(property){
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  render(){
    return (
      <div className='bench-form-div'>
        <h2>Create a new bench!</h2>
        <form className='bench-form' onSubmit={this.handleSubmit}>
          <label> Bench Description:
            <textarea value={this.state.description}
                      onChange={this.handleChange('description')}>
            </textarea>
          </label>
          <label>Latitude:
            <input type="number"
                   value={this.state.lat}
                   onChange={this.handleChange('lat')}/>
          </label>
          <label>Longitude:
            <input type="number"
                   value={this.state.lng}
                   onChange={this.handleChange('lng')}/>
          </label>
          <label>Number of seats:
            <input type="number"
                   value={this.state.numSeats}
                   onChange={this.handleChange('num_seats')}/>
          </label>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BenchForm);
