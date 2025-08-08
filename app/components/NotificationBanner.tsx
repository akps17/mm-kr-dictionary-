import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from './Theme';

type NotificationProps = {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
  onDismiss: () => void;
};

export function NotificationBanner({ message, type, duration = 4000, onDismiss }: NotificationProps) {
  const C = useThemedColors();
  const [slideAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    // Slide in
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();

    // Auto dismiss
    const timer = setTimeout(() => {
      dismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    Animated.spring(slideAnim, {
      toValue: -100,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start(() => {
      onDismiss();
    });
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#10B981';
      case 'info':
        return '#3B82F6';
      case 'warning':
        return '#F59E0B';
      case 'error':
        return '#EF4444';
      default:
        return C.brand;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'checkmark-circle';
      case 'info':
        return 'information-circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'alert-circle';
      default:
        return 'notifications';
    }
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        { 
          backgroundColor: getBackgroundColor(),
          transform: [{ translateY: slideAnim }]
        }
      ]}
    >
      <View style={styles.content}>
        <Ionicons 
          name={getIcon()} 
          size={20} 
          color="white" 
          style={styles.icon}
        />
        <Text style={styles.message} numberOfLines={2}>
          {message}
        </Text>
        <TouchableOpacity onPress={dismiss} style={styles.closeButton}>
          <Ionicons name="close" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: 50, // Account for status bar
    paddingBottom: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  message: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  closeButton: {
    padding: 4,
    marginLeft: 8,
  },
});

// Notification Manager
type Notification = {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
};

class NotificationManager {
  private listeners: ((notifications: Notification[]) => void)[] = [];
  private notifications: Notification[] = [];

  subscribe(listener: (notifications: Notification[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  show(notification: Omit<Notification, 'id'>) {
    const id = Date.now().toString();
    const newNotification = { ...notification, id };
    
    this.notifications = [newNotification, ...this.notifications];
    this.notifyListeners();
    
    return id;
  }

  dismiss(id: string) {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.notifications));
  }
}

export const notificationManager = new NotificationManager();

// Hook to use notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    return notificationManager.subscribe(setNotifications);
  }, []);

  return {
    notifications,
    showNotification: (notification: Omit<Notification, 'id'>) => 
      notificationManager.show(notification),
    dismissNotification: (id: string) => 
      notificationManager.dismiss(id),
  };
}

// Notification Container Component
export function NotificationContainer() {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <>
      {notifications.map((notification) => (
        <NotificationBanner
          key={notification.id}
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onDismiss={() => dismissNotification(notification.id)}
        />
      ))}
    </>
  );
}