import arrowDown from "../../assets/arrow-down.svg";
import mixer from "../../assets/mixer.svg"

export default function Header(props) {
  return (
    <header className="flex justify-between">
        <button type="button">
          <img src={arrowDown} alt="Arrow down icon" className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <button type="button">
          <img src={mixer} alt="Mixer icon" className="w-6 h-6" />
        </button>
      </header>
  )
}