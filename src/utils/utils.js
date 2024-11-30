export const getReportNumber = () => Date.now()

export const getReportDate = () => {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 10);
    return formattedDate
}