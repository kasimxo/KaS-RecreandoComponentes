import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function MessageInput() {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  return (
    <View style={styles.mesaggeContainer}>
      <View style={styles.mesaggeBar}>
        <View style={styles.emojis}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-emoji-grin'
            viewBox='0 0 16 16'
          >
            <path d='M12.946 11.398A6.002 6.002 0 0 1 2.108 9.14c-.114-.595.426-1.068 1.028-.997C4.405 8.289 6.48 8.5 8 8.5s3.595-.21 4.864-.358c.602-.07 1.142.402 1.028.998a5.95 5.95 0 0 1-.946 2.258m-.078-2.25C11.588 9.295 9.539 9.5 8 9.5s-3.589-.205-4.868-.352c.11.468.286.91.517 1.317A37 37 0 0 0 8 10.75a37 37 0 0 0 4.351-.285c.231-.407.407-.85.517-1.317m-1.36 2.416c-1.02.1-2.255.186-3.508.186s-2.488-.086-3.507-.186A5 5 0 0 0 8 13a5 5 0 0 0 3.507-1.436ZM6.488 7c.114-.294.179-.636.179-1 0-1.105-.597-2-1.334-2C4.597 4 4 4.895 4 6c0 .364.065.706.178 1 .23-.598.662-1 1.155-1 .494 0 .925.402 1.155 1M12 6c0 .364-.065.706-.178 1-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.8 2.8 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6' />
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14' />
          </svg>
        </View>
        <TextInput
          placeholder='Write a mesagge'
          placeholderTextColor='#ffffff'
          style={{
            alignSelf: 'center',
            height: 30,
            borderTopWidth: 0,
            textAlign: 'left',
            borderWidth: 0,
            borderColor: isTextInputFocused == true ? 'blue' : 'blue',
            outlineStyle: 'none',
          }}
          //value={cardContent}
          //onChangeText={(text) => setCardContent(text)}
          //ref={textInputRef}
          underlineColorAndroid='transparent'
          maxLength={250}
          onFocus={() => setTextInputFocused(true)}
        ></TextInput>
      </View>
      <View style={styles.audioBuble}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-mic-fill'
          viewBox='0 0 16 16'
        >
          <path d='M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z' />
          <path d='M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5' />
        </svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  mesaggeContainer: {
    width: '85%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 5,
    position: 'absolute',
    bottom: 5,
  },
  mesaggeBar: {
    backgroundColor: '#ffffff',
    height: 35,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 30,
    marginRight: 5,
  },
  audioBuble: {
    backgroundColor: '#07857b',
    height: 35,
    width: 35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: '100%',
    color: '#ffffff',
  },
  emojis: {
    height: 35,
    width: 35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#878c8f',
  },
});
