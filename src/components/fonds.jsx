export const getWeatherFond = (weatherInfo) => {
    if (weatherInfo?.weather[0].main === 'Rain') {
        return '/images/lluvia.jpg';
    } else if (weatherInfo?.weather[0].main === 'Clear') {
        return '/images/despejado.jpg';
    } else if (weatherInfo?.weather[0].main === 'Clouds') {
        return '/images/nubes.jpg';
    } else {
        return '/images/CieloCielo.jpg';
    }
};