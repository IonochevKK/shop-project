import React, { useState } from "react";
import Text from "../Text/Text";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
import "./form.scss";

type FormType = "text" | "noText";

interface FormProps {
  type: FormType;
  title: string | React.ReactNode;
  desc?: string | React.ReactNode;
  blockButton?: boolean;
}

const Form: React.FC<FormProps> = ({ type, blockButton, title, desc }) => {
  const [dataInput, setDataInput] = useState({});
  const sizeScreenMobile = useResizeWidth(550);

  const handleSumbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (type === "text") {
      const { username, email, phone, question } = Object.fromEntries(formData);
      setDataInput({
        username: username,
        question: question,
        email: email,
        phone: phone,
      });
    } else {
      const { username, email, phone } = Object.fromEntries(formData);
      setDataInput({
        username: username,
        email: email,
        phone: phone,
      });
    }
    console.log(dataInput);
  };

  return (
    <>
      <div className="form">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <form onSubmit={handleSumbmit}>
          <Input type="text" name="username" block placeholder="Имя" />
          <Input
            type="tel"
            name="phone"
            block
            placeholder="(000) 000-00-00"
            postfix="+7"
          />
          <Input type="email" name="email" block placeholder="Email" />
          {type === "text" && (
            <Input
              type="bigText"
              name="question"
              block
              placeholder="Ваш вопрос"
            />
          )}
          <div className="button">
            <Button type="primary" block={sizeScreenMobile || blockButton}>
              Отправить
            </Button>
          </div>
        </form>
        <div className="lisenc">
          <Text caption1 color="rgba(155, 155, 155, 1)">
            *Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных
          </Text>
        </div>
      </div>
    </>
  );
};

export default Form;
