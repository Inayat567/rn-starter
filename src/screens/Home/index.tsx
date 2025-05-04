import {
  View,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
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
import {
  DropDownData,
  GENDER,
  imagePlaceholderUrl,
  keywords,
  OS,
} from '../../utils/constants/keywords';

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
  const ref = useRef<any>(null);

  return (
    <ScrollView
      style={[
        SHome.container,
        {
          backgroundColor: snapPoint === 1 ? COLORS.white : COLORS.gray,
        },
      ]}>
      <TouchableWithoutFeedback
        onPress={() => setShowDatePicker({date: false, time: false})}>
        <View style={{flex: 1}}>
          <H1 text={keywords.headingOne} />
          <H2 text={keywords.headingTwo} />
          <H3 text={keywords.headingThree} />
          <NormalText text={keywords.normalText} />
          <BoldText text={keywords.boldText} />
          <Button title={keywords.clickMe} onPress={() => {}} />
          <Avatar src={imagePlaceholderUrl} size="l" />
          <Accordian heading={keywords.title}>
            <Avatar
              src={imagePlaceholderUrl}
              size="s"
              style={{alignSelf: 'center'}}
            />
            <Button title={keywords.clickMe} onPress={() => {}} />
          </Accordian>
          <CheckBox
            onPress={() => setChecked(!checked)}
            title={keywords.check}
          />

          {showDatePicker.date ? (
            <DateTimeSelector
              date={date}
              mode="date"
              onSelect={date => {
                if (Platform.OS === OS.android) {
                  setShowDatePicker({date: false, time: false});
                }
                setDate(new Date(date));
              }}
            />
          ) : (
            <H2
              text={`${keywords.date}${moment(date).format('DD/MM/YYYY')}`}
              onPress={() => setShowDatePicker({date: true, time: false})}
            />
          )}

          {showDatePicker.time ? (
            <DateTimeSelector
              date={time}
              mode="time"
              onSelect={time => {
                if (Platform.OS === OS.android) {
                  setShowDatePicker({date: false, time: false});
                }
                setTime(new Date(time));
              }}
            />
          ) : (
            <H2
              text={`${keywords.time}${moment(time).format('hh:mm A')}`}
              onPress={() => setShowDatePicker({date: false, time: true})}
            />
          )}
          <InputField
            value={name}
            onChangeText={name => setName(name)}
            placeholder={keywords.inputPlaceHolder}
            rightIcon="person-sharp"
            disable={false}
            // multiline
          />
          <Radio
            data={GENDER}
            selectOption={setGender}
            selectedOption={gender}
          />
          <DropDownSelector
            placeholder={keywords.dropDownPlaceholder}
            data={DropDownData}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            value={selectedValue}
            setValue={setSelectedValue}
            // icon='diamond-sharp'
          />
          <RangeSliders
            title={keywords.distance}
            value={value}
            onChange={(value: number) => setValue(value)}
          />
          <Loader isLoading={false} />
          <H3
            text={keywords.openBottomSheet}
            onPress={() => {
              setSnapPoint('40%');
              ref.current?.snapToIndex(1);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <BottomSheets
        bottomSheetRef={ref}
        snapPoint={snapPoint}
        setSnapPoint={setSnapPoint}>
        <Avatar src={imagePlaceholderUrl} />
        <Avatar src={imagePlaceholderUrl} size="l" />
      </BottomSheets>
    </ScrollView>
  );
};

export default Home;
