import { Link } from "expo-router";
import { Component } from "react";
import { Button, Text, View } from "react-native";
// react-native-safe-area-context
import { SafeAreaView } from "react-native-safe-area-context";

class App extends Component {
  state = {
    name: "John",
    age: 20,
  };

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "Ahmed", age: 25 });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>{this.state.name + " " + this.state.age}</Text>
          <Link href="/auth/login_screen" asChild>
            <Button title="Login" />
          </Link> 
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
