
interface ButtonProps {
    title: string;
    onClick?: (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isValid?: boolean;
}
const Button: React.FC<ButtonProps> = ({ title, onClick, isValid}) => {
    return (
        <button disabled={isValid} onClick={onClick} className={`bg-black ${isValid ? "opacity-30 cursor-no-drop" : "hover:bg-gray-500 hover:text-black"} text-white w-1/4 h-10 rounded-sm m-auto transition-colors`}>
            {title}
        </button>
    );
};

export default Button;
