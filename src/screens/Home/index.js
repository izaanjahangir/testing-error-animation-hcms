import React, {useState} from 'react';
import {View, Text} from 'react-native';

import style from './style';
import OutlineInput from '../../components/OutlineInput';

function Home() {
  const [email, setEmail] = useState('');

  return (
    <View style={style.container}>
      <OutlineInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        label="Type your email"
      />
    </View>
  );
}

export default Home;
