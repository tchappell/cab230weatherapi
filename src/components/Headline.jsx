import LikeCounter from './LikeCounter'

export default function Headline({ time, text, temp, wind, icon }) {
  return (<div className="Headline">
    <h2>{time}</h2>
    <h2>{text}</h2>
    <img src={icon} />
    <p>
      Temp: {temp}&deg;C, Wind: {wind} km/h
    </p>
    <LikeCounter />
  </div>);
}
