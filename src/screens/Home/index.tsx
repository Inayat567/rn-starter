import {View, Text, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Accordian,
  Avatar,
  Button,
  CheckBox,
  DateTimeSelector,
  DropDownSelector,
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
import BottomSheets from '../../components/BottomSheets';
import {COLORS} from '../../utils/constants/color';

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
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
  const [snapPoint, setSnapPoint] = useState<string | number>(1);
  const ref = useRef(null);

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

  const pickerData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <ScrollView
      style={[
        SHome.container,
        {
          backgroundColor: snapPoint === 1 ? COLORS.white : COLORS.gray,
        },
      ]}>
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
      <DropDownSelector
        data={pickerData}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
        value={selectedValue}
        setValue={setSelectedValue}
        // icon='diamond-sharp'
      />
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
      <H3
        text="Open bottom sheet"
        onPress={() => {
          setSnapPoint('40%');
          ref.current?.snapToIndex(1);
        }}
      />
      <BottomSheets
        bottomSheetRef={ref}
        snapPoint={snapPoint}
        setSnapPoint={setSnapPoint}>
        <Avatar src="https://picsum.photos/id/1/200/300" />
        <Avatar src="https://picsum.photos/id/1/200/300" size="l" />
      </BottomSheets>
    </ScrollView>
  );
};

export default Home;
