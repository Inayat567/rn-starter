import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  Accordian,
  Avatar,
  Button,
  CheckBox,
  DateTimeSelector,
  InputField,
  Loader,
} from '../../components';
import moment from 'moment';
import SHome from './Home.styles';

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState({
    date: false,
    time: false,
  });

  return (
    <View style={SHome.container}>
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
      <CheckBox onPress={() => setChecked(!checked)} title="test" />
      <Text onPress={() => setShowDatePicker({date: true, time: false})}>
        Date: {moment(date).format('dd/mm/yyyy')}
      </Text>
      <Text onPress={() => setShowDatePicker({date: false, time: true})}>
        Time: {moment(time).format('hh:mm A')}
      </Text>
      {showDatePicker.date && (
        <DateTimeSelector
          date={date}
          mode="date"
          onSelect={date => {
            setShowDatePicker({date: false, time: false});
            setDate(new Date(date));
          }}
        />
      )}
      {showDatePicker.time && (
        <DateTimeSelector
          date={time}
          mode="time"
          onSelect={time => {
            setShowDatePicker({date: false, time: false});
            setTime(new Date(time));
          }}
        />
      )}
      <Loader isLoading={false} />
    </View>
  );
};

export default Home;
