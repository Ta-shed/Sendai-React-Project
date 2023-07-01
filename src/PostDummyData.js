import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app, auth } from './firebase'; // Import the 'app' and 'auth' objects

const PostDummyData = () => {
  const postDummyDatabase = async () => {
    const dummyData = {
      "exchangeRates": {
        "USD": {
          "EUR": 0.85,
          "GBP": 0.72,
          "JPY": 110.55,
          "CAD": 1.23
        },
        "EUR": {
          "USD": 1.18,
          "GBP": 0.85,
          "JPY": 129.41,
          "CAD": 1.49
        },
        "GBP": {
          "USD": 1.38,
          "EUR": 1.18,
          "JPY": 152.86,
          "CAD": 1.76
        },
        "JPY": {
          "USD": 0.0091,
          "EUR": 0.0077,
          "GBP": 0.0065,
          "CAD": 0.011
        },
        "CAD": {
          "USD": 0.81,
          "EUR": 0.67,
          "GBP": 0.57,
          "JPY": 91.24
        }
      },
      "transferFees": {
        "USD": 5,
        "EUR": 3,
        "GBP": 4,
        "JPY": 300,
        "CAD": 6
      },
      "supportedCurrencies": ["USD", "EUR", "GBP", "JPY", "CAD"]
    }
    const user = auth.currentUser;

    try {
      if (user) {
        const idToken = await user.getIdToken();
        const database = getDatabase(app); // Pass the 'app' object
        const dummyRef = ref(database, '/dummyDatabase');

        await set(dummyRef, dummyData, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        console.log('Dummy database posted to Firebase successfully!');
      } else {
        throw new Error('User is not authenticated.');
      }
    } catch (error) {
      console.error('Error posting dummy database to Firebase:', error);
    }
  };

  return (
    <div>
      <button onClick={postDummyDatabase}>Post Dummy Database</button>
    </div>
  );
};

export default PostDummyData;



