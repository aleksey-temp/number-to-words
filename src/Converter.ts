export class Converter {
  constructor(private num: number) {}

  public convert(): string {
    const inBounds = this.isInBounds();

    if (!inBounds) {
      throw new Error('Число должно находиться в интервале [1, 999999]');
    }

    return this._convert();
  }

  private isInBounds(): boolean {
    if (this.num < 1 || this.num > 999999) {
      return false;
    }

    return true;
  }

  private _convert(): string {
    const results: string[] = [],
      numStr = this.num.toString();
    let digit: number,
      digitPosFromRight: number,
      word: string,
      shouldPushNumber = true;

    for (let i = 0; i < numStr.length; i++) {
      (digit = +numStr[i]), (digitPosFromRight = numStr.length - i);

      switch (digitPosFromRight) {
        case 1: {
          if (!shouldPushNumber || digit === 0) {
            break;
          }

          word = lessThanTwenty[digit];

          results.push(word);

          break;
        }
        case 2: {
          if (digit === 0) {
            shouldPushNumber = true;
            break;
          } else if (digit === 1) {
            word = lessThanTwenty[parseInt(`${digit}${numStr[i + 1]}`)];
            shouldPushNumber = false;
          } else {
            word = tens[digit - 1];
            shouldPushNumber = true;
          }

          results.push(word);

          break;
        }
        case 3: {
          if (digit === 0) {
            break;
          }

          word = hundreds[digit - 1];

          results.push(word);

          break;
        }
        case 4: {
          if (!shouldPushNumber || digit === 0) {
            results.push('тысяч');
            break;
          }

          shouldPushNumber = false;

          if (digit === 1) {
            word = 'одна';
          } else if (digit === 2) {
            word = 'две';
          } else {
            word = lessThanTwenty[digit];
          }

          let suffix = suffixes[digit - 1];

          results.push(word, suffix);

          break;
        }
        case 5: {
          if (digit === 0) {
            shouldPushNumber = true;
            break;
          } else if (digit === 1) {
            word = lessThanTwenty[parseInt(`${digit}${numStr[i + 1]}`)];
            shouldPushNumber = false;
          } else {
            word = tens[digit - 1];
            shouldPushNumber = true;
          }

          results.push(word);

          break;
        }
        case 6: {
          if (digit === 0) {
            break;
          }

          word = hundreds[digit - 1];
          results.push(word);

          break;
        }
      }
    }

    return results.join(' ');
  }
}

const lessThanTwenty = [
  'ноль',
  'один',
  'два',
  'три',
  'четыре',
  'пять',
  'шесть',
  'семь',
  'восемь',
  'девять',
  'десять',
  'одиннадцать',
  'двенадцать',
  'тринадцать',
  'четырнадцать',
  'пятнадцать',
  'шестнадцать',
  'семнадцать',
  'восемнадцать',
  'девятнадцать'
];

const tens = [
  'десять',
  'двадцать',
  'тридцать',
  'сорок',
  'пятьдесят',
  'шестьдесят',
  'семьдесят',
  'восемьдесят',
  'девяносто'
];

const hundreds = [
  'сто',
  'двести',
  'триста',
  'четыреста',
  'пятьсот',
  'шестьсот',
  'семьсот',
  'восемьсот',
  'девятьсот'
];

const suffixes = [
  'тысяча',
  'тысячи',
  'тысячи',
  'тысячи',
  'тысяч',
  'тысяч',
  'тысяч',
  'тысяч',
  'тысяч'
];
