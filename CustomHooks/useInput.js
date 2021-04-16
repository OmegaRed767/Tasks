import React, {useState} from 'react';
import colors from '../Colors/colors';
function useInput(data) {
  const [entered_text, set_entered_text] = useState(data);
  const get_length = entered_text.trim().length === 0;
  const bind = {
    placeholderTextColor: colors.white,
    value: entered_text,
    onChangeText: e => {
      set_entered_text(e);
    },
  };
  return [get_length, entered_text, bind];
}
export default useInput;
