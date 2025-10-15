import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface TabIconProps {
  name: 'home' | 'payments' | 'history' | 'analytics' | 'chats' | 'notifications';
  focused: boolean;
  size?: number;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused, size = 24 }) => {
  const activeColor = '#FE5900';
  const inactiveColor = '#FFFFFF';

  const getIconPath = () => {
    switch (name) {
      case 'home':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.625 8.25385L10 0.00384521L0.375 8.25385V19.1666H19.625V8.25385Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      case 'payments':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9972 0.0675659L15.4198 1.49015L19.6601 5.73045L20.2493 6.3197L19.6601 6.90895L15.4198 11.1493L13.9972 12.5719V9.1101H8.77839V3.52931H13.9972V0.0675659ZM7.00277 7.42434L5.58018 8.84694L1.3399 13.0872L0.750641 13.6764L1.3399 14.2657L5.58018 18.506L7.00277 19.9286V16.4669H12.2216V10.8861H7.00277V7.42434Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      case 'history':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.49497 0.666504C7.06429 0.666504 4.73313 1.63228 3.01435 3.35136C1.29558 5.07045 0.329987 7.40206 0.329987 9.83315C0.329987 12.2643 1.29558 14.5959 3.01435 16.315C4.73313 18.0341 7.06429 18.9998 9.49497 18.9998C11.9257 18.9998 14.2569 18.0341 15.9756 16.315C17.6944 14.5959 18.66 12.2643 18.66 9.83315C18.66 7.40206 17.6944 5.07045 15.9756 3.35136C14.2569 1.63228 11.9257 0.666504 9.49497 0.666504ZM8.66178 4.83331V10.6666H12.8277V8.99998H10.3281V4.83331H8.66178Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      case 'analytics':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3335 0.00854492H12.1668C16.7645 0.00854492 20.4917 3.73571 20.4917 8.33342V9.16675H19.6583H12.1668H11.3335V0.00854492ZM0.544754 11.6305C0.544754 7.03283 4.27192 3.30567 8.86958 3.30567H9.70291V4.139V10.7972H16.3612H17.1945V11.6305C17.1945 16.2283 13.4673 19.9554 8.86958 19.9554C4.27192 19.9554 0.544754 16.2283 0.544754 11.6305Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      case 'chats':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C7.34783 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 11.5498 0.359787 13.0626 1.03304 14.4265L0.153875 19.8411L5.60459 18.9823C6.39386 19.3684 7.23252 19.6499 8.09902 19.8177C7.87033 19.6331 7.65053 19.4357 7.44077 19.2259C5.87797 17.6631 5 15.5435 5 13.3333C5 11.1232 5.87797 9.00358 7.44077 7.44077C9.00358 5.87797 11.1232 5 13.3333 5C15.5435 5 17.6631 5.87797 19.2259 7.44077C19.4357 7.65053 19.6331 7.87033 19.8177 8.09903C19.4412 6.15434 18.492 4.34985 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM18.0474 8.61925C16.7972 7.36904 15.1014 6.66667 13.3333 6.66667C11.5652 6.66667 9.8695 7.36904 8.61925 8.61925C7.36904 9.8695 6.66667 11.5652 6.66667 13.3333C6.66667 15.1014 7.36904 16.7972 8.61925 18.0474C9.8695 19.2976 11.5652 20 13.3333 20C14.3587 20 15.3597 19.7638 16.2636 19.3215L19.8974 19.8941L19.3113 16.2843C19.7602 15.3751 20 14.3666 20 13.3333C20 11.5652 19.2976 9.8695 18.0474 8.61925Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      case 'notifications':
        return (
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2C8.34315 2 7 3.34315 7 5V8.58579L4.70711 10.8787C4.31658 11.2692 4.31658 11.9024 4.70711 12.2929C5.09763 12.6834 5.7308 12.6834 6.12132 12.2929L8.41421 10H11.5858L13.8787 12.2929C14.2692 12.6834 14.9024 12.6834 15.2929 12.2929C15.6834 11.9024 15.6834 11.2692 15.2929 10.8787L13 8.58579V5C13 3.34315 11.6569 2 10 2ZM6 15C6 16.1046 6.89543 17 8 17H12C13.1046 17 14 16.1046 14 15V14H6V15ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z"
            fill={focused ? activeColor : inactiveColor}
          />
        );
      default:
        return null;
    }
  };

  const getViewBox = () => {
    switch (name) {
      case 'home':
        return "0 0 20 20";
      case 'payments':
        return "0 0 21 20";
      case 'history':
        return "0 0 19 19";
      case 'analytics':
        return "0 0 21 20";
      case 'chats':
        return "0 0 20 20";
      case 'notifications':
        return "0 0 20 20";
      default:
        return "0 0 20 20";
    }
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={getViewBox()} fill="none">
        {getIconPath()}
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

export default TabIcon;
