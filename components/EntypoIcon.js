import { Entypo } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function FontAwesomeIcon(props) {
  return (
    <Entypo
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
