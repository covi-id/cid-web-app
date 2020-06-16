import api from "api";

async function getNewTaskPubKey(publicKey) {
  const { result } = await api.encryption.getNewEncryptionKey({
    userPubKey: publicKey,
  });
  return result.result;
}

export default getNewTaskPubKey;
