import React from 'react';
import styles from "../styles/comps/footer.modul.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.gridLeft}>
                    <div className={styles.logo}>
                        TULOS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;