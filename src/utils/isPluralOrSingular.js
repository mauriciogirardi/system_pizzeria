function isPluralOrSingular(number, plural, singular) {
  return Number(number) === 1 ? singular : plural;
}

export default isPluralOrSingular;
