class Formatter {

  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9' -]+/g, '');
    }
    

static titleize(string) {
  let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  let word = string.split(" ")
  let result = word.map((w, index) => {
    if (index === 0) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }
    if (exceptions.findIndex(n => n === w) !== -1) {
      return w;
    }
    return w.charAt(0).toUpperCase() + w.slice(1);
  });

  return result.join(" ");
}

}
