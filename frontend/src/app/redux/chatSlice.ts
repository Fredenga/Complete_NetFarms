import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Ichat {
  _id: string;
  email: string;
  text: string;
}
interface Chat {
  Messages: Ichat[];
}

const initialState: Chat = {
  Messages: [],
};
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    storeChats(state, action: PayloadAction<Ichat[]>) {
      const ids = state.Messages.map((message) => message._id);
      action.payload.forEach((chat) => {
        if (!ids.includes(chat._id)) {
          state.Messages.push(chat);
        }
      });
    },
    removeChats(state, action) {
      state.Messages = [];
    },
  },
});

export const { storeChats, removeChats } = chatSlice.actions;
export default chatSlice.reducer;
