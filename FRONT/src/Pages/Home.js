import useAuth from '../shared/hooks/useAuth';
function Home(){
  const { userData, logOut } = useAuth();
    return (
      <>
        <h1>HOME</h1>
        <p>ID: {userData && userData.id}</p>
        <p>EXP: {userData && userData.exp}</p>
        <button onClick={logOut}>LOG OUT!</button>
      </>
    );
}

export default Home;