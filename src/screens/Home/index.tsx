import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  Accordian,
  Avatar,
  Button,
  CheckBox,
  DateTimeSelector,
  H1,
  H2,
  H3,
  InputField,
  Loader,
  Radio,
  RangeSliders,
} from '../../components';
import moment from 'moment';
import SHome from './Home.styles';
import {BoldText, NormalText} from '../../components/Heading';

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [showDatePicker, setShowDatePicker] = useState({
    date: false,
    time: false,
  });

  const data = [
    {
      id: 1,
      selected: false,
      label: 'Male',
    },
    {
      id: 2,
      selected: false,
      label: 'Female',
    },
    {
      id: 3,
      selected: false,
      label: 'Other',
    },
  ];

  return (
    <ScrollView style={SHome.container}>
      <H1 text="Heading 1" />
      <H2 text="Heading 2" />
      <H3 text="Headin 3" />
      <NormalText text="Normal Text" />
      <BoldText text="Bold Text" />
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
      <H2
        text={`Date: ${moment(date).format('DD/MM/YYYY')}`}
        onPress={() => setShowDatePicker({date: true, time: false})}
      />
      <H2
        text={`Time: ${moment(time).format('hh:mm A')}`}
        onPress={() => setShowDatePicker({date: false, time: true})}
      />
      <InputField
        value={name}
        onChangeText={name => setName(name)}
        placeholder="Enter name"
        icon="person-sharp"
        disable={false}
        // multiline
      />
      <Radio data={data} selectOption={setGender} selectedOption={gender} />
     
      <RangeSliders
        value={value}
        onChange={(value: number) => setValue(value)}
      />

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
    </ScrollView>
  );
};

export default Home;
