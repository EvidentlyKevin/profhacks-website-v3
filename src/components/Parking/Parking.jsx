import React from "react";
import styles from "./Parking.module.css";
import { getImageUrl } from "../../utils";

export const Parking = () => {
  const imageUrl = getImageUrl("ParkingMap/CampusParking.png");

  return (
    <section className={styles.container} id="pictures">
      <h2 className={styles.title}>-Parking-</h2>
      <br />
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Campus Parking Map" className={styles.image} />
      </div>
    </section>
  );
};
