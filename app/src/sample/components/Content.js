'use strict';
import React,{ useState } from 'react';
// import List from './components/List';
import { createStore } from "redux";
// import styled from 'styled-components';

// const FormContainer = styled.form`
//     color: #757575;
//     font-size: 14px;
//     font-weight: bold;
//     border-radius: 3px;
//     border: 1px solid #efefef;
// `
export default function Content(props) {
    console.log(props)
    return (
        <>
            <p>content</p>
            <Form
                id={props.id}
                name={props.name}
                onChangeId={props.onChangeId}
                onChangeName={props.onChangeName}
                // onAddReg={props.onAddReg()}
            />
            <button type="button"
                className="btn btn-outline-success"
                onClick={(e) => {props.onSaveItem();console.log(e)}}
                disabled = {!props.checkName}
                >
                SAVE
            </button>
        </>
    );
}

function Form(props) {
    return (
        <form>
            <div className="form-group">
                <label className="pt-2">ID</label>
                <input id="id"
                    type="text"
                    className="form-control"
                    value={props.id}
                    onChange={props.onChangeId}
                />
                <label className="pt-2">Name</label>
                <input id="name"
                    type="text"
                    className="form-control"
                    value={props.name}
                    onChange={props.onChangeName}
                />
            </div>
        </form>
    )
}