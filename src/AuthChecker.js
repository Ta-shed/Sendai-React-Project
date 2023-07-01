import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthChecker = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the event listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <p>User is authenticated. User ID: {user.uid}</p>
      ) : (
        <p>User is not authenticated.</p>
      )}
    </div>
  );
};

export default AuthChecker;
