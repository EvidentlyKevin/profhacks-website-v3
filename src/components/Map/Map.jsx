import React from 'react';
import styles from "./Map.module.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const Maps = () => {
    const slideImages = [
        "/maps/Virtual_Map_1.png",
        "/maps/Virtual_Map_2v2.png",
        "/maps/Virtual_Map_3v3.png",
    ];

    return (
        <section className={styles.container} id="pictures">
            <h2 className={styles.title}>- Rowan Engineering Building Maps -</h2>
            <div className={styles.slideContainer}>
                <Slide>
                    <div className={styles.fade}>
                        <img src={slideImages[0]} alt="Map 1" />
                    </div>
                    <div className={styles.fade}>
                        <img src={slideImages[1]} alt="Map 2" />
                    </div>
                    <div className={styles.fade}>
                        <img src={slideImages[2]} alt="Map 3" />
                    </div>
                </Slide>
            </div>
        </section>
    );
};
