import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Constants, Notifications, Permissions } from "expo";
import { ShakeEventListener } from "./ShakeEventListener";

class SubmitText extends Component {
  constructor() {
    super();
    this.state = {
      msgOld: "halo"
    };
    this.notifyMe = this.notifyMe.bind(this);
  }

  notifyMe = () => {
    if (this.props.message != this.state.msgOld) {
      const localNotif = {
        title: this.props.message,
        body: "RemindMe",
        android: {
          color: "#ff0000",
          priority: "high"
        }
      };

      const scheduleOptions = {
        time: new Date().getTime()
      };

      Notifications.scheduleLocalNotificationAsync(localNotif, scheduleOptions);
      this.setState({ msgOld: this.props.message });
    }
  };

  componentDidMount = async () => {
    let permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && permission.status === "granted") {
      console.log("Permission granted");
    }

    ShakeEventListener.addListener(() => {
      console.log("device shaked");
      this.notifyMe();
    });
  };

  componentWillUnmount = () => {
    console.log("device will unmount");
    ShakeEventListener.removeListener();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          style={styles.button}
          title="Remind Me"
          onPress={this.notifyMe}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: "5px"
  }
});

export default SubmitText;
