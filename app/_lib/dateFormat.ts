export function intlDateFormat(dateString: string){

    const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
}).format(new Date(dateString));

    return formattedDate;

}