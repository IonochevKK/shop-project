import { useEffect, useState } from "react";
import { Option } from "../components/UI Kit/DropDown/DropDown";
import { getSpecialDropDown } from "../utils/getSpecialDropDown";
import { KursView } from "../data/dataProgramm";
import { getCountHoursDropDown } from "../utils/getCountHoursDropDown";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useGetDropDownData = () => {
  const cards = useSelector((state: RootState) => state.CardsStorage.allCards);
  const [viewProgramms, setviewProgramms] = useState<Option[]>([]);
  const [viewSpecialty, setviewSpecialty] = useState<Option[]>([]);
  const [viewCountHours, setviewCountHours] = useState<Option[]>([]);

  useEffect(() => {
    setviewSpecialty(getSpecialDropDown(cards));
    setviewProgramms(KursView);
    setviewCountHours(getCountHoursDropDown(cards));
  }, [cards]);
  return {
    viewProgramms,
    viewSpecialty,
    viewCountHours,
  };
};

export default useGetDropDownData;
