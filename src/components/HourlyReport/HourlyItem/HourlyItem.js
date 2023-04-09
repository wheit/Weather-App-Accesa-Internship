import styles from "./HourlyItem.module.css"
const HourlyItem=(props)=>{
    return (
      <div className={styles["hourly-item"]} onClick={props.onClick}>
        <label className="hour">{props.hour}</label>
        <img
          className={styles.icon}
          src={require(`../../../resources/icon_${props.icon}.png`)}
          alt={`icon${props.icon}`}
        ></img>
        <label className="temp">
            {props.temp}
          &deg;
          <span>C</span>
        </label>
      </div>
    );

}
export default HourlyItem