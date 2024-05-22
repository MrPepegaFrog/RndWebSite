import { Link } from 'react-router-dom';

import { Logo } from '@/shared/assets/icons/Logo';
import { TelegramLogo } from '@/shared/assets/icons/Telegram';
import { VKLogo } from '@/shared/assets/icons/VK';
import { TELEGRAMM_PATH, VK_PATH } from '@/shared/config/routes/paths';
import { routePath } from '@/shared/config/routes/routeConfig';
import { Container } from '@/shared/ui/container';
import Heading from '@/shared/ui/heading/heading';
import Text from '@/shared/ui/typography';

import style from './desktopFooter.module.scss';

export const DesktopFooter = () => {
  return (
    <footer className={style.footer}>
      <Container className={style.container}>
        <div className={style.logoContainer}>
          <Logo />
        </div>

        <div>
          <div className={style.contentBlock}>
            <nav className={style.nav}>
              <Link to={routePath.main} className={style.nav_link}>
                Главная
              </Link>

              <Link to={routePath.about} className={style.nav_link}>
                О&nbsp;КОМПАНИИ
              </Link>

              <Link to={routePath.case} className={style.nav_link}>
                КЕЙСЫ
              </Link>

              <Link to={routePath.career} className={style.nav_link}>
                КАРЬЕРА
              </Link>

              <Link to={routePath.press_center} className={style.nav_link}>
                Пресс-центр
              </Link>

              <Link to={routePath.contacts} className={style.nav_link}>
                Контакты
              </Link>
            </nav>

            <div>
              <Heading className={style.add_info_title}>Офис</Heading>
              <Text className={style.add_info_text}>г. Магнитогорск,</Text>
              <Text className={style.add_info_text}>ул. Ленинградская 79 корп. 14</Text>
            </div>
          </div>

          <div className={style.contentBlock}>
            <div className={style.contacts_block}>
              <Text className={style.main_title}>Если остались вопросы, напишите нам</Text>
              <Link to='mailto:mail@rnd-mgn.ru' className={style.mail}>
                mail@rnd-mgn.ru
              </Link>

              <div className={style.society}>
                <Link target='_blank' to={VK_PATH}>
                  <VKLogo />
                </Link>

                <Link target='_blank' to={TELEGRAMM_PATH}>
                  <TelegramLogo />
                </Link>
              </div>
            </div>

            <div className={style.add_info}>
              <div>
                <Heading className={style.add_info_title}>График работы</Heading>
                <Text className={style.add_info_text}>Работаем с 8:30 по 17:30</Text>
                <Text className={style.add_info_text}>понедельник - пятница</Text>
              </div>

              <div>
                <Heading className={style.add_info_title}>Телефон</Heading>

                <Link to='tel:+73519330151' className={style.tel}>
                  +7 (3519) 33-01-51
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
