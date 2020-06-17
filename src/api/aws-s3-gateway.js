import { urltoFile } from "utils/urlToFile";

const aws = require("aws-sdk");

const s3AccessKeyId = "AKIAVA42VALQLKPHWWZL"; // TODO: Please insert
const s3SecretAccessKey = "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"; // TODO: Please insert
const s3BucketName = "coviid-enclave-assets-dev"; // TODO: Please insert
const s3Region = "eu-west-2"; // TODO: Please insert
const s3 = new aws.S3({
  accessKeyId: s3AccessKeyId,
  secretAccessKey: s3SecretAccessKey,
  region: s3Region,
});

/**
 * @param {string} walletId
 * @param {string} base64Image
 * @returns fileName
 */
async function saveImageOnBucket(walletId, base64Image) {
  const fileName = `${walletId}.png`;

  // write file to temp directory for streaming
  const file = await urltoFile(base64Image, `${walletId}.png`, "image/png");

  const params = {
    Bucket: s3BucketName,
    Key: fileName,
    Body: file,
    ContentType: "application/octet-stream",
  };

  try {
    await s3.upload(params).promise();
    return { fileName };
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  saveImageOnBucket,
};
