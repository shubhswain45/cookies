// app/ShowCookie.js
import { cookies } from 'next/headers';

export default async function ShowCookie() {
  // Access cookies directly on the server side
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('myCookie')?.value;

  return (
    <div>
      <h1>Cookie Value:</h1>
      {myCookie ? <p>{myCookie}</p> : <p>No cookie found.</p>}
    </div>
  );
}
