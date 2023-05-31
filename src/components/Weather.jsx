import React, { useState } from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temp';



const Weather = ({ weatherInfo }) => {
    const [isCelsius, setisCelsius] = useState(true);

    const handleChangeTemp = () => {
        setisCelsius(!isCelsius);
    };

    console.log (weatherInfo)

    return (
    <div>
        <section className="text-center grid gap-6" >
            <h2 className="font-bold text-2xl">{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

            <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
                {/* Sección arriba */}
                <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">

                    <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

                    <span className="text-4xl">
                        {isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}
                    </span>

                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                </article>

                {/* Sección abajo */}

                <section className="bg-white/70 p-2 py-4 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">
                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/vector1.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed} m/s</span>
                    </article>

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/vector2.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity} %</span>
                    </article>

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/vector3.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure} hPa</span>
                    </article>

                    <article>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span></span>
                    </article>
                </section>
            </section>

            <button onClick={handleChangeTemp}>Change F / C</button>

            {/* Media query */}
            <style>
                {`
          @media (max-width: 768px) {
            .text-2xl {
              font-size: 20px;
            }

            .sm\:grid-cols-[1fr_auto] {
              grid-template-columns: 1fr;
            }

            /* Agrega otros estilos que quieras modificar en pantallas más pequeñas */
          }
        `}
            </style>
        </section> 

        <footer className="footer">
                <h3>Creado por Daniel Garcia </h3>
            </footer>

            <style>
                {`
                    .footer {
                        position: fixed;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        background-color: #f1f1f1;
                        padding: 1px;
                        text-align: center;
                    }
                `}
            </style>
    </div>
    );
};

export default Weather;
