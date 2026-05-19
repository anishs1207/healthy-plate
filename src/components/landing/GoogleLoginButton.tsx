"use client";

import { authClient } from "@/lib/authClient";

export default function GoogleLoginButton() {
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/(dashboard)",
        });
    };

    return (
        <button
            onClick={handleGoogleSignIn}
            className="px-4 py-2 bg-blue-600 text-white rounded"
        >
            Sign in with Google
        </button>
    );
}
