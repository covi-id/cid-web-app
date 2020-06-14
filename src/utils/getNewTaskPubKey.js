import { getClientKeys } from "./cryptography";
import api from "api";

async function getNewTaskPubKey() {
  const { publicKey } = getClientKeys();
  const { result } = await api.encryption.getNewEncryptionKey({
    userPubKey: publicKey,
  });
  return result.result;
}

export default getNewTaskPubKey;
