import React, { Fragment, Component } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import SubmitText from "../Component/SubmitText";

class InputNotification extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
    this.handleUpdate = this.updateValue.bind(this);
  }

  updateValue = (event = {}) => {
    this.setState({ msg: event });
  };

  render() {
    return (
      <Fragment>
        <Text>What can I remind you of?</Text>
        <TextInput
          name="msg"
          style={styles.textInput}
          value={this.state.msg}
          onChangeText={this.handleUpdate}
        />
        <SubmitText message={this.state.msg} />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15
  },
  textInput: {
    width: "80%",
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 12
  }
});

export default InputNotification;
