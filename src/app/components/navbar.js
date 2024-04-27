import Image from "next/image";
import styles from "../styles/comps/navbar.module.css";

const Navbar = () => {
    return <div className={styles.navbar}>
        <div className={styles.content}>
            <ul className={styles.frontTabs}>
                <li>Men</li>
                <li>Women</li>
                <li>Jewellery</li>
            </ul>
            <div className={styles.logoTitle}>
                TULOS
            </div>
            <Image width={100} height={100} src="/assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        </div>
    </div>;
};
export default Navbar;

