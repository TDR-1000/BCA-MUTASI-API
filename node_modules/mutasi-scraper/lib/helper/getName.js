class NameExtractor {
  static extract(name) {
    const regex = /(\d+\.\d{2})([A-Za-z ]+)/g;
    let match;

    while ((match = regex.exec(name)) !== null) {
      const name = match[2].trim();
      return name;
    }
  }
}

module.exports = NameExtractor;
