import React from 'react'
import styles from "./Schedule.module.css";
import { getImageUrl } from "../../utils";
import Table from 'react-bootstrap/Table';

export const Schedule = () => {
  return (
    <section className={styles.container} id="schedule">
      <h2 className={styles.title}>-Schedule-</h2>

        <div className={styles.aboutItem}>
          <h3>Saturday</h3>
          <Table striped bordered variant='info'>
          <thead>
            <tr>
              <th><u>Time</u></th>
              <th><u>Event</u></th>
              <th><u>Location</u></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:30 AM</td>
              <td>Doors Open</td>
              <td>ENGR Building</td>
            </tr>
            <tr>
              <td>10:00 AM</td>
              <td>Opening Ceremony</td>
              <td>ENGR 321</td>
            </tr>
            <tr>
              <td>10:45 AM</td>
              <td>Hacking Begins & Team Building Workshop</td>
              <td>ENGR Building</td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td>Game Theory Workshop w/ C++</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>12:00 PM</td>
              <td>Project Presentation & Public Speaking Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>1:15 PM</td>
              <td>Lunch Is Served</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>2:00 PM</td>
              <td>MATLAB Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>4:00 PM</td>
              <td>Arduino Workshop</td>
              <td>ENGR 107</td>
            </tr>
            <tr>
              <td>6:00 PM</td>
              <td>Dinner Time</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>7:00 PM</td>
              <td>Cup Stacking (Presented by  Rowan's Robotics and Automation Society!)</td>
              <td>ENGR Atrium</td>
            </tr>
            <tr>
              <td>8:30 PM</td>
              <td>Planetarium Show</td>
              <td>Science Hall</td>
            </tr>
            <tr>
              <td>11:30 PM</td>
              <td>Gaming (Mario Kart, Smash Brothers, and more!)</td>
              <td>ENGR Atrium</td>
            </tr>
          
          </tbody>
        </Table>
        </div>


        <div className={styles.aboutItem}>
        <h3>Sunday</h3>
        <Table striped bordered variant='info'>
        <thead>
          <tr>
            <th><u>Time</u></th>
            <th><u>Event</u></th>
            <th><u>Location</u></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 AM</td>
            <td>Breakfast</td>
            <td>ENGR Atrium</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>Git Workshop</td>
            <td>ENGR 107</td>
          </tr>
          <tr>
            <td>10:45 AM</td>
            <td>Hacking Concludes</td>
            <td>ENGR Building</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>Judging Begins</td>
            <td>ENGR Building</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Lunch</td>
            <td>ENGR Atrium</td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td>Closing Ceremony</td>
            <td>ENGR 321</td>
          </tr>
        </tbody>
      </Table>
      </div>

    </section>
  )
}
