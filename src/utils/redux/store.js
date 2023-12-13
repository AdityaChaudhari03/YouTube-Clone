import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import videoInfo from "./videoInfo";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sidbar: sideBarSlice,
    search: searchSlice,
    details: videoInfo,
    chat:chatSlice,
  },
});

export default store;
