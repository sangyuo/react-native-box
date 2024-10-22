import {StyleSheet} from 'react-native';
import {device} from '../utils';

export const commonStyles = StyleSheet.create({
  // Flex
  'd-none': {display: 'none'},
  'd-flex': {display: 'flex'},
  'flex-1': {flex: 1},
  'flex-wrap': {flexWrap: 'wrap'},
  'flex-wrap-reverse': {flexWrap: 'wrap-reverse'},
  'flex-nowrap': {flexWrap: 'nowrap'},
  row: {flexDirection: 'row'},
  'row-center': {flexDirection: 'row', alignItems: 'center'},
  'row-v-center': {flexDirection: 'row', justifyContent: 'center'},
  'row-reverse': {flexDirection: 'row-reverse'},
  column: {flexDirection: 'column'},
  'column-center': {flexDirection: 'column', justifyContent: 'center'},
  'column-v-center': {flexDirection: 'column', alignItems: 'center'},
  'column-reverse': {flexDirection: 'column-reverse'},
  center: {justifyContent: 'center', alignItems: 'center'},
  'self-center': {alignSelf: 'center'},
  'self-start': {alignSelf: 'flex-start'},
  'self-end': {alignSelf: 'flex-end'},
  'self-stretch': {alignSelf: 'stretch'},
  'self-auto': {alignSelf: 'auto'},
  'self-baseline': {alignSelf: 'baseline'},
  'justify-start': {justifyContent: 'flex-start'},
  'justify-center': {justifyContent: 'center'},
  'justify-end': {justifyContent: 'flex-end'},
  'space-between': {justifyContent: 'space-between'},
  'space-around': {justifyContent: 'space-around'},
  'items-start': {alignItems: 'flex-start'},
  'items-center': {alignItems: 'center'},
  'items-baseline': {alignItems: 'baseline'},
  'items-end': {alignItems: 'flex-end'},
  'items-stretch': {alignItems: 'stretch'},
  'content-start': {alignContent: 'flex-start'},
  'content-center': {alignContent: 'center'},
  'content-end': {alignContent: 'flex-end'},
  'content-stretch': {alignContent: 'stretch'},
  'content-between': {alignContent: 'space-between'},
  'content-around': {alignContent: 'space-around'},
  // Ratio
  aspectRatio: {aspectRatio: 1},
  'aspectRatio-16/9': {aspectRatio: 16 / 9},
  'aspectRatio-4/3': {aspectRatio: 4 / 3},
  'object-cover': {objectFit: 'cover'},
  'object-contain': {objectFit: 'contain'},
  'object-fill': {objectFit: 'fill'},
  'object-scale-down': {objectFit: 'scale-down'},
  // Position
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  '-z-1': {zIndex: -1, elevation: -1},
  '-z-2': {zIndex: -2, elevation: -2},
  '-z-3': {zIndex: -3, elevation: -3},
  'z-0': {zIndex: 0, elevation: -0},
  'z-1': {zIndex: 1, elevation: 1},
  'z-2': {zIndex: 2, elevation: 2},
  'z-3': {zIndex: 3, elevation: 3},
  'z-4': {zIndex: 4, elevation: 4},
  'z-5': {zIndex: 5, elevation: 5},
  'z-6': {zIndex: 6, elevation: 6},
  'z-7': {zIndex: 7, elevation: 7},
  'z-8': {zIndex: 8, elevation: 8},
  'z-9': {zIndex: 9, elevation: 9},
  'z-99': {zIndex: 99, elevation: 99},
  'z-999': {zIndex: 999, elevation: 999},
  'z-9999': {zIndex: 9999, elevation: 9999},
  // Opacity
  'opacity-0': {opacity: 0},
  'opacity-5': {opacity: 0.05},
  'opacity-10': {opacity: 0.1},
  'opacity-15': {opacity: 0.15},
  'opacity-20': {opacity: 0.2},
  'opacity-25': {opacity: 0.25},
  'opacity-30': {opacity: 0.3},
  'opacity-35': {opacity: 0.35},
  'opacity-40': {opacity: 0.4},
  'opacity-45': {opacity: 0.45},
  'opacity-50': {opacity: 0.5},
  'opacity-55': {opacity: 0.55},
  'opacity-60': {opacity: 0.6},
  'opacity-65': {opacity: 0.65},
  'opacity-70': {opacity: 0.7},
  'opacity-75': {opacity: 0.75},
  'opacity-80': {opacity: 0.8},
  'opacity-85': {opacity: 0.85},
  'opacity-90': {opacity: 0.9},
  'opacity-95': {opacity: 0.95},
  'opacity-100': {opacity: 0.1},
  // Size
  'w-auto': {width: 'auto'},
  'w-1/2': {width: '50%'},
  'w-1/3': {width: '33.333333%'},
  'w-2/3': {width: '66.666667%'},
  'w-1/4': {width: '25%'},
  'w-3/4': {width: '75%'},
  'w-1/5': {width: '20%'},
  'w-2/5': {width: '40%'},
  'w-3/5': {width: '60%'},
  'w-4/5': {width: '80%'},
  'w-full': {width: '100%'},
  'w-screen': {width: device.width},
  'min-w-auto': {minWidth: 'auto'},
  'min-w-1/2': {minWidth: '50%'},
  'min-w-1/3': {minWidth: '33.333333%'},
  'min-w-2/3': {minWidth: '66.666667%'},
  'min-w-1/4': {minWidth: '25%'},
  'min-w-3/4': {minWidth: '75%'},
  'min-w-1/5': {minWidth: '20%'},
  'min-w-2/5': {minWidth: '40%'},
  'min-w-3/5': {minWidth: '60%'},
  'min-w-4/5': {minWidth: '80%'},
  'min-w-full': {minWidth: '100%'},
  'min-w-screen': {minWidth: device.width},
  'max-w-auto': {maxWidth: 'auto'},
  'max-w-1/2': {maxWidth: '50%'},
  'max-w-1/3': {maxWidth: '33.333333%'},
  'max-w-2/3': {maxWidth: '66.666667%'},
  'max-w-1/4': {maxWidth: '25%'},
  'max-w-3/4': {maxWidth: '75%'},
  'max-w-1/5': {maxWidth: '20%'},
  'max-w-2/5': {maxWidth: '40%'},
  'max-w-3/5': {maxWidth: '60%'},
  'max-w-4/5': {maxWidth: '80%'},
  'max-w-full': {maxWidth: '100%'},
  'max-w-screen': {maxWidth: device.width},
  'h-auto': {height: 'auto'},
  'h-1/2': {height: '50%'},
  'h-1/3': {height: '33.333333%'},
  'h-2/3': {height: '66.666667%'},
  'h-1/4': {height: '25%'},
  'h-3/4': {height: '75%'},
  'h-1/5': {height: '20%'},
  'h-2/5': {height: '40%'},
  'h-3/5': {height: '60%'},
  'h-4/5': {height: '80%'},
  'h-full': {height: '100%'},
  'h-screen': {height: device.height},
  'min-h-auto': {minHeight: 'auto'},
  'min-h-1/2': {minHeight: '50%'},
  'min-h-1/3': {minHeight: '33.333333%'},
  'min-h-2/3': {minHeight: '66.666667%'},
  'min-h-1/4': {minHeight: '25%'},
  'min-h-3/4': {minHeight: '75%'},
  'min-h-1/5': {minHeight: '20%'},
  'min-h-2/5': {minHeight: '40%'},
  'min-h-3/5': {minHeight: '60%'},
  'min-h-4/5': {minHeight: '80%'},
  'min-h-full': {minHeight: '100%'},
  'min-h-screen': {minHeight: device.height},
  'max-h-auto': {maxHeight: 'auto'},
  'max-h-1/2': {maxHeight: '50%'},
  'max-h-1/3': {maxHeight: '33.333333%'},
  'max-h-2/3': {maxHeight: '66.666667%'},
  'max-h-1/4': {maxHeight: '25%'},
  'max-h-3/4': {maxHeight: '75%'},
  'max-h-1/5': {maxHeight: '20%'},
  'max-h-2/5': {maxHeight: '40%'},
  'max-h-3/5': {maxHeight: '60%'},
  'max-h-4/5': {maxHeight: '80%'},
  'max-h-full': {maxHeight: '100%'},
  'max-h-screen': {maxHeight: device.height},
  // Text
  'text-center': {
    textAlign: 'center',
  },
  'text-left': {
    textAlign: 'left',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-auto': {
    textAlign: 'auto',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  'font-thin': {
    fontWeight: '100',
  },
  'font-extraLight': {
    fontWeight: '200',
  },
  'font-light': {
    fontWeight: '300',
  },
  'font-normal': {
    fontWeight: '400',
  },
  'font-medium': {
    fontWeight: '500',
  },
  'font-semibold': {
    fontWeight: '600',
  },
  'font-bold': {
    fontWeight: '700',
  },
  'font-extrabold': {
    fontWeight: '800',
  },
  'font-black': {
    fontWeight: '900',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  'text-italic': {
    fontStyle: 'italic',
  },
  'underline-solid': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  'underline-double': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
  },
  'underline-dotted': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  'underline-dashed': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
  },
  'underline-through': {
    textDecorationLine: 'line-through',
  },
  'underline-underline-through': {
    textDecorationLine: 'underline line-through',
  },
  'no-underline': {
    textDecorationLine: 'none',
  },
  // Border
  'border-dashed': {borderStyle: 'dashed'},
  'border-dotted': {borderStyle: 'dotted'},
  'border-solid': {borderStyle: 'solid'},
  'border-0': {borderWidth: 0},
  'border-t-0': {borderTopWidth: 0},
  'border-l-0': {borderLeftWidth: 0},
  'border-b-0': {borderBottomWidth: 0},
  'border-r-0': {borderRightWidth: 0},
  'border-x-0': {borderLeftWidth: 0, borderRightWidth: 0},
  'border-y-0': {borderTopWidth: 0, borderBottomWidth: 0},
  border: {borderWidth: 1},
  'border-t': {borderTopWidth: 1},
  'border-l': {borderLeftWidth: 1},
  'border-b': {borderBottomWidth: 1},
  'border-r': {borderRightWidth: 1},
  'border-x': {borderLeftWidth: 1, borderRightWidth: 1},
  'border-y': {borderTopWidth: 1, borderBottomWidth: 1},
  'border-2': {borderWidth: 2},
  'border-t-2': {borderTopWidth: 2},
  'border-l-2': {borderLeftWidth: 2},
  'border-b-2': {borderBottomWidth: 2},
  'border-r-2': {borderRightWidth: 2},
  'border-x-2': {borderLeftWidth: 2, borderRightWidth: 2},
  'border-y-2': {borderTopWidth: 2, borderBottomWidth: 2},
  'border-3': {borderWidth: 3},
  'border-t-3': {borderTopWidth: 3},
  'border-l-3': {borderLeftWidth: 3},
  'border-b-3': {borderBottomWidth: 3},
  'border-r-3': {borderRightWidth: 3},
  'border-x-3': {borderLeftWidth: 3, borderRightWidth: 3},
  'border-y-3': {borderTopWidth: 3, borderBottomWidth: 3},
  'border-4': {borderWidth: 4},
  'border-t-4': {borderTopWidth: 4},
  'border-l-4': {borderLeftWidth: 4},
  'border-b-4': {borderBottomWidth: 4},
  'border-r-4': {borderRightWidth: 4},
  'border-x-4': {borderLeftWidth: 4, borderRightWidth: 4},
  'border-y-4': {borderTopWidth: 4, borderBottomWidth: 4},
  'border-5': {borderWidth: 5},
  'border-t-5': {borderTopWidth: 5},
  'border-l-5': {borderLeftWidth: 5},
  'border-b-5': {borderBottomWidth: 5},
  'border-r-5': {borderRightWidth: 5},
  'border-x-5': {borderLeftWidth: 5, borderRightWidth: 5},
  'border-y-5': {borderTopWidth: 5, borderBottomWidth: 5},
  'border-6': {borderWidth: 6},
  'border-t-6': {borderTopWidth: 6},
  'border-l-6': {borderLeftWidth: 6},
  'border-b-6': {borderBottomWidth: 6},
  'border-r-6': {borderRightWidth: 6},
  'border-x-6': {borderLeftWidth: 6, borderRightWidth: 6},
  'border-y-6': {borderTopWidth: 6, borderBottomWidth: 6},
  'border-8': {borderWidth: 8},
  'border-t-8': {borderTopWidth: 8},
  'border-l-8': {borderLeftWidth: 8},
  'border-b-8': {borderBottomWidth: 8},
  'border-r-8': {borderRightWidth: 8},
  'border-x-8': {borderLeftWidth: 8, borderRightWidth: 8},
  'border-y-8': {borderTopWidth: 8, borderBottomWidth: 8},
  // Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  'shadow-2': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  'shadow-3': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  'shadow-4': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  'shadow-5': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  'shadow-6': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  'shadow-7': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  'shadow-8': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  'shadow-9': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  'shadow-10': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  'shadow-11': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  'shadow-12': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  'shadow-13': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  'shadow-14': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  'shadow-15': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  'shadow-16': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  'shadow-17': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  'shadow-18': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  'shadow-19': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  'shadow-20': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  'shadow-21': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  'shadow-22': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  'shadow-23': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  'shadow-24': {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
