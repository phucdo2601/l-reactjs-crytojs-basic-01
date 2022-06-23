import React from 'react';
import logo from './logo.svg';
import './App.css';

var CryptoJS = require('crypto-js');

interface dataObj {
  id: number;
  name?: string | any;
}

function App() {

  var data: Array<dataObj> = [{ id: 1, name: 'PhucDn' }, { id: 2, name: 'LanTran' }]

  /**
   * ma hoa va giai ma dua tren cai key my-secret-key@123, CHUOI NAY PHAI DC BAO MAT KHONG DE LO
   */

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
  //log encrypted data
  console.log('Encrypt Data -')
  console.log(ciphertext);

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  //log decrypted Data
  console.log('decrypted Data -')
  console.log(decryptedData);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>Case data:</div>
          <div>
            {
              data.map((d) => (
                <>
                  <div>{d.id}</div>
                  <div>{d.name}</div>
                </>
              ))
            }
          </div>
          <div>--------------------------------------------------------------------------------------</div>
          <div>Encrypt Data -{ciphertext}</div>
          <div>-------------------------------------------------------------------------------------</div>
          <div>Decrypt Data: </div>
          <div>
            {decryptedData.map((obj: dataObj) => (
              <>
                <div>{obj.id}</div>
                <div>{obj.name}</div>
              </>
            ))}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
