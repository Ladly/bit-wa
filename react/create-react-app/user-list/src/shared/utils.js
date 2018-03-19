export const getAdequateFormatDate = (date) => {
    const newDate = new Date(date)
    const resultDay = newDate.getDay() + 1
    const resultMonth = newDate.getMonth() + 1
    const resultYear = newDate.getFullYear()
    const result = `${resultDay}.${resultMonth}.${resultYear}`;
    return result
}

export const semiHideEmail = (email) => {
    const getMonkey = email.indexOf("@")
    const firstPart = email.slice(0,3)
    const secondPart = email.slice(getMonkey-2)
    const result = `${firstPart}...${secondPart}`
    return result
}