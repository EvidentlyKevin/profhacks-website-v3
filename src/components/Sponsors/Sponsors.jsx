import React from 'react'
import styles from "./Sponsors.module.css";
import { getImageUrl } from "../../utils";

export const Sponsors = () => {
  return (
    <section className={styles.container} id="sponsors">
      <h2 className={styles.title}>-Sponsors-</h2>
      <h3>Thank you to all of our sponsors that helped out with the event!</h3>
      <a href="https://engineering.rowan.edu/programs/electricalcomputer/" target="_blank">
        <img
          src={getImageUrl("sponsors/ece.png")}
          alt="island"
          className={styles.aboutImage}
        /></a>
      <a href="https://philadelphia.ieee.org/" target="_blank">
        <img
          src={getImageUrl("sponsors/philly.png")}
          alt="island"
          className={styles.aboutImage}
        /></a>
      <a href="https://www.redbull.com/us-en/" target="_blank">
        <img
          src={getImageUrl("sponsors/redbull.png")}
          alt="island"
          className={styles.aboutImage}
        /></a>
      <a href="https://www.sprint.dev/" target="_blank">
        <img
          src={getImageUrl("sponsors/sprintlogo.png")}
          alt="island"
          className={styles.aboutImage}
        /></a>
    </section>
  )
}
