import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../App';

const mapStateToProps = state => {
    const  {test} = state;
    return {test}
}

const mapDispatchToProps = dispatch => {
    return {
        didMnt: (test) => dispatch(actions.didMnt(test)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
