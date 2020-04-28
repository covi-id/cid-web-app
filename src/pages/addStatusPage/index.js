import React, { useState } from "react";

import AddStatus from "containers/addStatus";
import { Container } from "./styles.js";
import ConsentAuth from "components/consentAuth/index.js";

const AddStatusPage = () => {
  const [testData, setTestData] = useState({});
  return (
    <Container>
      <ConsentAuth cancel={() => setTestData(null)} testData={testData}>
        <AddStatus twoStepCallback={data => setTestData(data)} />
      </ConsentAuth>
    </Container>
  );
};

export default AddStatusPage;
