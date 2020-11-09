export function isValidEmail(email) {
    return !(email || "").trim() || (email.trim().match(/\w+@\w+\.\w+$/))
}