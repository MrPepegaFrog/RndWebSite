import { Link } from 'react-router-dom';

import { Logo } from '@/shared/assets/icons/Logo';
import { TelegramLogo } from '@/shared/assets/icons/Telegram';
import { VKLogo } from '@/shared/assets/icons/VK';
import { TELEGRAMM_PATH, VK_PATH } from '@/shared/config/routes/paths';
import { routePath } from '@/shared/config/routes/routeConfig';
import { Container } from '@/shared/ui/container';
import Heading, { HeadingTagsEnum } from '@/shared/ui/heading/heading';
import Text from '@/shared/ui/typography';

import styles from './phoneFooter.module.scss';

export const PhoneFooter = () => {
  return (
    <footer className={styles.mobileFooter}>
      <Container isTagWillSelect={false} className={styles.container}>
        <nav>
          <Logo className={styles.logo} />

          <Link to={routePath.main} className={styles.titleNav}>
            Главная
          </Link>

          <Link to={routePath.about} className={styles.titleNav}>
            О&nbsp;КОМПАНИИ
          </Link>

          <Link to={routePath.case} className={styles.titleNav}>
            КЕЙСЫ
          </Link>

          <Link to={routePath.career} className={styles.titleNav}>
            КАРЬЕРА
          </Link>

          <Link to={routePath.press_center} className={styles.titleNav}>
            Пресс&nbsp;-&nbsp;центр
          </Link>

          <Link to={routePath.contacts} className={styles.titleNav}>
            Контакты
          </Link>
        </nav>

        <nav>
          <div className={styles.tel}>
            <div>
              <Link to='tel:+73519330151'>
                <Heading variant={HeadingTagsEnum.H3} className={styles.titleNav}>
                  +7 (3519) 33-01-51
                </Heading>
              </Link>
            </div>

            <Link to='mailto:mail@rnd-mgn.ru'>
              <Text className={styles.mail}>mail@rnd-mgn.ru</Text>
            </Link>
          </div>

          <div className={styles.society}>
            <Link target='_blank' to={VK_PATH}>
              <VKLogo />
            </Link>

            <Link target='_blank' to={TELEGRAMM_PATH}>
              <TelegramLogo />
            </Link>
          </div>

          <div className={styles.contacts}>
            <Heading variant={HeadingTagsEnum.H3} className={styles.titleNav}>
              ОФИС
            </Heading>

            <div className={styles.contantText}>
              <Text>г. Магнитогорск,</Text>
              <Text>ул. Ленинградская 79 корп. 14</Text>
            </div>
          </div>

          <div className={styles.contacts}>
            <Heading variant={HeadingTagsEnum.H3} className={styles.titleNav}>
              ГРАФИК РАБОТЫ
            </Heading>

            <div className={styles.contantText}>
              <Text>Работаем с 8:30 по 17:30</Text>
              <Text>понедельник - пятница</Text>
            </div>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
