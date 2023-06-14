import FormRegisterPhone from "./FormRegisterPhone";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { useAppDispatch, useAppSelector } from "../hook";
import {
    clearForm,
    submitForm,
    updateForm,
} from "../../store/reducers/phoneNumber";
import { validateAll, validateText } from "../../util/validate";
import { useState } from "react";

const Index = () => {
    const [message, setMessage] = useState("");
    const [isValids, setIsValids] = useState(false);
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.phoneNumberReducer);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = await validateAll(formData);
        if (isValid) {
            const res = await dispatch(submitForm(formData));
            if (res.payload.status === "success") {
                dispatch(clearForm());
            } else {
                setMessage(res.payload.message);
            }
        }else {
            setMessage("Form is invalid");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch(updateForm({ [name]: value }));
    };
    const clearFromCurrent = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        dispatch(clearForm());
        setIsValids(false);
    };
    const onBlurInput = (
        event: React.FocusEvent<HTMLInputElement, Element>,
        regex: string
    ) => {
        if (!validateText(event.target.value, regex)) {
            setIsValids(true);
        } else {
            setIsValids(false);
        }
    };

    return (
        <div className="flex justify-center p-6 mt-8">
            <FormRegisterPhone title="Register Phone" onSubmit={handleSubmit}>
                <Input
                    label="MSISDM"
                    type="text"
                    nameFile="MSISDM"
                    title="phone number"
                    value={formData.MSISDM}
                    onChange={handleChange}
                    onBlur={(e) => onBlurInput(e, "^[0-9]{9}$")}
                    isValid={isValids}
                />
                <Input
                    label="ICCID"
                    type="text"
                    nameFile="ICCID"
                    title="ID"
                    value={formData.ICCID}
                    onChange={handleChange}
                    onBlur={(e) => onBlurInput(e, "^[0-9]{9}$")}
                    isValid={isValids}
                />
                <Input
                    label="First Name"
                    type="text"
                    nameFile="first_name"
                    title="first name"
                    value={formData.first_name}
                    onChange={handleChange}
                    onBlur={(e) => onBlurInput(e, "^[a-zA-Z0-9\\- ]{2,70}$")}
                    isValid={isValids}
                />
                <Input
                    label="Last Name"
                    type="text"
                    nameFile="last_name"
                    title="last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    onBlur={(e) => onBlurInput(e, "^[a-zA-Z0-9\\- ]{2,70}$")}
                    isValid={isValids}
                />
                <Input
                    label="Gender"
                    type="text"
                    nameFile="gender"
                    title="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    isValid={isValids}
                />
                <Input
                    label="Birth Date"
                    type="date"
                    nameFile="birth_date"
                    title="birth day"
                    value={formData.birth_date}
                    onChange={handleChange}
                />
                <p>{message}</p>
                <div className="flex flex-row justify-center items-center">
                    <Button title="Submit" isValid={isValids} />
                    <Button title="Clear" onClick={clearFromCurrent} />
                </div>
            </FormRegisterPhone>
        </div>
    );
};

export default Index;
