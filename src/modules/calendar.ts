export function calculerHeure(lune: number, terre: number, soleil: number): string {
    let result = 0;

    // Check if the input is valid
    if (lune != 1 && lune != 2 || terre != 1 && terre != 2 || soleil != 1 && soleil != 2) {
        throw new Error("Les valeurs doivent être 1 ou 2");
    }

    // Handle soleil
    if (soleil == 2) {
        result += soleil; // Valeur
        // Handle terre
        result += terre*2; // Valeur
        if (terre == 1) {
            result += 2;
        } if (terre == 2) {
            result = 6;
            return getHour(result);
        }
        result += 1;
    }

    // Handle lune
    result += lune; // Valeur
    if (lune == 1) {
        result -= 2;
    } if (lune == 2) {
        result = result / 2;
    }


    return getHour(result);
}

export function getHour(num: number): string {
    if (num <= 2) {
        return "mortin";
    }
    if (num <= 4) {
        return "aprenoon";
    }
    if (num <= 5) {
        return "soirning";
    }
    return "nuight";
}