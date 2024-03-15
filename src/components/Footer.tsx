import React from "react";

export const FOR_BUYERS = [
   "Как сделать заказ",
   "Способы оплаты",
   "Доставка",
   "Возврат товара",
   "Возврат денежных средств",
   "Правила продажи",
   "Правила пользования торговой площадкой",
   "Политика обработки персональных данных",
   "Вопросы и ответы",
   "Проверка совместимости",
];
export const FOR_PARTNERS = [
   "Продавайте на Wildberries",
   "Водителям",
   "Курьерам",
   "Перевозчикам",
   "Партнерский пункт выдачи",
   "Франшизный пункт выдачи",
];
export const OUR_PROJECTS = [
   "WB Guru",
   "Трудоустройство",
   "Цифровые товары",
   "WB Путешествия",
   "WB Stream",
];
export const COMPANY = [
   "О нас",
   "Реквизиты",
   "Пресс-служба",
   "Контакты",
   "Bug Bounty",
   "Горячая линия",
   "WB.Tech",
];
export const SOCIALS = ["ВКонтакте", "Одноклассники", "YouTube", "Телеграм"];

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            <section className="footer__container-list">
               <h2>Покупателям</h2>
               <ul>
                  {FOR_BUYERS.map((name) => (
                     <li key={name}>{name}</li>
                  ))}
               </ul>
            </section>{" "}
            <section className="footer__container-list">
               <h2>Партнерам</h2>
               <ul>
                  {FOR_PARTNERS.map((name) => (
                     <li key={name}>{name}</li>
                  ))}
               </ul>
            </section>
            <section className="footer__container-list">
               <h2>Наши проекты</h2>
               <ul>
                  {OUR_PROJECTS.map((name) => (
                     <li key={name}>{name}</li>
                  ))}
               </ul>
            </section>
            <section className="footer__container-list">
               <h2>Компания</h2>
               <ul>
                  {COMPANY.map((name) => (
                     <li key={name}>{name}</li>
                  ))}
               </ul>
            </section>
            <section className="footer__container-list">
               <h2>Мы в соцсетях</h2>
               <ul>
                  {SOCIALS.map((name) => (
                     <li key={name}>{name}</li>
                  ))}
               </ul>
            </section>
         </div>
      </footer>
   );
};

export default Footer;
