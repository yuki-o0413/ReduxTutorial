'use strict';
import React,{ useState } from 'react';

export default function List(props) {
  // 変数を定義
  const ids = [];
  const names = [];
  const pvs = [];
  // ループでテーブルに順に入れ込むためのコード
  for (  let i = 1;  i <= 5;  i++  ) {
    ids.push(i)
    names.push("name" + i)
    pvs.push(Math.floor( Math.random() * 1000 ))
  }
  // ボディのテーブルに入れ込むための変数用意
  console.log(pvs);
  const tbody =  ids.map((id,index)=>{
    return(
      // このkeyが味噌！
      //https://ja.reactjs.org/docs/lists-and-keys.html
      <tr key={index}>
        <td>{id}</td><td>{ names[index] }</td><td>{pvs[index]}</td>
      </tr>
    );
  });
  return (
    <>
      {/* ブートストラップを使用している（これがあることでCSS使わなくてもグラフのラインがひかる）*/}
      <p>list</p>
      <table className="table table-striped">
        <thead>
          <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">PV</th>
          </tr>
        </thead>
        <tbody>
          { tbody }
        </tbody>
      </table>
      </>
  );
}