import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface DeliveryIconProps {
  size?: number;
}

const DeliveryIcon: React.FC<DeliveryIconProps> = ({ size = 24 }) => (
  <View style={styles.container}>
    <Svg width={size} height={size} viewBox="0 0 21 25" fill="none">
      <Path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M7.5 7.5H6.5V18.5H18.5V7.5H7.5Z" fill="#FE5900" />
      <Path fillRule="evenodd" clipRule="evenodd" d="M15.5 15.5H11.5V13.5H15.5V15.5Z" fill="#FE5900" />
      <Path fillRule="evenodd" clipRule="evenodd" d="M4.20718 3.07227L1.70718 0.572266L0.292969 1.98648L2.50009 4.1936L2.50056 18.6706C1.33511 19.0823 0.500079 20.1937 0.500079 21.5001C0.500079 23.1569 1.84322 24.5001 3.50008 24.5001C4.80629 24.5001 5.91753 23.6653 6.32937 22.5001H17.5859L19.293 24.2072L20.7072 22.793L18.7072 20.793L18.4143 20.5001H6.32937C6.02814 19.6478 5.35274 18.9723 4.50056 18.671L4.50008 3.77934L4.50006 3.36515L4.20718 3.07227Z" fill="#FE5900" />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
});

export default DeliveryIcon;



