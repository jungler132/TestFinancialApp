import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Notification } from '../types';
import { fontStyles } from '../styles/fonts';
import TravelIcon from '../components/icons/TravelIcon';
import SentToIcon from '../components/icons/SentToIcon';
import NewLoginIcon from '../components/icons/NewLoginIcon';
import RightHeaderIcon from '../components/icons/RightHeaderIcon';

const NotificationsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState('All');
  const indicatorX = useRef(new Animated.Value(0)).current;
  const indicatorW = useRef(new Animated.Value(0)).current;
  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({}).current;

  const filters = ['All', 'Payments', 'System', 'Delivery', 'Travel'];

  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Received from Anna',
      amount: '+$110',
      date: '17 June 2025',
      time: '17:49',
      category: 'payments',
      isUnread: true,
      avatar: '👩',
      cardInfo: 'Debit •• 4385',
      balance: '$4,098.12',
    },
    {
      id: '2',
      title: 'See our limited offer!',
      description: 'Would you like to visit new countries? Maybe it\'s your time!',
      date: '16 June 2025',
      time: '23:08',
      category: 'travel',
      isUnread: false,
      icon: '✈️',
    },
    {
      id: '3',
      title: 'Sent to •• 2041',
      amount: '-$14.62',
      date: '16 June 2025',
      time: '06:18',
      category: 'payments',
      isUnread: false,
      icon: '↗️',
      cardInfo: 'Debit •• 4385',
      balance: '$3,987.5',
    },
    {
      id: '4',
      title: 'New login into account',
      description: 'You have logged in from a new location: iOS 26.0.1 • 109.255.84.7 • Spain',
      date: '24 March 2025',
      time: '15:44',
      category: 'security',
      isUnread: false,
      icon: '🛡️',
    },
  ];

  const groupedNotifications = notifications.reduce((acc, notification) => {
    const date = notification.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(notification);
    return acc;
  }, {} as Record<string, Notification[]>);

  const getDateLabel = (date: string) => {
    const parts = date.split(' ');
    const day = parts[0];
    const month = parts[1];
    
    if (date === '17 June 2025') {
      return 'TODAY, 17 JUNE';
    } else if (date === '16 June 2025') {
      return 'YESTERDAY, 16 JUNE';
    } else if (date === '24 March 2025') {
      return '24 MARCH';
    } else {
      return `${day} ${month.toUpperCase()}`;
    }
  };

  const handleActivate = (filter: string) => {
    setActiveFilter(filter);
    const layout = tabLayouts[filter];
    if (layout) {
      Animated.parallel([
        Animated.spring(indicatorX, {
          toValue: layout.x,
          useNativeDriver: false,
          friction: 10,
          tension: 120,
        }),
        Animated.timing(indicatorW, {
          toValue: layout.width,
          duration: 180,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  useEffect(() => {
    const layout = tabLayouts[activeFilter];
    if (layout) {
      indicatorX.setValue(layout.x);
      indicatorW.setValue(layout.width);
    }
  }, [activeFilter]);

  const renderFilter = (filter: string) => (
    <TouchableOpacity
      key={filter}
      style={styles.filterButton}
      onLayout={(e) => {
        const { x, width } = e.nativeEvent.layout;
        tabLayouts[filter] = { x, width };
        if (filter === activeFilter) {
          indicatorX.setValue(x);
          indicatorW.setValue(width);
        }
      }}
      onPress={() => handleActivate(filter)}
    >
      <Text style={[
        styles.filterText,
        activeFilter === filter && styles.activeFilterText
      ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  );

  const renderNotification = (notification: Notification) => (
    <View key={notification.id} style={styles.notificationItem}>
      <View style={styles.notificationLeft}>
        {notification.avatar ? (
          <View style={styles.notificationAvatar}>
            {notification.title.includes('Anna') ? (
              <Image 
                source={require('../assets/personAnna.jpg')} 
                style={styles.avatarImage}
                resizeMode="cover"
              />
            ) : (
              <Text style={styles.avatarText}>{notification.avatar}</Text>
            )}
          </View>
        ) : notification.category === 'travel' ? (
          <View style={styles.notificationIcon}>
            <TravelIcon size={20} />
          </View>
        ) : notification.category === 'payments' && notification.title.includes('Sent to') ? (
          <View style={styles.notificationIcon}>
            <SentToIcon size={20} />
          </View>
        ) : notification.title.includes('New login') ? (
          <View style={styles.notificationIcon}>
            <NewLoginIcon size={20} />
          </View>
        ) : (
          <View style={styles.notificationIcon}>
            <Text style={styles.iconText}>{notification.icon}</Text>
          </View>
        )}
        <View style={styles.notificationContent}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            {notification.isUnread && <View style={styles.unreadDot} />}
          </View>
          {notification.description && (
            <Text style={styles.notificationDescription}>{notification.description}</Text>
          )}
          {notification.amount && (
            <Text style={styles.notificationAmount}>{notification.amount}</Text>
          )}
          {notification.cardInfo && (
            <Text style={styles.notificationCardInfo}>{notification.cardInfo}</Text>
          )}
          {notification.balance && (
            <Text style={styles.notificationBalance}>{notification.balance}</Text>
          )}
          <View style={styles.notificationFooter}>
            <Text style={styles.notificationDate}>
              {notification.date}, {notification.time} · {notification.category.charAt(0).toUpperCase() + notification.category.slice(1)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <RightHeaderIcon size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        >
          <View style={styles.filtersRow}>
            {filters.map(renderFilter)}
            <Animated.View
              pointerEvents="none"
              style={[styles.slider, { transform: [{ translateX: indicatorX }], width: indicatorW }]}
            />
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.notificationsContainer} showsVerticalScrollIndicator={false}>
        {Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
          <View key={date} style={styles.dateGroup}>
            <Text style={styles.dateLabel}>{getDateLabel(date)}</Text>
            {dateNotifications.map(renderNotification)}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    ...fontStyles.medium,
  },
  filtersContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#1C1C1E',
    marginBottom: 0,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  filtersContent: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    marginRight: 16,
    marginBottom: 10,
    position: 'relative',
  },
  activeFilterButton: {
  },
  filterText: {
    color: '#8E8E93',
    fontSize: 16,
    ...fontStyles.regular,
  },
  activeFilterText: {
    color: '#FE5900',
  },
  slider: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#FE5900',
    borderRadius: 1,
    bottom: 0,
  },
  notificationsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateGroup: {
    marginTop: 12,
  },
  dateLabel: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 16,
    textTransform: 'uppercase',
    ...fontStyles.medium,
  },
  notificationItem: {
    marginBottom: 20,
  },
  notificationLeft: {
    flexDirection: 'row',
  },
  notificationAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 14,
  },
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    ...fontStyles.medium,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FE5900',
    marginLeft: 8,
  },
  notificationDescription: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
    ...fontStyles.regular,
  },
  notificationAmount: {
    color: '#FE5900',
    fontSize: 16,
    marginBottom: 4,
    ...fontStyles.medium,
  },
  notificationCardInfo: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 4,
    ...fontStyles.regular,
  },
  notificationBalance: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
    ...fontStyles.regular,
  },
  notificationFooter: {
    marginTop: 4,
  },
  notificationDate: {
    color: '#8E8E93',
    fontSize: 12,
    ...fontStyles.regular,
  },
});

export default NotificationsScreen;
