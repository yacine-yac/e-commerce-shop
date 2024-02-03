import "./style/header-dash.css";
export function HeaderDash({handler}:{handler:()=>void}){
    return <>
        <header className="center-v">
                <span   onClick={handler} className="center profil">
                    <img src="/vercel.svg" />
                </span>
        </header>
    </>
}