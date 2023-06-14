export const validateAll = (formData: any) => {
    const {MSISDM, ICCID, first_name, last_name} = formData
    return validateText(MSISDM, "^[0-9]{9}$") && 
        validateText(ICCID, "^[0-9]{9}$") &&
        validateText(first_name, "^[a-zA-Z0-9\\- ]{2,70}$") &&
        validateText(last_name, "^[a-zA-Z0-9\\- ]{2,70}$")
}

export const validateText = (text: string, regex: string) => {
    return !(text.match(regex) === null)
}
