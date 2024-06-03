import React, { useState } from "react";
import "./trainingDocuments.scss";
import CardTrainingDocument from "./CardTrainingDocument/CardTrainingDocument";
import { cards } from "../../../../data/dataProgramm";
import { CardProgramProps } from "../../../../components/CardProgram/CardProgram";

const TrainingDocuments = () => {
  const [programmsComplete, setProgrammsComplete] = useState(cards);
  return (
    <div className="trainingDocuments">
      <div className="container">
        {programmsComplete.map((card : CardProgramProps) => (
          <CardTrainingDocument subtitle={card.titleText}/>
        ))}
      </div>
    </div>
  );
};

export default TrainingDocuments;
