import useAuth from '../shared/hooks/useAuth';

function Admin(){
    const { userData, logOut } = useAuth();
    return (<><h1>Estoy en Admin</h1>
    <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>
        <button onClick={logOut}>LOG OUT!</button>
    </>);
}

export default Admin;