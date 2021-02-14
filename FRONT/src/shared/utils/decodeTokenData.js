export default function decodeTokenData(token) {
    if (!token) {
      return null;
    }
    const tokenPieces = token.split('.');// el token vien en 3 partes y nos interesa el segundo
    const tokenBase64 = tokenPieces[1];//cogemos el segundo
    const decodedToken = atob(tokenBase64);
    const otra = window.atob(tokenBase64);
    console.log(otra);
    return JSON.parse(decodedToken);
  }