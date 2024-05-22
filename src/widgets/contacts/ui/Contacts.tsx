import { Map } from '@/entities/map';

import { Slash } from '@/shared/assets/icons/Slash';
import { clsx } from '@/shared/lib/classNames';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './contacts.module.scss';

export const Contacts = () => {
  return (
    <Container>
      <div>
        <Slash />

        <Text variant={FontsEnum.MEDIUM}>КОНТАКТЫ</Text>
      </div>

      <div>
        <div className={style.description}>
          <article className={style.article}>
            <Text variant={FontsEnum.LIGHT} className={style.nameArticle}>
              Адрес местонахождения офисов
            </Text>

            <div className={style.contentArticle}>
              <div className={style.contentText}>
                <Text variant={FontsEnum.MEDIUM}>г.Магнитогорск</Text>

                <Text variant={FontsEnum.MEDIUM}>
                  ул.&nbsp;Ленинградская&nbsp;79&nbsp;корп.&nbsp;14
                </Text>
              </div>

              <div className={style.contentText}>
                <Text variant={FontsEnum.MEDIUM}>г.&nbsp;Магнитогорск,</Text>

                <Text variant={FontsEnum.MEDIUM}>ул.&nbsp;Советская&nbsp;39</Text>
              </div>
            </div>
          </article>

          <article className={style.article}>
            <Text variant={FontsEnum.LIGHT} className={style.nameArticle}>
              Время работы
            </Text>

            <Text variant={FontsEnum.MEDIUM} className={style.contentText}>
              Работаем по&nbsp;будням с&nbsp;8:30 до&nbsp;17:30
            </Text>
          </article>

          <article className={style.article}>
            <div className={style.tel}>
              <Text variant={FontsEnum.LIGHT} className={style.nameArticle}>
                Телефон
              </Text>
              <a href='tel:+73519330151'>
                <Text variant={FontsEnum.MEDIUM} className={clsx(style.contentText, style.noWrap)}>
                  +7 (3519) 33-01-51
                </Text>
              </a>
            </div>

            <div className={style.mail}>
              <Text variant={FontsEnum.LIGHT} className={style.nameArticle}>
                Почта
              </Text>

              <a href='mailto:mail@rnd-mgn.ru'>
                <Text variant={FontsEnum.MEDIUM} className={clsx(style.contentText, style.noWrap)}>
                  mail@rnd-mgn.ru
                </Text>
              </a>
            </div>
          </article>
        </div>

        <Map />
      </div>
    </Container>
  );
};
