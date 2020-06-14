/**
 * @typedef {{
 *  jsonrpc: string,
 *  id: number,
 *  method: string,
 *  params: body
 * }} JsonRpc
 */

export default function (methodName, body) {
  return {
    jsonrpc: "2.0",
    id: new Date().getTime(),
    method: methodName,
    params: body,
  };
}
