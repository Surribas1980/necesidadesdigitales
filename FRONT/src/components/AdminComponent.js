import useAuth from "../shared/hooks/useAuth";


export default function AdminComponent({children}){
    const { userData } = useAuth('');

    return <>{userData.rol === 'admin' ? children : null}</>;
}