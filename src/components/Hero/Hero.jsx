import React from "react";
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [test] = useTypewriter({
        words: ['GAMES!', 'FUN!', 'CODING!', 'PRIZES!'],
        loop: 0,
        typeSpeed: 160,
        deleteSpeed: 80
    });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Rowan IEEE's 
        <br></br>Annual Hackathon <br></br>full of 
        <span> <u>{test}</u></span>
        
        <Cursor />
        
        </h1>
        <br></br>
        <p className={styles.description}>
        <u>Date:</u> March 29-30, 2025
        <br></br>
        <u>Location:</u> 401 North Campus Drive (ENGR Building)
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdxZ_OQAaXzoo__Ij3DHmA7Ozn1IuDPNuXzds7Cg0acnNmdjA/viewform?usp=sf_link' target="_blank" className={styles.contactBtn}>
          Register here!
        </a>
      </div>
      <img
        src={getImageUrl("hero/phacks25_logo.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};