import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/elements/Container";

function WellnessMagazine() {
  return (
    <section className={styles.wellnessMagazineSection}>
      <Container>
        <Image
          src="/magazine.jpg"
          alt="the Wellness magazine about the Mishin's coils"
          width={4032}
          height={2833}
          sizes="100vw"
        />
        <p className={styles.imgCaption}>
          <a
            href="https://www.facebook.com/WellnessLoveBeauty/"
            target="_blank"
            rel="noreferrer"
          >
            Журнал Wellness
          </a>{" "}
          о&nbsp;катушках Мишина
        </p>
      </Container>
    </section>
  );
}

export default WellnessMagazine;
