
export const formatDate = (item: string) => {
    const parts = item.split('/')
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const monthNames = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const monthName = monthNames[parseInt(month, 10) - 1];

    return `${day}.${monthName} de ${year}`;
}