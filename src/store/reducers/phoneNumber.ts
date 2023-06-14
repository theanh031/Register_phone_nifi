import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { phoneNumberState } from "../../types";
import { addPhoneNumber } from "../../util/api";


const initialState: phoneNumberState = {
    MSISDM: "",
    ICCID: "",
    first_name: "",
    last_name: "",
    gender: "",
    birth_date: "",
};

export const submitForm = createAsyncThunk(
    'phoneNumber/submitForm',
    async (formData: phoneNumberState) => {
        const response = await addPhoneNumber(formData)
        const data = await response.data
        return data
    }

)

const phoneNumberSlice = createSlice({
    name: 'phoneNumber',
    initialState,
    reducers: {
        updateForm: (state: any, action:PayloadAction<phoneNumberState>) => {
            return {...state, ...action.payload}
        },
        clearForm: (state: any) => {
            return initialState
        }
    },
    extraReducers(builder) {
        builder
          .addCase(submitForm.fulfilled, (state, action) => {
            console.log("success");
            
            return initialState
          })
          .addCase(submitForm.rejected, (state, action) => {
            console.log("fail");
            
          })
    }
    
})

export const {updateForm, clearForm} = phoneNumberSlice.actions
export const phoneNumberReducer = phoneNumberSlice.reducer

