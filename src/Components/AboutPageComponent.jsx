import NavBarComponent from "./NavBarComponent";
import SkillDisplayComponent from "./SkillDisplayComponent";

function AboutPageComponent(){


    return (
    <div>
        <NavBarComponent currentPage="About"/>
        <SkillDisplayComponent />

    </div>
    );
}


export default AboutPageComponent;