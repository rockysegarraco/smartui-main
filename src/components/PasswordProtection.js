import { useState, useEffect } from "react";

export default function PasswordProtection({ children }) {
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored verification on mount
  useEffect(() => {
    // Check if password has been verified in this session
    const verified = sessionStorage.getItem('isPasswordVerified') === 'true';
    setIsPasswordVerified(verified);
    setIsLoading(false);
  }, []);

  // Password verification handler
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Change 'sparkle123' to your desired password
    if (passwordInput === 'sparkle123') {
      setIsPasswordVerified(true);
      setPasswordError(false);
      // Store verification in session storage so user doesn't have to enter again
      sessionStorage.setItem('isPasswordVerified', 'true');
    } else {
      setPasswordError(true);
      setPasswordInput(""); // Clear input on error
    }
  };

  // Show loading while checking
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Render password screen if not verified
  if (!isPasswordVerified) {
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg-fruit.jpg')" }}
      >
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <img
              src="/img/c2c-logo-dark.svg"
              alt="Logo"
              className="h-8 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-[#252D6C]">
              Protected Content
            </h2>
            <p className="text-gray-600 mt-2">
              Please enter the passcode to access this site
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <input
                type="password"
                className={`w-full px-4 py-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4363F9]`}
                placeholder="Enter passcode"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  Invalid passcode. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#4363F9] text-white py-2 px-4 rounded-lg hover:bg-[#3a56de] transition-colors"
            >
              Access Site
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If verified, render children
  return children;
}