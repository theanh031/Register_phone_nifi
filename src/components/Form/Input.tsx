interface InputProps {
    title: string;
    label: string;
    type: string;
    nameFile: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    isValid?: boolean
}

const Input: React.FC<InputProps> = ({label, onChange, nameFile, type, value, title, onBlur, isValid}) => {
    return (
        <div className="flex gap-3 items-center justify-between text-xl">
            <label htmlFor={label}>{label}: </label>
            <input
                required
                className={`p-[8px] text-base border-2 border-solid  rounded ${isValid ? "outline-red-600 border-red-400" : "outline-slate-600 border-gray-400"}  `}
                id={label}
                type={type}
                name={nameFile}
                placeholder={`Type your ${title}, please !`}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
