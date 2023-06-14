import { ReactNode } from "react";

interface FormRegisterPhoneProps {
    title: string;
    children: ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormRegisterPhone: React.FC<FormRegisterPhoneProps> = ({children, title, onSubmit}) => {
    
    return (
        <div>
            <p className="text-center text-3xl mb-7">{title}</p>
            <form
                className="flex flex-col gap-6 justify-between"
                onSubmit={onSubmit}
            >
                {children}
                
            </form>
        </div>
    );
};

export default FormRegisterPhone;
