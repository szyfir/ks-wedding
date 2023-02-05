import { styled } from "@mui/material";
import DateTimeDisplay from "./DateTimeDisplay";

type ShowCounterProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter: React.FC<ShowCounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Dni"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Godziny"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minuty"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Sekundy"} isDanger={false} />
      </div>
    </div>
  );
};

export default ShowCounter;
