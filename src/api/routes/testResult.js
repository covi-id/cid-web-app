export default function testResults(instance) {
  return {
    /**
       * @param {
          {
            key: string,
            resultStatus: boolean
          }}
      * @param {*} config 
      */
    addTestResult(body = {}, config = {}) {
      return instance.post(`/test_results`, body, config);
    },
  };
}
