import React from "react";
import { checkUser } from "@/lib/checkUser";

export default function Navbar() {
  const user = checkUser();
  console.log(user);
  if (user) {
    console.log("User is logged in", user);
  } else {
    console.log("User is not logged in");
  }
  return <div>Navbar</div>;
}
