import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";
import KitsPromoButton from "@/components/elements/home-page/KitsPromoButton";

function EasyToUse() {
  return (
    <section className={styles.easyToUseSection}>
      <Container>
        <h2 className={styles.heading}>Легко пользоваться</h2>
        <div className={styles.instructionStepsWrapper}>
          <div className={styles.stepOne}>
            <Image
              src="/plug-into.jpg"
              alt="plug in the sinus generator"
              width={681}
              height={681}
              sizes="100vw,
                     (min-width: 700px) 50vw,
                     (min-width: 1200px) 417px"
              quality={100}
            />
            <p className={styles.imgCaption}>
              1. Включить генератор синуса в&nbsp;розетку.
            </p>
          </div>
          <div className={styles.stepTwo}>
            <Image
              src="/connect-devices.jpg"
              alt="connect the coil to the sinus generator"
              width={672}
              height={672}
              sizes="100vw,
                     (min-width: 700px) 50vw,
                     (min-width: 1200px) 417px"
              quality={100}
            />
            <p className={styles.imgCaption}>
              2. Подключить катушку к&nbsp;генератору синуса.
            </p>
          </div>
          <div className={styles.stepThree}>
            <Image
              className={styles.putOnProblemAreaSmallImg}
              src="/put-on-problem-area-small.jpg"
              alt="put the coil on the problem area"
              width={720}
              height={720}
              sizes="100vw,
                     (min-width: 1200px) 417px"
              quality={100}
            />
            <Image
              className={styles.putOnProblemAreaBigImg}
              src="/put-on-problem-area-big.jpg"
              alt="put the coil on the problem area"
              width={1280}
              height={720}
              sizes="100vw"
              quality={100}
            />
            <p className={styles.imgCaption}>
              3. Положить катушку на&nbsp;проблемое место.
            </p>
          </div>
        </div>
        <div className={styles.coilTreatmentDetailsBlock}>
          <p className={styles.coilTreatmentDetailsLinkParagraph}>
            <Link href="/treatment">
              Подробно о&nbsp;лечении катушками Мишина
            </Link>
          </p>
          <p>Виды катушек • когда использовать • как лечить ваше заболевание</p>
        </div>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default EasyToUse;
