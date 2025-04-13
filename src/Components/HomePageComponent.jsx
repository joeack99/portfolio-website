import NavBarComponent from "./NavBarComponent";
import SkillDisplayComponent from "./SkillDisplayComponent";

function HomePageComponent(){


    return (
    <div>
        <NavBarComponent currentPage="Home"/>
        <SkillDisplayComponent />
    </div>
    );
}


export default HomePageComponent;