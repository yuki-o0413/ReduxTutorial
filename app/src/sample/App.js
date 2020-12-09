import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Content from './components/Content';


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (async () => {
            const test = "test"

            this.props.didMnt(test);
        })();
    }

    render() {
        console.log('App.render:', this.props);

        const data1 = "AAAA";
        const data2 = "data2";


        const topData = ({data1}) => ({data1})


        const contentData = ({data2}) => ({data2})
        const ja = "*****Japan!";
        return (
            <div className="content">
                <Header />
                    sample site
                <div className="row">
                    <div className="col-3">
                        <h1>{ja}</h1>
                    </div>
                    <div className="col-5">
                        <p>test</p>
                    </div>
                </div>
                <Top data1={data1} />
                <br />
                <br />
                <br />
                <div className="container">
                    <Content {...contentData(this.props)} />
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}
export default App;
