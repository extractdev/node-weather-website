const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4637e749b27a9ee8e1eadc325a863b9e/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The hight temp will be ${body.daily.data[0].temperatureHigh} degrees and the low temp will be ${body.daily.data[0].temperatureLow} degrees.`)
        }
    })

}

module.exports = forecast