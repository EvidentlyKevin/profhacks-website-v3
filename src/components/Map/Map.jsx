import React from 'react'
import styles from "./Map.module.css";
import { getImageUrl } from "../../utils";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const Maps = () => {
    const slideImages = [
        getImageUrl("maps/Virtual_Map_1.png"),
        getImageUrl("maps/Virtual_Map_2v2.png"),
        getImageUrl("maps/Virtual_Map_3v3.png"),
        
    ];

    return (
        <section className={styles.container} id="pictures">
            <h2 className={styles.title}>-Rowan Engineering Building Maps-</h2>
            <br></br>
            <div className={styles.slideContainer}>
               
                <Slide>
                    <div className={styles.fade}>
                        <img src={slideImages[0]} />
                    </div>
                    <div className={styles.fade}>
                        <img src={slideImages[1]} />
                    </div>
                    <div className={styles.fade}>
                        <img src={slideImages[2]} />
                    </div>
                   
                </Slide>
            </div>
        </section>
    )
}
