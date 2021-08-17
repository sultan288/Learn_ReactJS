export function toCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
}

export function toFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

export function convert(temperature, toConvert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = toConvert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
