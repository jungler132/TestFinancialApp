import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SentToIconProps {
  size?: number;
  color?: string;
}

const SentToIcon: React.FC<SentToIconProps> = ({ size = 24, color = '#FE5900' }) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M6.66667 3.33333L10 3.97496e-08L13.3333 3.33333L13.3333 4.16667L11.25 4.16667L11.25 12.5L8.75 12.5L8.75 4.16667L6.66667 4.16667L6.66667 3.33333Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.92893 17.0711C1.05357 15.1957 8.7622e-08 12.6522 1.19249e-07 10C1.50876e-07 7.34783 1.05357 4.80433 2.92893 2.92892C4.14327 1.71458 5.63776 0.844833 7.26048 0.382584L5 2.643L5 5.83342L7.08333 5.83342L7.08333 14.1667L12.9167 14.1667L12.9167 5.83342L15 5.83342L15 2.643L12.7395 0.382584C14.3622 0.844834 15.8567 1.71458 17.0711 2.92892C18.9464 4.80433 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34783 20 4.8043 18.9464 2.92893 17.0711Z"
          fill={color}
          fillOpacity="0.2"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SentToIcon;

