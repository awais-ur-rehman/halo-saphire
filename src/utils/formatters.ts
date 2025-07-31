export const formatCurrency = (amount: number, currency = 'PKR'): string => {
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency,
    }).format(amount)
}

export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-PK').format(num)
}

export const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`
}

export const formatDate = (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(dateObj)
}

export const formatDateTime = (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(dateObj)
} 