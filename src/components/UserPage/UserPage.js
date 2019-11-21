import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import logo from '../../images/sporeGarden.jpg';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount = () => {
   this.getMapLocation()
  }

  getMapLocation = () =>{
    let action = {
      type: 'FETCH_MAP_LOCATION'
    };
    this.props.dispatch(action)
  }
  render() {
    return (

      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
    </h1>
        <div>
          <div>
            <img src={logo} />
          </div>
          <div>
            <Paper>
              <p>
                adventure box
        </p>
            </Paper>
          </div>
          <div>
            <Button>North</Button>
            <Button>South</Button>
            <Button>East</Button>
            <Button>West</Button>
            <Button>Dialogue</Button>
          </div>
        </div>
        <LogOutButton className="log-in" />
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
