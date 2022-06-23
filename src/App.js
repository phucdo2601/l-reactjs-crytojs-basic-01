import logo from "./logo.svg";
import "./App.css";

var CryptoJS = require("crypto-js");

function App() {
  let data = [
    {
      id: 1,
      name: "Phuc",
    },
    {
      id: 2,
      name: "Loan",
    },
  ];

  /**
   * Encrypt
   */
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "my-secret-key@123"
  ).toString();
  //log encrypted data
  console.log("Encrypt Data -");
  console.log(ciphertext);

  /**
   * Decrypt
   */

  var byte = CryptoJS.AES.decrypt(ciphertext, "my-secret-key@123");
  var decryptedData = JSON.parse(byte.toString(CryptoJS.enc.Utf8));

  //log decrypted Data
  console.log("decrypted Data -");
  console.log(decryptedData);

  return (
    <div className="App">
      <header className="App-header">
        <>
          <div>Encrypt data - {ciphertext}</div>
          <div>
            {decryptedData.map((obj) => (
              <>
                <div className="">{obj.id}</div>
                <div className="">{obj.name}</div>
              </>
            ))}
          </div>
        </>
      </header>
    </div>
  );
}

export default App;
