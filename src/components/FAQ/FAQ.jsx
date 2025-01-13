import React from 'react'
import styles from "./FAQ.module.css";
import Accordion from 'react-bootstrap/Accordion';


export const FAQ = () => {
  return (
    <section className={styles.container} id="FAQ">
        <h2 className={styles.title}>-FAQ-</h2>
    <br></br>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is a hackathon?</Accordion.Header>
        <Accordion.Body>
        A hackathon is an event, where people come together to collaborate in order to solve a problem or identify new opportunities using whatever technologies they would like.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can attend?</Accordion.Header>
        <Accordion.Body>
        Anyone from high school, undergraduate, and graduate students can attend ProfHacks!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I attend even if I'm not 18 years old?</Accordion.Header>
        <Accordion.Body>
        Any participants that are younger than 18 must have written or verbal confirmation from a parent or guardian when checking in.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is there any cost to attend?</Accordion.Header>
        <Accordion.Body>
        ProfHacks is free to attend for everyone! This includes merch, food, and more!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>I don't know how to program, can I still attend?</Accordion.Header>
        <Accordion.Body>
        Absolutely! Even if you don't know how to code, there are plenty of other games and activities that you can participate in. Additioanally, we host workshops to help you learn how to code and our volunteers are more than happy to help you get started!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do I need to be in a team</Accordion.Header>
        <Accordion.Body>
        You can work alone or in a team of up to 4 people. If you don't have a team, there will be a team fomation activity at the start of the hackathon.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Are there ways to volunteer?</Accordion.Header>
        <Accordion.Body>
        Anyone looking to volunteer for setup, mid-event, or clean up can fill out <a href='https://forms.gle/W1fiMDmWfBZ3ndw46' target="_blank">this form</a> to earn some service hours!
        <br></br><br></br>
        PLEASE NOTE: Volunteering will forfeit your rights to submit a project for judging.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Any other questions?</Accordion.Header>
        <Accordion.Body>
        Contact us at <a href="mailto:profhacks@rowan.edu">profhacks@rowan.edu</a> for any additional questions, concerns, or feedback.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
    
  )
}
