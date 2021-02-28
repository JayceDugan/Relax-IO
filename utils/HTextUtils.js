const getFontSize = (props) => {
  const fontSizes = {
    map: {
      h1: 25,
      h2: 22,
      h3: 19,
      h4: 17,
      h5: 15,
      default: 19
    },
    get keys() {
      return Object.keys(this.map)
    },
    get default() {
      return this.map.default
    }
  }

  return fontSizes.keys.includes(props.variant)
    ? fontSizes.keys[props.variant]
    : fontSizes.default
}

const getTextAlignment = (props) => {
  const map = [
    'center',
    'left',
    'right'
  ]

  return map.includes(props.align)
    ? props.align
    : 'left'
}

const getFontFamily = (props) => {
  const fontWeights = {
    map: {
      'bold': 'Nunito_700Bold',
      'semibold': 'Nunito_600SemiBold',
      'regular': 'Nunito_400Regular',
      'light': 'Nunito_300Light'
    },
    get keys() {
      return Object.keys(this.map)
    },
    get default() {
      return this.map.default
    }
  }

  return fontWeights.keys.includes(props.weight)
    ? fontWeights.map[props.weight]
    : fontWeights.default
}

const getSpacing = (props) => {
  return props.spacing ?? 15
}

export { getFontSize, getTextAlignment, getSpacing, getFontFamily }
