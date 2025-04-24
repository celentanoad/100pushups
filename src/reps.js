const week1 = {
  day1: {
    level1: {
      name: '<5',
      set1: 2,
      set2: 3,
      set3: 2,
      set4: 2,
      set5: '3+'
    },
    level2: {
      name: '6-10',
      set1: 6,
      set2: 6,
      set3: 4,
      set4: 4,
      set5: '5+'
    },
    level3: {
      name: '11-20',
      set1: 10,
      set2: 12,
      set3: 7,
      set4: 7,
      set5: '9+'
    },
    rest: 60
  },
  day2: {
    level1: {
      name: '<5',
      set1: 3,
      set2: 4,
      set3: 2,
      set4: 3,
      set5: '4+'
    },
    level2: {
      name: '6-10',
      set1: 6,
      set2: 8,
      set3: 6,
      set4: 6,
      set5: '7+'
    },
    level3: {
      name: '11-20',
      set1: 10,
      set2: 12,
      set3: 8,
      set4: 8,
      set5: '12+'
    },
    rest: 60
  },
  day3: {
    level1: {
      name: '<5',
      set1: 4,
      set2: 5,
      set3: 4,
      set4: 4,
      set5: '5+'
    },
    level2: {
      name: '6-10',
      set1: 8,
      set2: 10,
      set3: 7,
      set4: 7,
      set5: '10+'
    },
    level3: {
      name: '11-20',
      set1: 11,
      set2: 15,
      set3: 9,
      set4: 9,
      set5: '13+'
    },
    rest: 60
  }
}
const week2 = {
  day1: {
    level1: {
      name: '<5',
      set1: 4,
      set2: 6,
      set3: 4,
      set4: 4,
      set5: '6+'
    },
    level2: {
      name: '6-10',
      set1: 9,
      set2: 11,
      set3: 8,
      set4: 8,
      set5: '11+'
    },
    level3: {
      name: '11-20',
      set1: 14,
      set2: 14,
      set3: 10,
      set4: 10,
      set5: '15+'
    },
    rest: 60,
  },
  day2: {
    level1: {
      name: '<5',
      set1: 5,
      set2: 6,
      set3: 4,
      set4: 4,
      set5: '7+'
    },
    level2: {
      name: '6-10',
      set1: 10,
      set2: 12,
      set3: 9,
      set4: 9,
      set5: '13+'
    },
    level3: {
      name: '11-20',
      set1: 14,
      set2: 16,
      set3: 12,
      set4: 12,
      set5: '17+'
    },
    rest: 90
  },
  day3: {
    level1: {
      name: '<5',
      set1: 5,
      set2: 7,
      set3: 5,
      set4: 5,
      set5: '8+'
    },
    level2: {
      name: '6-10',
      set1: 12,
      set2: 13,
      set3: 10,
      set4: 10,
      set5: '15+'
    },
    level3: {
      name: '11-20',
      set1: 16,
      set2: 17,
      set3: 14,
      set4: 14,
      set5: '20+'
    },
    rest: 120
  }
}

const week3 = {
  day1: {
    level1: {
      name: '16-20',
      set1: 10,
      set2: 12,
      set3: 7,
      set4: 7,
      set5: '9+'
    },
    level2: {
      name: '21-25',
      set1: 12,
      set2: 17,
      set3: 13,
      set4: 13,
      set5: '17+'
    },
    level3: {
      name: '>25',
      set1: 14,
      set2: 28,
      set3: 14,
      set4: 14,
      set5: '20+'
    },
    rest: 60
  },
  day2: {
    level1: {
      name: '16-20',
      set1: 10,
      set2: 12,
      set3: 8,
      set4: 8,
      set5: '12+'
    },
    level2: {
      name: '21-25',
      set1: 14,
      set2: 19,
      set3: 14,
      set4: 14,
      set5: '19+'
    },
    level3: {
      name: '>25',
      set1: 20,
      set2: 25,
      set3: 15,
      set4: 15,
      set5: '25+'
    },
    rest: 90
  },
  day3: {
    level1: {
      name: '16-20',
      set1: 11,
      set2: 13,
      set3: 9,
      set4: 9,
      set5: '13+'
    },
    level2: {
      name: '21-25',
      set1: 16,
      set2: 21,
      set3: 15,
      set4: 15,
      set5: '21+'
    },
    level3: {
      name: '>25',
      set1: 22,
      set2: 30,
      set3: 20,
      set4: 20,
      set5: '28+'
    },
    rest: 120
  }
}

const week4 = {
  day1: {
    level1: {
      name: '16-20',
      set1: 12,
      set2: 14,
      set3: 11,
      set4: 10,
      set5: '16+'
    },
    level2: {
      name: '21-25',
      set1: 18,
      set2: 22,
      set3: 16,
      set4: 16,
      set5: '25+'
    },
    level3: {
      name: '>25',
      set1: 21,
      set2: 25,
      set3: 21,
      set4: 21,
      set5: '32+'
    },
    rest: 60
  },
  day2: {
    level1: {
      name: '16-20',
      set1: 14,
      set2: 16,
      set3: 12,
      set4: 12,
      set5: '18+'
    },
    level2: {
      name: '21-25',
      set1: 20,
      set2: 25,
      set3: 20,
      set4: 20,
      set5: '28+'
    },
    level3: {
      name: '>25',
      set1: 25,
      set2: 29,
      set3: 25,
      set4: 25,
      set5: '36+'
    },
    rest: 90
  },
  day3: {
    level1: {
      name: '16-20',
      set1: 16,
      set2: 18,
      set3: 13,
      set4: 13,
      set5: '20+'
    },
    level2: {
      name: '21-25',
      set1: 23,
      set2: 28,
      set3: 23,
      set4: 23,
      set5: '33+'
    },
    level3: {
      name: '>25',
      set1: 29,
      set2: 33,
      set3: 29,
      set4: 29,
      set5: '40+'
    },
    rest: 120
  }
}

const week5 = {
  day1: {
    level1: {
      name: '31-35',
      set1: 17,
      set2: 19,
      set3: 15,
      set4: 15,
      set5: '20+'
    },
    level2: {
      name: '36-40',
      set1: 28,
      set2: 35,
      set3: 25,
      set4: 22,
      set5: '35+'
    },
    level3: {
      name: '>40',
      set1: 36,
      set2: 40,
      set3: 30,
      set4: 24,
      set5: '40+'
    },
    rest: 60
  },
  day2: {
    level1: {
      name: '31-35',
      set1: 10,
      set2: 10,
      set3: 13,
      set4: 13,
      set5: 10,
      set6: 10,
      set7: 9,
      set8: '25+'
    },
    level2: {
      name: '36-40',
      set1: 18,
      set2: 18,
      set3: 20,
      set4: 20,
      set5: 14,
      set6: 14,
      set7: 16,
      set8: '40+'
    },
    level3: {
      name: '>40',
      set1: 19,
      set2: 19,
      set3: 22,
      set4: 22,
      set5: 18,
      set6: 18,
      set7: 22,
      set8: '45+'
    },
    rest: 45
  },
  day3: {
    level1: {
      name: '31-35',
      set1: 13,
      set2: 13,
      set3: 15,
      set4: 15,
      set5: 12,
      set6: 12,
      set7: 10,
      set8: '30+'
    },
    level2: {
      name: '36-40',
      set1: 18,
      set2: 18,
      set3: 20,
      set4: 20,
      set5: 17,
      set6: 17,
      set7: 20,
      set8: '45+'
    },
    level3: {
      name: '>40',
      set1: 20,
      set2: 20,
      set3: 24,
      set4: 24,
      set5: 20,
      set6: 20,
      set7: 22,
      set8: '50+'
    },
    rest: 45
  }
}

const week6 = {
  day1: {
    level1: {
      name: '46-50',
      set1: 25,
      set2: 30,
      set3: 20,
      set4: 15,
      set5: '40+'
    },
    level2: {
      name: '51-60',
      set1: 40,
      set2: 50,
      set3: 25,
      set4: 25,
      set5: '50+'
    },
    level3: {
      name: '>60',
      set1: 45,
      set2: 55,
      set3: 35,
      set4: 30,
      set5: '55+'
    },
    rest: 60
  },
  day2: {
    level1: {
      name: '46-50',
      set1: 14,
      set2: 14,
      set3: 15,
      set4: 15,
      set5: 14,
      set6: 14,
      set7: 10,
      set8: 10,
      set9: '44+'
    },
    level2: {
      name: '51-60',
      set1: 20,
      set2: 20,
      set3: 23,
      set4: 23,
      set5: 20,
      set6: 20,
      set7: 18,
      set8: 18,
      set9: '53+'
    },
    level3: {
      name: '>60',
      set1: 22,
      set2: 22,
      set3: 30,
      set4: 30,
      set5: 24,
      set6: 24,
      set7: 18,
      set8: 18,
      set9: '58+'
    },
    rest: 45
  },
  day3: {
    level1: {
      name: '46-50',
      set1: 13,
      set2: 13,
      set3: 17,
      set4: 17,
      set5: 16,
      set6: 16,
      set7: 14,
      set8: 14,
      set9: '50+'
    },
    level2: {
      name: '51-60',
      set1: 22,
      set2: 22,
      set3: 30,
      set4: 30,
      set5: 25,
      set6: 25,
      set7: 18,
      set8: 18,
      set9: '55+'
    },
    level3: {
      name: '>60',
      set1: 26,
      set2: 26,
      set3: 33,
      set4: 33,
      set5: 26,
      set6: 26,
      set7: 22,
      set8: 22,
      set9: '60+'
    },
    rest: 45
  }
}

export const weeks = {
  week1,
  week2,
  week3,
  week4,
  week5,
  week6
}