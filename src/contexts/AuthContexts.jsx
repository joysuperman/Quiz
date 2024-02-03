import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	// Signup Function
	async function signup(email, password, userName) {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password);

		// update Profile
		await updateProfile(auth.currentUser, {
			displayName: userName,
		});
		const user = auth.currentUser;
		setCurrentUser({
			...user,
		});
	}

	// Login Function
	async function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	// Logout Function
	async function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && <React.Fragment>{children}</React.Fragment>}
		</AuthContext.Provider>
	);
}
