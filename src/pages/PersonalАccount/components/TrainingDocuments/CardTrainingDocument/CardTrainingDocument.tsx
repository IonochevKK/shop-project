import Button from "../../../../../components/UI Kit/Button/Button";
import Text from "../../../../../components/UI Kit/Text/Text";
import { useResizeWidth } from "../../../../../hooks/useResizeWidth";
import "./cardTrainingDocument.scss";

interface CardTrainingDocumentProps {
  subtitle?: string;
}
const CardTrainingDocument: React.FC<CardTrainingDocumentProps> = ({
  subtitle,
}) => {
  const sizeScreenMobile = useResizeWidth(550);
  return (
    <div className="cardTrainingDocument">
      <div className="title">
        <Text body3>Вы успешно прошли программу</Text>
      </div>
      <div className="subtile">
        <Text body3>{subtitle}</Text>
      </div>
      <div className="deck">
        <Text body5>Нажмите кнопку, чтобы получить документ</Text>
      </div>
      <div className="button">
        {sizeScreenMobile && (
          <Button type="primary" block>
            <Text body3>Скачать</Text>
          </Button>
        )}
         {!sizeScreenMobile && (
          <Button type="primary" >
            <Text body3>Скачать</Text>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardTrainingDocument;
