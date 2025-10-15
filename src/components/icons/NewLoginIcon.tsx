import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface NewLoginIconProps {
  size?: number;
  color?: string;
}

const NewLoginIcon: React.FC<NewLoginIconProps> = ({ size = 24, color = '#FE5900' }) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox="0 0 18 20" fill="none">
        <Path
          d="M9 0.000189244L8.42133 0.558605C6.76043 2.16137 4.20514 2.38492 2.29117 1.09491L1.96575 0.875581L0.666666 0V15.497L1.10404 15.7332L8.604 19.7832L8.99992 19.997L9 0.000189244Z"
          fill={color}
        />
        <Path
          opacity="0.2"
          d="M8.99992 0.000189244L9.57859 0.558605C11.2395 2.16137 13.7948 2.38492 15.7088 1.09491L16.0342 0.875581L17.3333 0V15.497L16.8959 15.7332L9.39592 19.7832L9 19.997L8.99992 0.000189244Z"
          fill={color}
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

export default NewLoginIcon;

