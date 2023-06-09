import React from "react";
import IntroImage from "@/components/modules/home-page/IntroImage";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Factoid from "@/components/elements/Factoid";
import colors from "@/styles/colors.module.scss";
import KitsPromoButton from "@/components/elements/home-page/KitsPromoButton";

function Intro() {
  return (
    <section className={styles.intro}>
      <IntroImage />
      <Container>
        <h1 className={styles.heading}>
          Катушка Мишина&nbsp;— ваш домашний доктор
        </h1>
        <p className={styles.subheading}>
          Прибор для лечения большинства заболеваний в&nbsp;домашних условиях
        </p>
        <div className={styles.mainContentWrapper}>
          <div className={styles.textBlock}>
            <p>
              Катушка Мишина помогает избавиться от&nbsp;гипертонии, болезней
              почек, аритмии, ВСД, ангины и&nbsp;других заболеваний.
            </p>
            <p>
              У технологии есть 6 преимуществ: нет побочных эффектов; лечит
              большинство заболеваний; достаточно одного прибора на&nbsp;всю
              жизнь; лечит в&nbsp;домашних условиях; компактный, поэтому можно
              взять в&nbsp;путешествие; легко пользоваться.
            </p>
            <p>
              Мы расскажем о&nbsp;том, как работает катушка Мишина,
              не&nbsp;залезая глубоко в&nbsp;физику процессов. Если хорошо
              разбираетесь в&nbsp;физике, посмотрите{" "}
              <a
                href="https://youtu.be/WYBLpHd0y0Y"
                target="_blank"
                rel="noreferrer"
              >
                7-часовой вебинар по&nbsp;вихревой медицине
              </a>
              <span style={{ color: colors.blue }}>.</span>
            </p>
          </div>
          <Factoid text="150 лет технологии" className={styles.factoid} />
        </div>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default Intro;
