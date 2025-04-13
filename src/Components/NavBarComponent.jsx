function NavBarComponent(props){
    function displayNavLink(data, index){

        return (
        <li key={"nav"+index}>
            <a className={
                props.currentPage==data.text?"nav-bar-link-current":"nav-bar-link"
                }
                
            href={data.url}>{data.text}</a>
        </li>
        );
    }


    let navLinks = [
        {text:"Home", url:"/"},
        {text:"About", url:"/about"},
        {text:"Contact", url:"/contact"},
    ];

    return (
    <div className="nav-bar">
        <ol className="nav-bar">
        {navLinks.map(displayNavLink)}
        </ol>
    </div>
    );
}



export default NavBarComponent;



