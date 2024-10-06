import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";

const ProfileScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleOnlineStatus = () => setIsOnline(!isOnline);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    console.log("User logged out");
  };

  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("../assets/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          marginTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => alert("Back button pressed!")}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            margin: "auto",
            fontFamily: "OpenSans-Bold",
          }}
        >
          Settings
        </Text>
      </View>
      <View style={styles.container}>
        {/* First Div */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Password and security</Text>
            <AntDesign name="right" size={12} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Notification settings</Text>
            <AntDesign name="right" size={12} color="black" />
          </TouchableOpacity>
        </View>

        {/* Second Div */}
        <View style={styles.section}>
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>Online status</Text>
            <View style={styles.switchContainer}>
              <Switch
                value={isOnline}
                onValueChange={toggleOnlineStatus}
                style={styles.switch}
                trackColor={{ true: "#0096C1", false: "#ccc" }}
                thumbColor={isOnline ? "#ffffff" : "#ffffff"}
              />
            </View>
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>Enable dark mode</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ true: "#0096C1", false: "#ccc" }}
                thumbColor={isDarkMode ? "#ffffff" : "#fffffff"}
                onValueChange={toggleDarkMode}
                value={isDarkMode}
                style={styles.switch}
              />
            </View>
          </View>
        </View>

        {/* Third Div */}
        <View style={styles.sectionLast}>
          <Text style={styles.sectionTitle}>Account Management</Text>
          <TouchableOpacity style={styles.buttonWithBorder}>
            <View>
              <Text style={styles.closeAccountText}>Close account</Text>
              <Text style={styles.smallText}>
                This will permanently close your account
              </Text>
            </View>
            <AntDesign name="right" size={12} color="black" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <View style={styles.logoutContainer}>
            <SimpleLineIcons
              name="logout"
              size={12}
              color="deepred"
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>

        {/* Custom Modal for Logout Confirmation */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Logging out?</Text>

              <Text style={styles.modalMessage}>
                Are you sure you want to log out from your account?
              </Text>

              {/* Modal Buttons */}
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={[styles.modalButton, styles.leftButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>No</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.rightButton]}
                  onPress={confirmLogout}
                >
                  <Text style={styles.confirmButtonText}>Yes</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 25,
    fontFamily: "OpenSans-Semibold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  section: {
    marginBottom: 30,
  },
  switchContainer: {
    width: 30,
    height: 15,
    justifyContent: "center",
    marginRight: 10,
  },
  switch: {
    transform: [{ scale: 0.8 }],
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: "#B2B2B2",
  },
  buttonWithBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    fontFamily: "OpenSans-SemiBold",
  },
  arrow: {
    fontSize: 18,
    color: "#0096C1",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: "#B2B2B2",
  },
  switchText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4a4a4a",
    fontFamily: "OpenSans-Bold",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "OpenSans-SemiBold",
  },
  closeAccountText: {
    fontSize: 12,
    color: "#888",
    fontWeight: "600",
    fontFamily: "OpenSans-Bold",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 12,
    fontFamily: "OpenSans-Bold",
    color: "#888",
  },
  logoutButton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: 8,
    fontWeight: "bold",
  },
  logoutText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "OpenSans-Bold",
  },

  logoutArrowBox: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
  },
  logoutArrow: {
    color: "red",
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,

    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0096C1",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "OpenSans-Bold",
  },
  modalMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "OpenSans-Bold",
  },
  modalButtonContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  leftButton: {
    borderRightWidth: 1,
    borderColor: "#ddd",
  },

  cancelButtonText: {
    color: "#0096C1",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "OpenSans-SemiBold",
  },
  confirmButtonText: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "OpenSans-SemiBold",
  },
});

export default ProfileScreen;
