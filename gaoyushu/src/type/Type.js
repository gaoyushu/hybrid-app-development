import React from 'react';
import {ScrollView } from 'react-native';

import Search from './Search';
import Switch from './Switch';
import List from './List';

const Type = () => {
	return (
    <ScrollView>
      <Search />
      <Switch />
      <List />
    </ScrollView>
	);
};

export default Type;