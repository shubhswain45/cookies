// app/my-page/page.js (Server Component)
import { cookies } from 'next/headers';

export default function MyPage() {
  // Get the cookies object
  const cookieStore = cookies();

  // Access a specific cookie by name
  const myCookie = cookieStore.get('myCookieName')?.value;

  return (
    <div>
      <h1>Welcome to My Page</h1>
      {myCookie ? (
        <p>Your cookie value: {myCookie}</p>
      ) : (
        <p>No cookie found.</p>
      )}
    </div>
  );
}
