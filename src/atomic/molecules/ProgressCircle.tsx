import React from 'react';
import {
  classNames,
  ProgressCircleProps,
  TextBox,
  useCircleSpecs,
  useVarianColor,
  Box,
} from '../..';
import {Animated} from 'react-native';
import {Circle, G, Svg} from 'react-native-svg';
import {COLORS} from '../../config/Colors';
import useAnimationProgress from '../../hook/useAnimationProgress';

export const ProgressCircle = ({
  value = 0,
  varian = 'primary',
  label,
  className,
  classLabel,
  showLabel,
  size = 50,
  colorBackground,
  colorProgress,
  strokeWidth = 8,
  renderLabel,
  ...rest
}: ProgressCircleProps) => {
  const progress = useAnimationProgress({
    toValue: value,
    useNativeDriver: false,
  });
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const {radius, circumference, strokeDasharray} = useCircleSpecs({
    size,
    strokeWidth,
  });

  const classVarian = useVarianColor({varian});

  const renderCustomLabel = () => {
    if (renderLabel) {
      return renderLabel(value);
    }
    return (
      <TextBox
        className={classNames(
          'text-sm text-center',
          classVarian.text,
          classLabel,
        )}>
        {label ?? `${value}%`}
      </TextBox>
    );
  };

  return (
    <Box
      className={classNames(
        `relative center w-[${size}] h-[${size}]`,
        className,
      )}
      {...rest}>
      {showLabel && <Box className="absolute">{renderCustomLabel()}</Box>}
      <Svg height={size} width={size} viewBox="0 0 100 100">
        <G transform="rotate(-90, 50, 50)">
          <Circle
            cx={size}
            cy={size}
            r={radius}
            stroke={colorBackground ?? COLORS['gray-400']}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <AnimatedCircle
            cx={size}
            cy={size}
            r={radius}
            stroke={colorProgress ?? classVarian.color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={progress.interpolate({
              inputRange: [0, 100],
              outputRange: [circumference, 0],
              extrapolate: 'clamp',
            })}
          />
        </G>
      </Svg>
    </Box>
  );
};
