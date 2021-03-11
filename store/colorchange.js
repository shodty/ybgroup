export const state = () => ({
  iconObject: {
    concept: {
      name: 'concept',
      color: '#625e9d',
      clicked: false,
      text: 'concept'
    },
    vid: {
      name: 'vid',
      color: '#f3b120',
      clicked: false,
      text: 'video'
    },
    gather: {
      name: 'gather',
      color: '#ed7625',
      clicked: false,
      text: 'gathering'
    },
    print: {
      name: 'print',
      color: '#235d39',
      clicked: false,
      text: 'print'
    },
    id: {
      name: 'id',
      color: '#edb1ca',
      clicked: false,
      text: 'identity'
    },
    photo: {
      name: 'photo',
      color: '#0076bb',
      clicked: false,
      text: 'photo'
    },
    social: {
      name: 'social',
      color: '#e43e30',
      clicked: false,
      text: 'social'
    },
    web: {
      name: 'web',
      color: '#244c5a',
      clicked: false,
      text: 'web'
    },
    collab: {
      name: 'collab',
      color: '#8dc63f',
      clicked: false,
      text: 'collab'
    }
  },
  cubeObject: {
    vote: {
      letter: 'letter-v',
      color1: '#000000',
      color2: '#e8f350',
      image: 'vote2',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Vote2',
      show: true
    },
    blasphemy: {
      letter: 'letter-b',
      color1: '#ff091a',
      color2: '#131614',
      image: 'blasphemy',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Blasphemy',
      show: true
    },
    pins: {
      letter: 'letter-p',
      color1: '#eaad3c',
      color2: '#ffffff',
      image: 'pins',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Dropping Pins',
      show: true
    },
    friendo: {
      letter: 'letter-f',
      color1: '#e4613b',
      color2: '#f9eedf',
      image: 'friendo',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Friendo',
      show: true
    },
    ruta: {
      letter: 'letter-r',
      color1: '#5ca2cd',
      color2: '#ffffff',
      image: 'ruta',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Ruta 23',
      show: true
    },
    best: {
      letter: 'letter-d',
      color1: '#dc9fc2',
      color2: '#296bb2',
      image: 'best',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Do Your Best',
      show: true
    },
    os: {
      letter: 'letter-o',
      color1: '#2a276c',
      color2: '#e5b4c8',
      image: 'os',
      link: 'ourstreet',
      pattern: ['concept', 'vid', 'gather', 'print', 'id', 'photo', 'social', 'web', 'collab'],
      text: 'Our Street',
      show: true
    },
    acr: {
      letter: 'letter-a',
      color1: '#006bb6',
      color2: '#ffffff',
      image: 'acr',
      link: 'allcityriders',
      pattern: ['vid', 'gather', 'print', 'id', 'photo', 'social', 'web'],
      text: 'All City Riders',
      show: true
    },
    jump: {
      letter: 'letter-j',
      color1: '#e03b26',
      color2: '#ffffff',
      image: 'jump',
      link: 'jump',
      pattern: ['vid', 'gather', 'photo', 'social', 'collab'],
      text: 'Jump',
      show: true
    },
    mas: {
      letter: 'letter-m',
      color1: '#00adbb',
      color2: '#c6d655',
      image: 'mas',
      link: 'mastaco',
      pattern: ['vid', 'gather', 'print', 'photo', 'social', 'web'],
      text: 'Mas Taco',
      show: true
    },
    btm: {
      letter: 'letter-b',
      color1: '#f26351',
      color2: '#ffffff',
      image: 'btm',
      link: 'bottomless',
      pattern: ['concept', 'vid', 'gather', 'print', 'id', 'photo', 'social', 'collab'],
      text: 'Bottomless',
      show: true
    },
    shang: {
      letter: 'letter-s',
      color1: '#3e5671',
      color2: '#d6693f',
      image: 'shang',
      link: 'shangrila',
      pattern: ['print', 'id', 'photo'],
      text: 'Shangri-La',
      show: true
    },
    cabin: {
      letter: 'letter-c',
      color1: '#34442c',
      color2: '#fbcc53',
      image: 'cabin',
      link: 'thecabin',
      pattern: ['print', 'id', 'photo', 'web'],
      text: 'The Cabin',
      show: true
    },
    alt: {
      letter: 'letter-a',
      color1: '#ee7b30',
      color2: '#8667ad',
      image: 'alt',
      link: 'artlifetour',
      pattern: ['vid', 'gather', 'print', 'id', 'photo', 'social', 'collab'],
      text: 'Art Life Tour',
      show: true
    },
    bm: {
      letter: 'letter-b',
      color1: '#85ba9b',
      color2: '#feede5',
      image: 'bm',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Bardis Miry',
      show: true
    },
    voter: {
      letter: 'letter-v',
      color1: '#e8f350',
      color2: '#000000',
      image: 'vote',
      link: 'bardismiry',
      pattern: ['print', 'id', 'social', 'web'],
      text: 'Vote',
      show: true
    }
  }
})

export const mutations = {
  colorChange: (state, { name, clicked }) => {
    if (clicked === false) {
      state.iconObject[name].clicked = true
      for (const cube in state.cubeObject) {
        if (state.cubeObject[cube].pattern.includes(name)) {
          state.cubeObject[cube].show = true
        } else { state.cubeObject[cube].show = false }
      }
    } else {
      state.iconObject[name].clicked = false
    }
    for (const icon in state.iconObject) {
      if (state.iconObject[icon].clicked) {
        return false
      }
    }
    for (const cube in state.cubeObject) {
      state.cubeObject[cube].show = true
    }
  }
}

export const actions = {
  colorChange: (context, { name, clicked }) => {
    context.commit('colorChange', { name, clicked })
  }
}
