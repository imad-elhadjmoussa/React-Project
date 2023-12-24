import humidityIcon from './../Assets/humidity.png'
import windSpeedIcon from './../Assets/wind.png'
import cloudIcon from './../Assets/cloud.png'


const Information = ({contry,windSpeed,humidity,temp}) => {
    return (
        <div className='information' >
            <div className="temperature" >
                <div className='state'><img src={cloudIcon} /></div>
                <h1 className="value" >{temp} </h1>
                <h1 className="contry" >{contry} </h1>
            </div>
            <div className="humidity-windSpeed">
                <div className="humidity">
                    <div>
                        <div><img src={humidityIcon} /></div>
                        <p>Humidity</p>
                    </div>
                    <p>{humidity} </p>
                </div>
                <div className="windSpeed">
                    <div>
                        <div><img src={windSpeedIcon} /></div>
                        <p>Wind Speed</p>
                    </div>
                    <p>{windSpeed}Km/h </p>
                </div>
            </div>
        </div>

    );
}

export default Information;