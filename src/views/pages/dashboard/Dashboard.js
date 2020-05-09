import React, { useState } from 'react';
import {
  Card, CardBody, Container, Row, Button,
} from "reactstrap";
import { connect } from "react-redux";
import { setAuth } from "redux/actions/auth/authAction";
import Questionnaire from "../questionnaire/Questionnaire"
import HeatMap from "../heatMap/heatMap";

import "./dashboard.scss";

const Dashboard = (props) => {
  const [comingSoon, setComingSoon] = useState(false);
  return (
    // <Container>
    //   <Row className="mx-auto h-100">
    //     <Card className="col-12 col-lg-5 mx-auto">
    //       <CardBody>
    //         <Questionnaire />
    //       </CardBody>
    //     </Card>
    //     <Card className="col-12 col-lg-5 mx-auto h-100" >
    //       <CardBody>
    //         <h2>Wearable Data</h2>
    //         <p>Connecting your Fitbit, Apple Watch, or other wearable device will allow us to show you more personalized insights.</p>
            // <p className={comingSoon ? '' : 'd-none'}>Coming soon!</p>
            // <Button className="text-white mx-auto font-weight-bold align-self-center mt-2" block={true} color="primary"
            //     onClick={() => setComingSoon(true)}>Connect to HumanAPI</Button>
    //       </CardBody>
    //     </Card>
    //   </Row>
    //   <Row className="mx-auto">
    //     <Card className="mx-auto col-12 col-lg-11">
    //       <HeatMap/>
    //     </Card>
    //   </Row>
    // </Container>
    <div className="custom-dashboard">
        <Card className="survey-card">
          <CardBody>
            <Questionnaire />
          </CardBody>
        </Card>
      <div className="widgets">
        <div className="wearable-data-container">
          <Card className="wearable-data">
            <CardBody>
              <h2>Wearable Data</h2>
              <p>Connecting your Fitbit, Apple Watch, or other wearable device will allow us to show you more personalized insights.</p>
              <h5 style={ !comingSoon ? { display:"none" } : null}><i>Coming soon!</i></h5>
              <div className="button-container">
                <Button 
                  color="primary"
                  onClick={() => setComingSoon(true)}
                >
                  Connect to HumanAPI
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card>
          <CardBody>
            <HeatMap/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
export default Dashboard;