'use strict';
import React from 'react';
import { createStore } from "redux";

export default function Content(props) {
    // 変数を定義
    const ids = [];
    const names = [];
    const pvs = [];

    const reducer = () => {
        console.log("reducer has been called.");
    }

    const store = createStore(reducer, 1);

    store.subscribe(() => {
        console.log("store changed", store.getState());
        });

    store.dispatch({type: "INC"});

    // ループでテーブルに順に入れ込むためのコード
    for (  let i = 1;  i <= 10;  i++  ) {
        ids.push(i)
        names.push("name" + i)
        pvs.push(Math.floor( Math.random() * 1000 ))
    }

    // ボディのテーブルに入れ込むための変数用意
    console.log(pvs);
    const tbody =  ids.map((id,index)=>{
        return(
            <tr key={index}>
                <td>{id}</td><td>{ names[index] }</td><td>{pvs[index]}</td>
            </tr>
        );
    });

    return (
        <>
            <h1>
                Redux課題やってます・・・
            </h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col-2">id</th>
                        <th scope="col-4">name</th>
                        <th scope="col-6">pv</th>
                    </tr>
                </thead>
                <tbody>
                    { tbody }
                </tbody>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        id:
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <label>
                        name:
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form> */}
            </table>
        </>
    );
}