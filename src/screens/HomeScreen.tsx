import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Transaction, Card, QuickAccess } from '../types';
import { fontStyles } from '../styles/fonts';
import MastercardIcon from '../components/MastercardIcon';
import UserIcon from '../components/UserIcon';
import QRIcon from '../components/QRIcon';
import TravelIcon from '../components/icons/TravelIcon';
import DeliveryIcon from '../components/icons/DeliveryIcon';
import BonusesIcon from '../components/icons/BonusesIcon';
import SupportIcon from '../components/icons/SupportIcon';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  MainTabs: undefined;
  Notifications: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const cards: Card[] = [
    {
      id: '1',
      type: 'debit',
      balance: '$4,098.12',
      lastFourDigits: '4385',
      gradient: ['#FF6B35', '#F7931E'],
    },
    {
      id: '2',
      type: 'virtual',
      balance: '$14.71',
      lastFourDigits: '9081',
      gradient: ['#8E8E93', '#6D6D70'],
    },
  ];

  const quickAccess: QuickAccess[] = [
    { id: '1', title: 'Travel', icon: 'travel' },
    { id: '2', title: 'Delivery', icon: 'delivery' },
    { id: '3', title: 'Bonuses', icon: 'bonuses' },
    { id: '4', title: 'Support', icon: 'support' },
  ];

  const todayTransactions: Transaction[] = [
    {
      id: '1',
      name: 'Matthew Billson',
      category: 'Money Transfer',
      amount: '$56.19',
      date: 'Jun 9',
      time: '12:08',
      type: 'expense',
      avatar: undefined,
      icon: 'moneyTransfer',
    },
  ];

  const yesterdayTransactions: Transaction[] = [
    {
      id: '2',
      name: 'Starbucks',
      category: 'Food',
      amount: '$122.47',
      date: 'Jun 8',
      time: '19:21',
      type: 'expense',
      icon: 'starbucks',
    },
    {
      id: '3',
      name: 'Netflix',
      category: 'Entertainment',
      amount: '$13.17',
      date: 'Jun 8',
      time: '08:53',
      type: 'expense',
      icon: 'netflix',
    },
  ];

  const renderCard = (card: Card, index: number) => (
    <ImageBackground
      key={card.id}
      source={require('../assets/background.jpg')}
      style={[
        styles.card,
        { marginLeft: index === 0 ? 0 : 8, marginRight: index === cards.length - 1 ? 0 : 8 }
      ]}
      imageStyle={styles.cardBackground}
    >
      <View style={[
        styles.cardOverlay,
        card.type === 'virtual' && styles.cardOverlayGray
      ]}>
        <View style={styles.cardHeader}>
          <MastercardIcon size={20} />
        </View>
        <Text style={styles.cardBalance}>{card.balance}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardType}>{card.type === 'debit' ? 'Debit' : 'Virtual'}</Text>
          <Text style={styles.cardNumber}>•• {card.lastFourDigits}</Text>
        </View>
      </View>
    </ImageBackground>
  );

  const renderQuickAccess = (item: QuickAccess) => (
    <TouchableOpacity key={item.id} style={styles.quickAccessItem}>
      {item.icon === 'travel' && <TravelIcon size={24} />}
      {item.icon === 'delivery' && <DeliveryIcon size={24} />}
      {item.icon === 'bonuses' && <BonusesIcon size={24} />}
      {item.icon === 'support' && <SupportIcon size={24} />}
      <Text style={styles.quickAccessText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderTransaction = (transaction: Transaction) => (
    <View key={transaction.id} style={styles.transactionCard}>
      <View style={styles.transactionItem}>
        <View style={styles.transactionLeft}>
          {transaction.icon === 'moneyTransfer' && (
            <Image source={require('../assets/moneyTransferIcon.png')} style={styles.brandIcon} />
          )}
          {transaction.icon === 'starbucks' && (
            <Image source={require('../assets/starbucksIcon.png')} style={styles.brandIcon} />
          )}
          {transaction.icon === 'netflix' && (
            <Image source={require('../assets/netflixIcon.png')} style={styles.brandIcon} />
          )}
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionName}>{transaction.name}</Text>
            <View style={styles.transactionCategory}>
              <View style={styles.categoryDot} />
              <Text style={styles.categoryText}>{transaction.category}</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          <Text style={styles.transactionDate}>{transaction.date}, {transaction.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.userIcon}>
              <UserIcon size={16} />
            </View>
            <Text style={styles.userName}>Charlotte</Text>
            <Ionicons name="chevron-forward" size={16} color="#FFFFFF" style={{marginTop:4}} />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity 
              style={styles.notificationIcon}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.qrIcon}>
              <QRIcon size={20} />
            </View>
          </View>
        </View>

        <View style={styles.quickAccessContainer}>
          {quickAccess.map(renderQuickAccess)}
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.cardsContainer}
          contentContainerStyle={styles.cardsContent}
        >
          {cards.map(renderCard)}
          <TouchableOpacity style={styles.addCard}>
            <Ionicons name="add" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.expensesContainer}>
          <View style={styles.expensesHeader}>
            <Text style={styles.expensesTitle}>
              Expenses in <Text style={styles.expensesMonth}>June</Text>
            </Text>
            <Text style={styles.expensesAmount}>$5,091</Text>
          </View>
          <View style={styles.expensesBar}>
            <View style={[styles.expenseSegment, styles.expenseSegment1]} />
            <View style={[styles.expenseSegment, styles.expenseSegment2]} />
            <View style={[styles.expenseSegment, styles.expenseSegment3]} />
            <View style={[styles.expenseSegment, styles.expenseSegment4]} />
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Today</Text>
          {todayTransactions.map(renderTransaction)}
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Yesterday</Text>
          {yesterdayTransactions.map(renderTransaction)}
        </View>
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
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 4,
    ...fontStyles.medium,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    padding: 8,
    marginRight: 8,
  },
  qrIcon: {
    padding: 8,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  quickAccessItem: {
    alignItems: 'center',
    marginTop: 16,
  },
  quickAccessText: {
    color: '#FFFFFF',
    fontSize: 12,
    ...fontStyles.regular,
  },
  cardsContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  cardsContent: {
    paddingHorizontal: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  card: {
    width: 142,
    height: 98,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardBackground: {
    borderRadius: 16,
  },
  cardOverlay: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  cardOverlayGray: {
    backgroundColor: 'rgba(64, 64, 64, 0.7)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardBalance: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 18,
    ...fontStyles.semiBold,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    color: '#FFFFFF',
    fontSize: 14,
    ...fontStyles.regular,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    ...fontStyles.regular,
  },
  addCard: {
    width: 40,
    height: 98,
    borderRadius: 16,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  expensesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expensesTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    lineHeight: 21,
    marginBottom: 12,
    ...fontStyles.medium,
  },
  expensesMonth: {
    color: '#FE5900',
  },
  expensesBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseSegment: {
    height: 8,
    borderRadius: 4,
  },
  expenseSegment1: { backgroundColor: '#B73C00', flex: 4, marginRight: 2 },
  expenseSegment2: { backgroundColor: '#FE5900', flex: 3, marginRight: 2 },
  expenseSegment3: { backgroundColor: '#FFA24D', flex: 2, marginRight: 2 },
  expenseSegment4: { backgroundColor: '#FFE0B8', flex: 2, marginRight: 0 },
  expensesAmount: {
    color: '#AEAEAE',
    fontSize: 18,
    marginBottom:12,
    ...fontStyles.medium,
  },
  transactionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  transactionsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 16,
    ...fontStyles.medium,
  },
  transactionCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 12,
    marginBottom: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  brandIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
    ...fontStyles.medium,
  },
  transactionCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FE5900',
    marginRight: 6,
  },
  categoryText: {
    color: '#8E8E93',
    fontSize: 14,
    ...fontStyles.regular,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
    ...fontStyles.medium,
  },
  transactionDate: {
    color: '#8E8E93',
    fontSize: 14,
    ...fontStyles.regular,
  },
});

export default HomeScreen;
