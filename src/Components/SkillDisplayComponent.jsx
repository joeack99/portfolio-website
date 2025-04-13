
function SkillDisplayComponent(){
    let skills = [
        "Java",
        "C#",
        "SQL",
        "Python",
        "Swift",
        "Consulting",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "-Placeholder here-",
    ];

    return (
    <div className="skill-display-parent-container">
        <div className="skill-container">
            <h4 className="heading-center">My Skills</h4>
            <div className="line-block"></div>
            <ul>
                {skills.map(displaySkill)}
            </ul>
        </div>

    </div>
    );
}

function displaySkill(skill, index){
    
    return (
        <li key={index+"skill"}>
            {skill}
        </li>
    );
}

export default SkillDisplayComponent;