import { urltoFile } from "utils/urlToFile";
import { ENV } from "utils/environment";

const aws = require("aws-sdk");

const s3AccessKeyId = ENV.S3_ACCESS_ID;
const s3SecretAccessKey = ENV.S3_SECRET_ACCESS_KEY;
const s3BucketName = ENV.S3_BUCKET_NAME;
const s3Region = ENV.S3_REGION;
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
