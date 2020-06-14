const forge = require("node-forge");
const EthCrypto = require("eth-crypto");
const enigma = require("enigma-js/lib/enigma-js.node");

function getClientKeys(seed = "") {
  if (seed === "") {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 9; i++) {
      seed += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  let random = forge.random.createInstance();

  random.seedFileSync = function (needed) {
    return forge.util.fillString(seed, needed);
  };
  const privateKey = forge.util.bytesToHex(random.getBytes(32));
  const publicKey = EthCrypto.publicKeyByPrivateKey(privateKey);

  return { privateKey, publicKey };
}

function encrypt(taskPubKey, privateKey, variable) {
  // Generate derived key from enclave public encryption key and user's private key
  const derivedKey = enigma.utils.getDerivedKey(taskPubKey, privateKey);
  // Encrypt function and ABI-encoded args
  return enigma.utils.encryptMessage(derivedKey, variable);
}

function decrypt(taskPubKey, privateKey, enc_variable) {
  // Generate derived key from enclave public encryption key and user's private key
  const derivedKey = enigma.utils.getDerivedKey(taskPubKey, privateKey);
  // Decrypt function and ABI-encoded args
  let outputHex = enigma.utils.decryptMessage(derivedKey, enc_variable);
  console.log({ outputHex });
  let outputStr = enigma.utils.hexToAscii(outputHex);
  return JSON.parse(outputStr);
}

export { getClientKeys, encrypt, decrypt };
