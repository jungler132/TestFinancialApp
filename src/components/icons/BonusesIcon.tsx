import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface BonusesIconProps { size?: number; }

const BonusesIcon: React.FC<BonusesIconProps> = ({ size = 24 }) => (
  <View style={styles.container}>
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M6.5 4.5C6.5 3.39543 7.39543 2.5 8.5 2.5C9.6046 2.5 10.5 3.39543 10.5 4.5V7H12.5V4.5C12.5 3.39543 13.3954 2.5 14.5 2.5C15.6046 2.5 16.5 3.39543 16.5 4.5C16.5 4.72614 16.3203 5.58463 15.4453 6.16795L13.9453 7.16795L15.0547 8.83205L16.5547 7.83205C18.0797 6.81537 18.5 5.27386 18.5 4.5C18.5 2.29086 16.7091 0.5 14.5 0.5C13.3053 0.5 12.2329 1.02376 11.5 1.85418C10.7671 1.02376 9.6947 0.5 8.5 0.5C6.29086 0.5 4.5 2.29086 4.5 4.5C4.5 5.27386 4.92027 6.81537 6.4453 7.83205L7.9453 8.83205L9.0547 7.16795L7.5547 6.16795C6.67973 5.58463 6.5 4.72614 6.5 4.5Z" fill="#FE5900" />
      <Path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M0.5 6.5H22.5V12H21.5V22.5H1.5V12H0.5V6.5Z" fill="#FE5900" />
      <Path fillRule="evenodd" clipRule="evenodd" d="M21.5 12H1.5V14H10.5V22.5H12.5V14H21.5V12Z" fill="#FE5900" />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
});

export default BonusesIcon;



