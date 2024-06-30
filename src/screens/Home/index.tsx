import {View, Text} from 'react-native';
import React from 'react';
import {Accordian, Avatar, Button} from '../../components';

const Home = () => {
  return (
    <View>
      <Button title="test" onPress={() => {}} />
      <Avatar src="https://picsum.photos/id/1/200/300" size="s" />
      <Accordian heading="test">
        <Avatar
          src="https://picsum.photos/id/1/200/300"
          size="s"
          style={{alignSelf: 'center'}}
        />
        <Button title="test" onPress={() => {}} />
      </Accordian>
    </View>
  );
};

export default Home;
