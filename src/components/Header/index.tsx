import NavBar from "./NavBar";
import NavBarElement from "./NavBarElement";

const Index = () => {
    const navBar = [{title: "Home", path: "/"},  {title: "Phone", path: "/phone"},{title: "About", path: "/about"}];
    return (
        <div className="flex justify-center">
            <NavBar>
                {navBar.map((item, index) => (
                    <NavBarElement title={item.title} key={index} path={item.path}/>
                ))}
            </NavBar>
        </div>
    );
};

export default Index;
