// auth liujinshuai
const MAX_YEAR = 2100;
const MIN_YEAR = 2000;
const MAX_MONTH = 12;
const MIN_MONTH = 1;
const MAX_DAY = 31;
const MIN_DAY = 1;

const time = [
  [2, 25, 30, '1-2-10-11', '3467'],
  [1, 7, 29, '12', '67', '4'],
  [2, 18, 29, '12-1-2', '78'],
  [2, 29, 30, '1245', '8-9-10-11'],
  [1, 10, 30, '34', '', '2'],
  [2, 21, 29, '67', '', ''],
  [1, 2, 29, '89', '', '7'],
  [2, 13, 30, '12-8-9-10', '1245', ''],
  [2, 23, 29, '12-1-9-10', '2356', ''],
  [1, 6, 30, '12', '3-4-5.-6', '5'],
  [2, 17, 30, '12-1', '67', ''],
  [2, 27, 29, '12-1-3-4', '78', ''],
  [1, 8, 29, '34', '', '4'],
  [2, 20, 30, '56', '', ''],
  [1, 0, 29, '89', '', '9'],
  [2, 11, 29, '789', '34', ''],
  [2, 22, 30, '89', '45', ''],
  [1, 4, 30, '', '56', '6'],
  [2, 15, 30, '12-0', '56', ''],
  [2, 26, 30, '12-1', '6-7-9-10', ''],
  [1, 7, 30, '234', '67', '4'],
  [2, 18, 29, '23', '', ''],
  [2, 29, 30, '56', '', ''],
  [1, 10, 30, '4578', '2.-3', '2'],
  [2, 20, 29, '7-8-10-11', '34', ''],
  [1, 2, 29, '9-10', '45', '6'],
  [1, 13, 30, '9-10', '4578', ''],
  [2, 24, 30, '1-2-10-11', '5689', ''],
  [1, 5, 29, '123', '5.-6-8-9', '5'],
  [2, 17, 30, '12', '9-10', ''],
  [2, 28, 30, '12-4-5', '', ''],
  [1, 8, 29, '2367', '1', '3'],
  [2, 19, 30, '6-7-9-10', '23', ''],
  [1, 1, 30, '9-10-11', '34', '11'],
  [2, 11, 29, '9-10', '34', ''],
  [2, 22, 29, '12-1-9-10', '4578', ''],
  [1, 4, 30, '12', '5678', '6'],
  [2, 16, 30, '12-1-2', '5689', ''],
  [2, 26, 29, '12-1-2', '9-10', ''],
  [1, 7, 29, '1245', '', '5'],
  [2, 17, 29, '3489', '12-0', ''],
  [2, 29, 30, '6-7-9-10', '12-1', ''],
  [1, 10, 30, '89', '2.-3', '2'],
  [2, 21, 30, '12-8-9', '3467', ''],
  [1, 2, 30, '1', '4-5-7.-7', '7'],
  [2, 14, 30, '12-1', '4578', ''],
  [2, 25, 30, '12-1', '89', ''],
  [1, 6, 30, '134', '89', '5'],
  [2, 16, 29, '2356', '9-10', ''],
  [2, 28, 30, '5689', '', ''],
  [1, 8, 29, '78', '', '3'],
  [2, 19, 30, '78', '2356', ''],
  [2, 30, 30, '12-9-10', '3467', '8'],
  [2, 12, 30, '12-0', '3467', ''],
  [2, 23, 30, '12-2-3', '4578', ''],
  [1, 4, 30, '23', '78', '6'],
  [2, 15, 30, '123', '89', ''],
  [2, 26, 29, '23', '', ''],
  [1, 7, 29, '6-7-9-10', '', '4'],
  [2, 17, 29, '9-10', '12-0', ''],
  [2, 28, 30, '9-10-11', '2356', ''],
  [1, 10, 29, '1-2-9-10', '3.-3-5-6', '3'],
  [2, 21, 30, '1-2-10-11', '3467', ''],
  [1, 2, 29, '12', '7.-7-', '7'],
  [2, 13, 29, '12-1-2', '78', ''],
  [2, 25, 30, '1245', '89', ''],
  [1, 6, 30, '45', '', '5'],
  [2, 16, 29, '67', '', ''],
  [2, 27, 30, '6-7-9-10', '45', ''],
  [1, 9, 30, '8-9-10', '4.-5', '4'],
  [2, 19, 29, '9-10', '56', ''],
  [1, 1, 30, '12-1', '67', '8'],
  [2, 12, 30, '12-1', '67', ''],
  [2, 23, 29, '12-1-3-4', '78', ''],
  [1, 4, 29, '34', '', '6'],
  [2, 15, 30, '56', '', ''],
  [2, 25, 29, '89', '', ''],
  [1, 7, 29, '789', '4.-4', '4'],
  [2, 18, 30, '89', '45', ''],
  [2, 29, 30, '12-0', '56', ''],
  [1, 10, 30, '1', '5689', '3'],
  [2, 22, 30, '12-2-3', '6-7-9-10', ''],
  [1, 3, 30, '234', '5-6-9-10', '7'],
  [2, 14, 30, '12-2-3', '', ''],
  [2, 24, 30, '56', '', ''],
  [1, 6, 30, '5.-5-7-8', '34', '5'],
  [2, 16, 29, '78', '34', ''],
  [2, 27, 30, '10-11', '45', ''],
  [1, 8, 30, '9-10', '4.-5-7-8', '4'],
  [2, 20, 30, '12', '567', ''],
  [1, 1, 29, '123', '6-7-8.-9', '8'],
  [2, 12, 30, '12', '9-10', ''],
  [2, 23, 30, '1245', '', ''],
  [1, 4, 29, '2-3-6.-7', '1', '6'],
  [2, 15, 30, '6-7-9-10', '12-1', ''],
  [2, 25, 29, '9-10-11', '34', ''],
  [1, 6, 29, '8-9-10', '4.-4-6-7', '4'],
  [2, 18, 29, '12-1-9-10', '456', ''],
  [2, 29, 29, '12-1-2', '567', ''],
  [1, 11, 30, '1234', '5689', '2'],
  [2, 21, 29, '12-1-2', '9-10', ''],
];
var zodiac = [
  'Monkey',
  'Chicken',
  'Dog',
  'Pig',
  'Rat',
  'Cow',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Sheep',
];
const gan = ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'];
const zhi = [
  '申',
  '酉',
  '戌',
  '亥',
  '子',
  '丑',
  '寅',
  '卯',
  '辰',
  '巳',
  '午',
  '未',
];
const zodiacYear = (year: number): string => zodiac[year % 12];

const lunarYearMeth = (year: number): string => gan[year % 10] + zhi[year % 12];

const getConsecutiveMonths = (msg: string) => {
  if (!msg) return [];

  return msg.includes('-') ? msg.split('-') : msg.split('');
};

const calculate = (year: number, month: number, day: number) => {
  if (
    year > MAX_YEAR ||
    year < MIN_YEAR ||
    month > MAX_MONTH ||
    month < MIN_MONTH ||
    day > MAX_DAY ||
    day < MIN_DAY
  ) {
    throw 'Only receive data from 2000-2100, 1-12 months, 1-31 days';
  }
  const obj: {
    year: number;
    month: number;
    day: number;
    leapMonth: number | null;
  } = {
    year,
    month,
    day,
    leapMonth: null,
  };
  let theYear = year % MIN_YEAR;
  let ruleArr = time[theYear];
  const ruleFirst = ruleArr[0] as number;
  const ruleDaysBefore = ruleArr[1] as number;
  const ruleDays = ruleArr[2] as number;
  const ruleMonth = ruleArr[3] as string;
  const ruleDayOfEndYear = ruleArr[4] as string;
  const ruleLeap = ruleArr[5] as string;
  const currentTime = new Date(`${year}/${month}/${day}`).getTime();
  const startTime = new Date(`${year}/1/1`).getTime();
  let nowDay: number = Math.floor(
    (currentTime - startTime) / (24 * 60 * 60 * 1000),
  );
  let nowYear = ruleFirst > 0 ? year-- : year;
  let monthOld = 12 + 1 - ruleFirst;
  let oldDay = ruleDays - ruleDaysBefore + 1;
  let thirtyMonth = getConsecutiveMonths(ruleMonth);
  let twentyNineMonth = getConsecutiveMonths(ruleDayOfEndYear);
  let nowMonth = 0;
  let isThirty = ruleDays == 30 ? true : false;
  let leapMonth = ruleLeap ? ruleLeap : null;
  let isLeapMonth = false;
  let getMonth = function () {
    if (monthOld + 1 > 12) {
      year += 1;
      monthOld = 1;
      isLeapMonth = false;
    } else if (leapMonth) {
      if (monthOld === Number(leapMonth)) {
        obj.leapMonth = month;
        leapMonth = null;
        isLeapMonth = true;
      } else {
        leapMonth += 1;
        isLeapMonth = false;
      }
    } else {
      month += 1;
      isLeapMonth = false;
    }
  };

  let getIsThirty = function () {
    if (thirtyMonth.find(e => Number(e) == monthOld)) {
      if (isLeapMonth) {
        if (thirtyMonth.find(e => String(e) == String(monthOld + '.'))) {
          isThirty = true;
        } else {
          isThirty = !isThirty;
        }
      } else if (thirtyMonth.find(e => String(e) == String(monthOld))) {
        isThirty = true;
      } else {
        isThirty = !isThirty;
      }
    } else if (ruleArr[4] && thirtyMonth.find(e => Number(e) == monthOld)) {
      if (isLeapMonth) {
        if (thirtyMonth.find(e => String(e) == String(month + '.'))) {
          isThirty = false;
        } else {
          isThirty = !isThirty;
        }
      } else if (twentyNineMonth.find(e => String(e) == String(month))) {
        isThirty = false;
      } else {
        isThirty = !isThirty;
      }
    } else {
      isThirty = !isThirty;
    }
  };
  if (nowDay > oldDay) {
    nowDay -= oldDay;

    if (monthOld + 1 > 12) {
      obj.year += 1;

      monthOld = 1;
    } else {
      monthOld += 1;
    }

    getIsThirty();

    while (true) {
      //30/29
      if (nowDay > (isThirty ? 30 : 29)) {
        nowDay -= isThirty ? 30 : 29;

        getMonth();

        getIsThirty();
      } else {
        break;
      }
    }

    return Object.assign(obj, {
      month: monthOld <= (obj?.leapMonth ? obj.leapMonth : monthOld),

      day: nowDay,

      zodiac: zodiacYear(obj.year),

      lunarYear: lunarYearMeth(obj.year),
    });
  } else {
    return Object.assign(obj, {
      month,

      day: ruleDaysBefore + nowDay - 1,

      zodiac: zodiacYear(obj.year),

      lunarYear: lunarYearMeth(obj.year),
    });
  }
};
