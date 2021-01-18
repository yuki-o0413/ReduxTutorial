import React, { Component } from 'react';

import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Content from './components/Content';


class App extends Component {
    constructor(props) {
        super(props);
    }

    // formId
    onChangeId = (e) => {
        console.log(e.target.value)
        this.props.updateFormId(e.target.value);
    }
    // forName
    onChangeName = (e) => {
        console.log(e.target.value)
        this.props.updateFormName(e.target.value);
    }
    // clickSaveButton
    onSaveItem = () => {
        console.log(this.props)
        console.log("SAVE_ID: ",this.props.id);
        console.log("SAVE_NAME: ",this.props.name);
    }

    render() {
        const formItem = this.props
        // formEvent
		const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeId, onChangeName, onSaveItem })
        console.log('App.render:', this.props);

        //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
        const checkName = this.props.name.length >=3;

        return (
            <div className="content">
                <Aside />
                <Header />
                    sample site
                {/* <div className="row">

                    <div className="col-5">
                        <p>test</p>
                    </div>
                </div> */}
                <Top />
                <br />
                <br />
                <br />
                <div className="container">
                    <Content formItem={formItem} {...contentHandler(this)}
                    checkName={checkName} />
                </div>
                <br />
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}
export default App;
