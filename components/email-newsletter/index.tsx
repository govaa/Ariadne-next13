import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';

export default () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const subscribe = async () => {
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios.post("/api/emailsignup", {email});
            setState("SUCCESS");
        } catch (e) {
            if (axios.isAxiosError(e)) {
                setErrorMessage(e.response?.data?.error);
            } else {
                setErrorMessage("An error occurred while trying to subscribe.");
            }
            setState("ERROR");
        }
    }

  return (
    <div className="domain-search-area pt-1 pb-80 mb-4">
      <div className="container">
        <div className="domain-search-content">
          <h2>"Signup for industry updates, free tools and much more!"</h2>
          <form>
            <input className="form-control" type="text" placeholder="Business Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="button" disabled={state === 'LOADING'} onClick={subscribe}>Signup</button>
          </form>
        </div>
        {state === 'ERROR' && (
          <p className="domain-search-content text-danger">{errorMessage}</p>
        )}
        {state === 'SUCCESS' && (
          <p className="domain-search-content text-success">Thank you for signing up!</p>
        )}
      </div>
    </div>
  );
}
