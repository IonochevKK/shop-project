import React from "react";
import "./postPage.scss";
import Layout from "../../components/Layout/Layout";
import BlogPost from "../../components/BlogPost/BlogPost";
import { CardNewsList } from "../../components/CardNews/CardNews";
const PostPage = () => {
  const card: CardNewsList = {
    id: "1e9ec6cb-2735-531e-9e97-ab0cda931f6b",
    title: "Как врачу заявить о себе?",
    desc: " Работа с пациентами — это постоянная коммуникация. И важно в этой коммуникации выстроить образ компетентного.Работа с пациентами — это постоянная коммуникация. И важно в этой коммуникации выстроить образ компетентного",
    img: "https://s3-alpha-sig.figma.com/img/9387/b9e4/0ff08ee42ec0c5b3338641843c596c2c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZvKs5-7CeaNBkiS~OntY9dbqK29s8nUKaauRurJE1y9CDiBBDvWcuK8xoAs6Wke3bioIamBf6S88p6DXiVYA48nD3BQb7L6nbebtpkgLavAJgfYeAlK5hvpiocqMxPHxOGODkiMEZ8s9aP7NUjBfBVox6xYZ6vOu3tib0f7eNM37EY-nWuZJyklM0IwQw9oE66q~bkjsoPvqGa9rnx9VY90T-USHKnyHdLJKlFQ~Zt97jCSe65ukGpv0BllvFiTDod6YOkleTRvDUsbCP18KJCLTT4ammCIC~Iz-32OK4dNHUrGRIiav1f~ByuHYCwQg~TM1Ij2~8Gq-MBmG6LsOeg__",
    createAt: new Date(),
    text: "Шаг 1. Создать собственный портрет. Для того, чтобы понять кто ваши пациенты, важно понять — кто вы. То есть выявить основы своей личности. Сформулируйте ценности и принципы жизни? В чем ваша уникальность? Сформулируйте миссию Эти три момента дадут чётко понять вашей аудитории кто вы и почему вы это делаете? Ведь каждый из нас знает, что специалист притягивает аудиторию, которая похожа на него. Главное не придумывайте что‑то новое, прописывайте данные исходя из вашего внутреннего «Я». Шаг 2. Кто ваша аудитория? Целевая аудитория — это ваши пациенты. Главное запомнить, что это не все люди. У каждого врача, организации или продукта есть определённый сегмент аудитории. Зачем нужно это расписывать? После того как вы поймёте кто ваши пациенты, будет легче составлять ключевые сообщения. Проще доносить мысль до аудитории, так как вы будете понимать в чем они нуждаются и почему должны прийти именно к вам, как к специалисту. Поняв их ценности, вы сформируете доверие каждой группы, повысите лояльность, укрепите свой авторитет. Опишите подробно: кто это (мужчина/женщина), откуда (город/страна), какой возраст, достаток, какие проблемы им важно решить, что они хотят от посещения врача. Чем больше подробностей, тем лучше вы будете знать своих пациентов. Если с этим есть сложности, можно попросить своих пациентов поучаствовать в анонимном анкетировании Шаг 3. Создаём имидж Первое впечатление — это внешний образ медработника. Так как ваше направление имеет особенность — постоянный контакт с людьми, то стоит задуматься: «а как я общаюсь с пациентами», «какой у меня голос и нужно ли над ним поработать?», «есть ли у меня стиль». Имидж может сыграть как в плюс, так и в минус в работе с пациентами. Поэтому важно, чтобы ваш образ был релевантен вашим ценностям и миссии. Шаг 4. Выбрать канал коммуникации Каналы коммуникации — это те средства, с помощью которых сообщение передаётся от вас вашей целевой аудитории. Что это может быть? соцсети личный сайт мероприятия радио собственный подкаст и т.д. Для того чтобы выбрать канал коммуникации надо: Узнать какими каналами пользуется ваша целевая аудитория — добавляем это в портрет. Тут конечно можно воспользоваться анкетированием. Выделите те каналы, которые охватывают как можно больше вашей целевой аудитории. Опишите действия по развитию коммуникации каждой целевой группой в выбранных каналах. Эти четыре основных шага помогут вам понять себя, кто ваши клиенты и каким способом с ними общаться. Без фундамента не будет дома, так и в личном бренде врача: выстраиваем фундамент и начинаем работать.",
  };
  // В теории тут должен быть текст, который подгружается с Backend и распределяется здесь по блокам
  return (
    <div className="PostPage">
      <Layout>
        <BlogPost card={card} />
      </Layout>
    </div>
  );
};

export default PostPage;
