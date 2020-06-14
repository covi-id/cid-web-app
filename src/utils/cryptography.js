const forge = require("node-forge");
const EthCrypto = require("eth-crypto");
const enigma = require("enigma-js/lib/enigma-js");

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

function randomBytes(length) {
  const crypto = typeof window.crypto !== undefined ? window.crypto : null;
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Promise.resolve(arr.buffer);
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
async function randomNumber(min, max) {
  let rval = 0
  const range = max - min + 1
  const bitsNeeded = Math.ceil(Math.log2(range))
  if (bitsNeeded > 53) {
      throw new Error('Exceeded max bit size of 53')
  }

  const bytesNeeded = Math.ceil(bitsNeeded / 8)
  const mask = Math.pow(2, bitsNeeded) - 1
  // 7776 -> (2^13 = 8192) -1 == 8191 or 0x00001111 11111111

  // Fill a byte array with N random numbers
  const byteArray = new Uint8Array(await randomBytes(bytesNeeded))

  const p = (bytesNeeded - 1) * 8
  for (let i = 0; i < bytesNeeded; i++) {
      rval += byteArray[i] * Math.pow(2, p)
  }

  // Use & to apply the mask and reduce the number of recursive lookups
  // tslint:disable-next-line
  rval = rval & mask

  if (rval >= range) {
      // Integer out of acceptable range
      return randomNumber(min, max)
  }

  // Return an integer that falls within the range
  return min + rval
}

export { getClientKeys, encrypt, decrypt, randomNumber };
