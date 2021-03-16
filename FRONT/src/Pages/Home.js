import useAuth from '../shared/hooks/useAuth';
function Home(){
  const { userData, logOut } = useAuth();
    return (
      <>
        <h1>HOME</h1>
       
      </>
    );
}

export default Home;