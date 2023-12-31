import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot } from 'firebase/firestore';

// export const useAllUsersInfo = () => {
//   const [usersInfo, setUsersInfo] = useState([]);

//   useEffect(() => {
//     const fetchAllUsersInfo = async () => {
//       try {
//         const usersQuery = query(collection(db, 'userInfo'), where('userStatus', '!=', 'Admin'));
//         const usersSnapshot = await getDocs(usersQuery);

//         if (!usersSnapshot.empty) {
//           const usersData = usersSnapshot.docs.map(doc => ({id:doc.id,data:doc.data()}));
//           setUsersInfo(usersData);
//         }
//       } catch (error) {
//         console.error('Error fetching users info:', error);
//       }
//     };

//     fetchAllUsersInfo();
//   }, []);

//   return usersInfo;
// };

export const useAllUsersInfo = (docCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  // lidando com memoryleak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;
      setLoading(true);
      const collectionRef = await collection(db, docCollection);
      try {
        let q;
        q = await query(
            collectionRef,
          );
        await onSnapshot(q, querySnapshot => {
          setDocuments(
            querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
