// helper for date format with handlebars
// adds 1 to month (indexes at 0)
module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      }
}