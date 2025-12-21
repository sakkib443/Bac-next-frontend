import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./CourseSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
  reducer: {
    courses: courseReducer,
    categories: categoryReducer,  
  },
});


 
