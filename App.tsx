import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/view/Home';
import Login from './src/view/Login';
import AsyncStorage from '@react-native-community/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

class App extends React.Component {

  state = {
    hasUser: null
  };

  async componentDidMount() {
    crashlytics().log('App mounted.');

    const hasUser = Boolean(await AsyncStorage.getItem('@hasUser') || "false");
    console.log(hasUser);

    this.setState({ hasUser });
  }

  login = () => {
    AsyncStorage.setItem('@hasUser', String(true));
    this.setState({ hasUser: true })
  }

  logout = () => {
    AsyncStorage.setItem('@hasUser', String(false));
    this.setState({ hasUser: false })
  }

  render() {
    const { hasUser } = this.state;

    if (hasUser == null)
    {
      return (<View style={styles.container}>
        <Text>Loading...</Text>
      </View>);
    }

    return (
      <View style={styles.container}>
        {hasUser && <Home logout={() => crashlytics().crash()} />}
        {!hasUser && <Login login={this.login} />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});

export default App;