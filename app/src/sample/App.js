import React, { Component } from 'react';

import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Content from './components/Content';
import List from './components/List';


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() { // 追加
        const id = "nuber99"
        const name = "テスト太郎"
        this.props.didMnt(id,name);
        console.log(this.props)
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
        // const formItem = this.props
        const id = this.props.id;
        const name = this.props.name;

        // formEvent
		// const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeId, onChangeName, onSaveItem })
        console.log('App.render:', this.props);

        //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
        const checkName = this.props.name.length >=3;

        return (
            <>
                <Aside />
                <Header />
                    sample site
                {/* <div className="row">
                    <div className="col-5">
                        <p>test</p>
                    </div>
                </div> */}
                <Top />
                <div id="register">
                    <List
                    // id={props.id}
                    // name={props.name}
                    // onSaveItem={this.onSaveItem()}
                    />
                    <Content
                        id={id}
                        name={name}
                        // {...contentHandler(this)}
                        onChangeId={this.onChangeId}
                        onChangeName={this.onChangeName}
                        onSaveItem={this.onSaveItem}
                        checkName={checkName}
                        onAddReg={(id,name)=>this.addReg(id,name)}
                    />
                </div>
                <Footer />
            </>
        );
    }
}
export default App;
