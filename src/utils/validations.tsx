export function validateEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
}

export function validateName(name: string): boolean {
    return /^[A-Za-z\s]+$/.test(name);
}