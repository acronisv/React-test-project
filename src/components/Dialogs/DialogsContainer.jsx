import Dialogs from './Dialogs'
import { sendMessageActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

// Было
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


//Стало с compose

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


