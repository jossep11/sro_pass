import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Image style={{ objectFit: "cover", objectPosition: "center" }} src="/digital-art2.jpg" alt="Sro" fill={true} />
      <div className={styles.bgImage}>
        <div className={styles.containerboxes}>
          <div className={styles.boxData}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
