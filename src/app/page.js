import Image from "next/image";
import styles from "./styles/page/homePage.module.css";
import heroImage from "../../public/assets/imgs/photo-1570733117311-d990c3816c47.jpeg";
import weddingCoverImage from "../../public/assets/imgs/wedding-collection.jpg";


export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className={styles.content}>
        <div className={styles.heroCotainer}>
          <Image src={heroImage} alt="" />
          <div className={styles.heroContent}>
            <h1>Buy Gaala Collection of <br /> The Summer</h1>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.collectionContent}>
            <h2 className={styles.collectionTitle}>
              New Collection
            </h2>
            <br />
            <p className={styles.collectionDesc}>
              Our latest collection, where classic and contemporary styles cornverge in perfect harmony.
            </p>
          </div>
          <div className={styles.collectionGrid}>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/hamed-darzi-Psz62UPYx1E-unsplash.jpg" alt="" quality={100} />
              </div>
              <div className={styles.productContent}>
                <h1>Cloths title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/ryan-hoffman-czLSitCJ3Dw-unsplash.jpg" alt="" />
              </div>
              <div className={styles.productContent}>
                <h1>Cloths title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/matthew-moloney-ytQeX4iQ7Uk-unsplash.jpg" alt="" />
              </div>
              <div className={styles.productContent}>
                <h1>Cloths title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/sama-hosseini-GtOo17K-vTg-unsplash.jpg" alt="" />
              </div>
              <div className={styles.productContent}>
                <h1>Jewellery title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/alireza-zarafshani-7CnWk58BsFk-unsplash.jpg" alt="" />
              </div>
              <div className={styles.productContent}>
                <h1>Jewellery title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
            <div className={styles.collectionItem}>
              <div className={styles.productContainer}>
                <Image width={100} height={100} src="/assets/imgs/sama-hosseini-GtOo17K-vTg-unsplash.jpg" alt="" />
              </div>
              <div className={styles.productContent}>
                <h1>Jewellery title</h1>
                <p>Cloth one linear</p>
                <h2>₹ 150</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.womenCollections}>
          <Image width={100} height={100} src={weddingCoverImage} alt="" quality={100} />
          <div className={styles.womenCollectionContent}>
            <h1>
              Wear to wedding
            </h1>
            <p>
              A symphony of exquisite designs toilered for your unforgettable moments.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.grid}>
            <div className={styles.categoryCard}>
              <Image width={100} height={100} src="/assets/imgs/zahir-namane-TjUJJACTav4-unsplash.jpg" alt="" />
              <div className={styles.cardContent}>
                <h1>Man</h1>
                <button>See Details</button>
              </div>
            </div>
            <div className={styles.categoryCard}>
              <Image width={100} height={100} src="/assets/imgs/lethicia-matos-BxBW-OyjaiA-unsplash.jpg" alt="" quality="100" />
              <div className={styles.cardContent}>
                <h1>Woman</h1>
                <button>See Details</button>
              </div>
            </div>
            <div className={styles.categoryCard}>
              <Image width={100} height={100} src="/assets/imgs/arteum-ro-GKbfUFna-9I-unsplash.jpg" alt="" />
              <div className={styles.cardContent}>
                <h1>Jewellery</h1>
                <button>See Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
