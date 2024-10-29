class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(' ').map((word, index) => {
      if (index === 0 || !nonCapWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }
}