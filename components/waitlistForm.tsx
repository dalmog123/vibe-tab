'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { db } from '../lib/firebase';
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs
} from 'firebase/firestore';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const waitlistRef = collection(db, 'waitlist');
            const q = query(waitlistRef, where('email', '==', email.trim().toLowerCase()));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                Swal.fire({
                    title: 'Already Signed Up!',
                    text: 'Dont worry, we will update you as soon as Vibe go online.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#0ea5e9',
                });
                return;
            }

            await addDoc(waitlistRef, {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                createdAt: serverTimestamp(),
            });

            Swal.fire({
                title: '🎉 Joined!',
                text: 'Thanks for joining the waitlist!',
                icon: 'success',
                confirmButtonText: 'Awesome',
                confirmButtonColor: '#0ea5e9',
            });

            setEmail('');
            setName('');
        } catch (error) {
            console.error('Error adding to waitlist:', error);
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#ef4444',
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-lg space-y-4"
        >
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
            />
            <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
                Join Waitlist
            </button>
        </form>
    );
}
