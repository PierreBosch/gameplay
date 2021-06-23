import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Image, Text } from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}