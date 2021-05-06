import { connect } from 'react-redux';
import { creatNewUser } from '../../actions/session';
import Signup from './signup';


const mapDispatchToProps = dispatch => ({
    creatNewUser: formUserData => dispatch(creatNewUser(formUserData)),
});

export default connect(null, mapDispatchToProps)(Signup);