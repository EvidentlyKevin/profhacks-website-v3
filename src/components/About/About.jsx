import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>-About-</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/island-clipart-md.png")}
          alt="island"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>What is ProfHacks?</h3>
              <p>
              ProfHacks is the largest annual event held by the Rowan IEEE Student Branch! 
              It is a 24-hour Hackathon where you can create innovative hardware and software solutions to solve real world problems. 
              For 2024, the theme is <b>"Island Hack"</b>, so be prepared for different island-based events and activites. 
              Go solo or with a team and follow the theme, or just build whatever your heart desires! There are a variety of different activities you can do including:
              <br></br><br></br>
              <ul className={styles.activities}>
                    <li>3D Printing</li>
                    <li>Programming</li>
                    <li>Playing Games</li>
                    <li>Attending Workshops</li>
                    <li>Getting Free Merch</li>
                    <li>Winning Prizes</li>
                    <li>HAVING FUN!!!</li>
                </ul>
                <br></br>
              Last year was ProfHacks 2023, which was the 8th iteration of our annual hackathon. 
              The theme of the hackathon was "Haunted Hack", which had a series of spooky events and activities involved with it. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};