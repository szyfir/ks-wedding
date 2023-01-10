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
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={"Dni"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Godzin"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minut"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Sekundhot"} isDanger={false} />
      </a>
    </div>
  );
};

export default ShowCounter;
