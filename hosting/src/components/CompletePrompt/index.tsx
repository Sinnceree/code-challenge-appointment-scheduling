import React from "react";
import { UserData } from "../../sdk";

const CompletePrompt = ({ user }: { user: UserData | null }) => {
  return (
    <div className="completed">
      You have submitted your appointment with <span>{user?.name}</span>
    </div>
  )
}

export default CompletePrompt