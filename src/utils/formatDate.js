import dateFormat from 'dateformat'

const formatDate = (date, mask = 'dd/mm/yyyy') => dateFormat(date, mask)

export default formatDate
