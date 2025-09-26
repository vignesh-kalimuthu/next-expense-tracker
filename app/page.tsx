import { currentUser } from "@clerk/nextjs/server";
import Guest from "../components/Guest";
export default async function Homepage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="text-red-400 dark:text-red-300">
      <h1>Homepage</h1>
    </div>
  );
}
