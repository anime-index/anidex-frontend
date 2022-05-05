export function format_number(number) {
    if (typeof(number) !== "number" || number < 1_000) {
        return number;
    }
    if (number < 10**6) {
        return (number / 10**3).toPrecision(3) + "k";
    }
    else {
        return (number / 10**6).toPrecision(3) + "M";
    }
}